// import playComponent from './playComponent.js';

export default {
    name: "AllMediaComponent",

    template: `
    <div>
    <div class="row">
        <div class="col-12 order-2 order-md-1 col-md-3 media-container float-left">
            <h4 class="media-title">Title:<br>{{ currentMediaDetails.media_title }}</h4><br>
            <p class="media-details">Release Year: {{ currentMediaDetails.media_release }}</p>
            <div class="row premission">
            <p>Set Premission:</p>
            <span v-if="premissionall" @click="closepremission(id)"><i class="fas fa-eye"></i></span>
            <span v-if="premissionadult" @click="openpremission(id)"><i class="fas fa-eye-slash"></i></span>

            </div>
            <h4 class="comment">Comment</h4>
            <textarea></textarea>
            <div id="fb-root"></div>
            <iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fwww.facebook.com%2Fgroups%2F444634085577380%2F&layout=button&size=small&width=67&height=20&appId" width="67" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
        </div>

        <div class="col-12 order-1 order-md-2 col-md-9 media-container text-center">
            <video autoplay controls :src=" 'media/' + currentMediaDetails.media_trailer" class="fs-video"></video>
        </div>
    </div>

    <div class="mediaContainer row">
        <div class="d-flex flex-row flex-md-column col-md-2">
            <div class="my-0 mr-md-auto">
                <h2>By Decade</h2>
            </div>

            <div class="mt-md-2 ml-2 media-genres">
                <ul>
                    <li><a @click.prevent="retrieveVideoContent">all</a></li>
                    <li><a href="90s" @click.prevent="filterMedia('90s')">90's</a></li>
                    <li><a href="80s" @click.prevent="filterMedia('80s')">80's</a></li>
                    <li><a href="70s" @click.prevent="filterMedia('70s')">70's</a></li>
                    <li><a href="60s" @click.prevent="filterMedia('60s')">60's</a></li>
                    <li><a href="50s" @click.prevent="filterMedia('50s')">50's</a></li>
                </ul>
            </div>
        </div>

        <div class="col-md-10">
            <div class="thumb-wrapper clearfix">
                <img  v-for="item in allRetrievedVideos" :src=" 'images/' + item.media_cover " alt="media thumb" @click="loadNewMovie(item)" class="img-thumbnail rounded  media-thumb col-12 col-sm-4 col-md-3">
            </div>
        </div>
    </div>
</div>
    `,

    data: function () {
        return {
            id:'',
            permission:'',
            currentMediaDetails: {},
            allRetrievedVideos: [],
            premissionall:'',
            premissionadult:'',
            
        }
    },

    created: function(){
        this.retrieveVideoContent();
        // this.premissionreslut();
    },
    
    methods: {
        filterMedia(filter) {
            let url = `./admin/admin_genre_media.php?filter=${filter}`;
            fetch(url)
            .then(res => res.json())
            .then(data =>{
                this.allRetrievedVideos = data;
                this.currentMediaDetails = data[0];

        })
    },

        retrieveVideoContent() {
            // fetch all the video content here (don't care about filtering, genre etc at this point)
            // debugger;

            // if(localStorage.getItem("cachedVideo")) {
            //     this.allRetrievedVideos = JSON.parse(localStorage.getItem("cachedVideo"));
            //     this.currentMediaDetails = this.allRetrievedVideos[0];
            // }else{



            let url = `./admin/admin_media.php?media=media`;

            fetch(url)
            .then(res => res.json())
            .then(data =>{
                localStorage.setItem("cachedVideo", JSON.stringify(data));
                this.allRetrievedVideos = data;
                this.currentMediaDetails = data[0];
                this.id = this.currentMediaDetails.media_id;
                let currentpremission = data[0].media_premission;
                
                if(currentpremission == '0'){
                    this.premissionadult = true;
                }else{
                    this.premissionall = true;
                }
            })

        },


        loadNewMovie(movie) {
            this.currentMediaDetails = movie;
            this.permission = movie.media_premission;
            this.id = movie.media_id;
    
            if(this.permission == '0'){
                this.premissionall = false;
                this.premissionadult = true;
            }else{
                this.premissionall = true;
                this.premissionadult = false;
            }
            
        },

        closepremission(id){
            this.id = id;
            let url = `./admin/admin_kid_premmion.php?media_id=id`;
            
            fetch(url)
            .then(res => res.json())
            .then(data =>{
                let changeMediaDetails =  data;
                let media_premmison = changeMediaDetails.media_premmison;
                if(media_premmison == '0'){
                    this.premissionadult = true;
                    this.premissionall = false;
                }
            })

        },

        openpremission(id){
            this.id = id;
            let url = `./admin/admin_premission.php?media_id=id`;

            fetch(url)
            .then(res => res.json())
            .then(data =>{
                let changeMediaDetails =  data;
                let media_premmison = changeMediaDetails.media_premmison;
                if(media_premmison == '1'){
                    this.premissionadult = false;
                    this.premissionall = true;
                }
            })

        },

        },
    }
    



