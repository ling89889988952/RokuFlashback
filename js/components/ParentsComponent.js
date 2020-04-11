import allComponent from './allComponent.js';
import movieComponent from './movieComponent.js';
import tvComponent    from './tvComponent.js';
import audioComponent from './audioComponent.js';

export default {
    name:'ParentComponent',

    template: `
        <div class="parentPage">
            <div class="container">
                <div class="parent-grids-top text-center">
                    <div class="row">
                        <div class="col-md-3 media-type parent-grid" v-for="media in mediaTypes" :data-type="media.description" @click="switchMedia(media.component)">
                            <button type="button" class="media-btn">{{ media.description }}</button>
                        </div>
                    </div>
                </div>

                
                <div class="parentPlay">
                    <component :is="this.activeComponent"></component>
                </div>
            </div>
        </div>
     `,


     data:function(){
        return {
            activeComponent:allComponent,
            mediaTypes:[
                { description: "All Media", component: allComponent },
                { description: "Movies", component: movieComponent },
                { description: "TV", component: tvComponent },
                { description: "Music", component: audioComponent },
            ]
        }

       
    },

    methods: {
        switchMedia(theComponent) {
            this.activeComponent = theComponent;
        }
    }

    
    
    
    }