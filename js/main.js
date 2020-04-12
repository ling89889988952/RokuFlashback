// import the login component first (actually all components here, but we're starting with login)
import LoginComponent from "./components/LoginComponent.js"
import UserComponent from "./components/UserComponent.js"
import VertifyComponent from "./components/VertifyComponent.js"
import ParentsComponent from "./components/ParentsComponent.js"
import KidsComponent from "./components/KidsComponent.js"


(() => {
  let router = new VueRouter({
    // set routes
    routes: [
      { path: '/', redirect: { name: "login" } },
      { path: '/login', name: "login", component: LoginComponent },
      { path: '/users', name: "users", component:UserComponent },
      { path: '/vertify', name: "vertify", component:VertifyComponent },
      { path: '/parent', name: "parent", component:ParentsComponent},
      { path: '/kids', name: "kids", component:KidsComponent},

    ]
  });

  const vm = new Vue({

    data: {
      authenticated:false,
      administrator:false,
      vertifycode:'hello',
      user:[],

    },

    created: function () {
      // do a localstorage session check and set authenticated to true if the session still exists
      // if the cached user exists, then just navigate to their user home page

      // the localstorage session will persist until logout
    },

    methods: {
      setAuthenticated(status, data) {
        this.authenticated = status;
        this.user = data;
        this.$router.push({ path: "/users" });      
      },

      // setAdministrator(status) {
      //   this.administrator= status;     
      // },

      // back to login page, and all control button will be false
      logout() {
        this.$router.push({ path: "/login" });
        this.authenticated = false;
        this.administrator =false;
        this.admin = false;

        if(localStorage.getItem("cachedUser")) {
          localStorage.removeItem("cachedUser");
        }

        if(localStorage.getItem("cachedVideo")){
          localStorage.removeItem("cachedVideo");
        }

      },

      backtouser(){
        this.$router.push({ path: "/users" });
      },

      // In parent channel, go to childchannel, set the 
      gochildchannel(){
        this.$router.push({ path: "/kids" });
      },

      goparentchannel(){
        this.$router.push({ path:"/parent"});
      }

    },

    created:function(){
      // check for a user in localstorage
      // if we've logged in before, this should be here until we manuallly remove

      if(localStorage.getItem("cachedUser")){
        this.$router.push({ name:'users'});
        let role = localStorage.getItem("cachedUser");
            if(role == 'parent'){
              this.authenticated = true;
              this.administrator = true;
            }

      }else{
        this.$router.push({ name:'login'});
      }
     
    },

    router: router
  }).$mount("#app");

  // add some route security here
  router.beforeEach((to, from, next) => {
    console.log('route guard fired');
    // if the Vue suthenticated propert is set to false, then
    // push the user back to the login screen (cuz they're not logged in)
    if(vm.authenticated == false){
      next("/login");
    }else{
      next();
    }
  })
})();
