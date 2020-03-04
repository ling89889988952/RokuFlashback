export default {
    template:  `
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <h1 class="user-message"> {{message}} </h1>
                <div  class="login-content">
                <div class="user-area">
                <div class="user-info">
                    <a @click="goPartent"><img src="images/couch-solid.png" alt="partens icon"></a>
                    <p>User</p>
                </div>
                <div class="user-info">
                <a @click="goKids"><img src="images/kid_icon.png" alt="partens icon"></a>
                <p>Kids</p>
                </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    `
,

data(){
    return {
        message:"Who are you?",
        userList: []
    }
},
methods:{
    goPartent:function(){
        this.$router.replace({name: "vertify"});
    },
    goKids:function(){
        this.$router.replace({name: "kids"});
    }
}
}