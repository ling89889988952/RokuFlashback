export default {
    template: `
        <div class="container">
            <div class="homePage">
                <h2 class="title-sign">Unlimited movies, TV <br>shows, and more.</h2>
                <div> 
                <form @submit.prevent="login">
                    <div  class="login-content">
                        <h3>Please sign in</h3>
                        <div class="col-md-4 my-1">
                            <input v-model="input.username" type="text" class="form-control" id="inlineFormInputName" placeholder="username" required>
                         </div>

                        <div class="col-md-4 my-1">
                            <input v-model="input.password" type="password" class="form-control" id="inlineFormPassword" placeholder="password" required>
                        </div>

                        <div class="col-md-4 my-1 checkbox">
                            <input v-model="input.remember" id="form-checkbox" type="checkbox" name="checkbox">
                            <label for="form-checkbox">Remember me</label>
                        </div>
                    
                    </div>

                    <div class="col-auto my-1 notice">
                            <button type="submit" class="btn btn-primary">Sign in</button>
                            <p>Forgot password? <a class="click">Click here</a></p>
                    </div>
                </form>
                </div>           
            </div>
        </div>
     `,

    data() {
        return {
            input: {
                username: "",
                password: ""
            },

        }
    },

    methods: {
        login() {
            //console.log(this.$parent.mockAccount.username);
            // debugger;
            if(this.input.username != "" && this.input.password != ""){
                // use the FormData object to collect and send our params

                let formData = new FormData();

                formData.append("username", this.input.username);
                formData.append("password", this.input.password);

                let url = "./includes/index.php?user=true";

                fetch(url, {
                    method:"POST",
                    body:formData,
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                    // tell the app that we have a successful login
                    // and store the user object that we retrieved
                    // true below means that authentication worked
                    // data is the user we retrieved from the DB
                    this.$emit("authenticated", true, data[0]);

                    // push the user to the users page
                    this.$router.replace({name: "users"});

                   
                })
                .catch((err) => console.log(err));
                
            } else {
                console.error("inputs can't be black!");
            }
        }
    }
}