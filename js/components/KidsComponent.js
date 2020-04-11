import kidallComponent from './KidallComponent.js';
import kidmovieComponent from './KidmovieComponent.js';
import kidtvComponent    from './KidtvComponent.js';
import kidaudioComponent from './KidaudioComponent.js';

export default {
    name:'KidComponent',
    
    template: `
    <div class="kidPage">
        <div class="container">
            <div class="kid-grids-top text-center">
                <div class="row">
                    <div class="col-md-3 media-type kid-grid" v-for="media in mediaTypes" :data-type="media.description" @click="switchMedia(media.component)">
                        <i v-bind:class="[media.iconClass]"></i>
                        <h4>{{ media.description }}</h4>
                    </div>
                </div>
            </div>

            <div class="kidPlay">
                <component :is="this.activeComponent"></component>
            </div>
                  
        </div>

        <div class="kid-grids-bottom">
                <div class="row">
                    <div class="col-sm-4 col-md-2 text-center">
                        <h5>Cooperation:</h5>
                    </div>
                    <div class="col-sm-8 col-md-10 text-center">
                        <div class="row">
                            <img  src="images/apl.png" alt="apl">
                            <img  src="images/boom.png" alt="boom">
                            <img  src="images/dise.png" alt="dise">
                            <img  src="images/disjr.png " alt="disjr">
                            <img  src="images/disxd.png" alt="disxd">
                            <img  src="images/nickt.png" alt="nickt">
                            
                        </div>
                    </div>
                </div>
        </div>
    </div>


        

     `,

     data:function(){
        return {
            activeComponent:kidallComponent,
            mediaTypes:[
                { iconClass: "fas fa-home", description: "All", component: kidallComponent },
                { iconClass: "fas fa-film", description: "Movies", component: kidmovieComponent },
                { iconClass: "fas fa-tv", description: "TV", component: kidtvComponent },
                { iconClass: "fas fa-music", description: "Music", component: kidaudioComponent },
            ]
        }
    },

    methods: {
        switchMedia(theComponent) {
            this.activeComponent = theComponent;
        }
    }

 }
