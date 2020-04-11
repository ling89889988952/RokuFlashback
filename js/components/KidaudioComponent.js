export default {
    name: "AllMediaComponent",

    template: `
    <div>
        <div class="row">
            <div class="col-12 order-2 order-md-1 col-md-3 media-container float-left">
                <h4 class="media-title">Title:<br>{{ currentMediaDetails.media_title }}</h4><br>
                <p class="media-details">Release Year: {{ currentMediaDetails.media_release }}</p>
                <h4 class="comment">Do yor like video?</h4>
                <div class="row kid-emoj">
                    <div class="emoj"><i class="far fa-smile-wink"></i></div>
                    <div class="emoj"><i class="far fa-meh"></i></div>
                    <div class="emoj"><i class="far fa-frown"></i></div>
                    <div class="emoj"><i class="far fa-tired"></i></div>
                </div>
                <div id="fb-root"></div>
                <iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fwww.facebook.com%2Fgroups%2F444634085577380%2F&layout=button&size=small&width=67&height=20&appId" width="67" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
            </div>

            <div class="col-12 order-1 order-md-2 col-md-9 media-container text-center">
                <video autoplay controls :src=" 'media/' + currentMediaDetails.media_trailer" class="fs-video"></video>
            </div>
        </div>

        <div class="mediaContainer row">
        
            <div class="thumb-wrapper clearfix">
                <img  v-for="item in allRetrievedVideos" :src=" 'images/' + item.media_cover " alt="media thumb" @click="loadNewMovie(item)" class="img-thumbnail rounded  media-thumb col-12 col-sm-4 col-md-3">
            </div>
        </div>
    </div>
    `,

    data: function () {
        return {
            currentMediaDetails: {},
            allRetrievedVideos: []
        }
    },

    created: function(){
        this.retrieveVideoContent();
    },

    methods: {
        retrieveVideoContent() {
            // fetch all the video content here (don't care about filtering, genre etc at this point)
            // debugger;

            // if(localStorage.getItem("cachedVideo")) {
            //     this.allRetrievedVideos = JSON.parse(localStorage.getItem("cachedVideo"));
            //     this.currentMediaDetails = this.allRetrievedVideos[0];
            // }else{

            let url = `./admin/admin_kid_media.php?filter=music`;

            fetch(url)
            .then(res => res.json())
            .then(data =>{
                localStorage.setItem("cachedVideo", JSON.stringify(data));
                this.allRetrievedVideos = data;
                this.currentMediaDetails = data[0];
            })

        }
        },

        loadNewMovie(movie) {
            this.currentMediaDetails = movie;
            
        },
    }


