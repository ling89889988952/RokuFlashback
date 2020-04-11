export default {
    template:  `
    <div class="userPage">
        <div class="user-header text-center">
            <h2>{{message}}</h2>
        </div>

        <div class="user-area text-center">
            <div class="row">
                <div class="col-md-6 float-right ">
                    <a @click="goPartent"><img src="images/couch-solid.png" alt="partens icon"></a>
                    <p>Users</p>
                </div>
                <div class="col-md-6 float-left ">
                    <a @click="goKids"><img src="images/kid_icon.png" alt="partens icon"></a>
                    <p>Kids</p>
                </div>
            </div>
        </div>

    </div>

    `
,

data(){
    return {
        message:"Who are you?",
    }
},
methods:{
    goPartent:function(){
        if(window.localStorage){
            let role = localStorage.getItem("cachedUser");
            if(role == 'parent'){
            this.$router.replace({name: "parent"});
            this.$emit("gochildchannel", true);
            
            } else{
                this.$router.replace({name: "vertify"});
            }
    }
},
    goKids:function(){
        localStorage.setItem("cachedUser",'kids');
        this.$router.replace({name: "kids"});
    }
}
}