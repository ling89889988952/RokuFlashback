export default {
    template: `
        <div class="homePage">
            <div class="home-header text-center">
                <h2 class="title-sign">Unlimited movies, TV <br>shows, and more.</h2>
            </div>

            <div class="home-container text-center">
                <form>
                    <div class="login-content text-center">
                        <h3>sign in</h3>
                        <div class="my-1">
                            <input v-model="input.username" type="text" class="form-control" id="inlineFormInputName" placeholder="username" required>
                         </div>
                        <div class="my-1">
                            <input v-model="input.password" type="password" class="form-control" id="inlineFormPassword" placeholder="password" required>
                        </div>
                    </div>

                    <div class="notice text-center">
                        <button v-on:click.prevent="login()" type="submit" class="btn btn-primary">Sign in</button>
        
                        <p>Forgot password? <a href="#">Click here</a></p>
                    </div>
                </form>
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
        
            if(this.input.username != "" && this.input.password != ""){
                let formData = new FormData();

                formData.append("username", this.input.username);
                formData.append("password", this.input.password);

                let url = `./admin/admin_login.php`;

                fetch(url, {
                    method: 'POST',
                    body: formData
                })
                .then(res => res.json())
                .then(data => {
                    if (typeof data != "object") { // means that we're not getting a user object back
                        console.warn(data);
                        alert("authentication failed, please try again");
                        } else {
                        this.$emit("authenticated", true, data);
                        this.$router.replace({ name: "users" });
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                
            } else {
                console.error("Please enter your username and password!");
            }
        }
    }
}