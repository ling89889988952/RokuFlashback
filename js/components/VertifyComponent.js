export default {
    template: `
        <div class="vertifyPage text-center">
           <h3>Please type the password</h3> 
            <form @submit.prevent="login">
                <input v-model="input.password" type="password" class="form-control" id="inlineFormPassword" placeholder="password" required>
                 <button type="submit" class="btn btn-primary">Sign in</button>
           </form>
        </div>
     `,

    data() {
        return {
            input: {
                password: ""
            },

        }
    },

    methods: {
        login() {
            //console.log(this.$parent.mockAccount.username);
            // debugger;
            if(this.input.password != ""){
                // use the FormData object to collect and send our params

                let formData = new FormData();

                formData.append("password", this.input.password);

                let url = "./includes/check.php?password=true";

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
                    this.$router.replace({name: "parent"});

                   
                })
                .catch((err) => console.log(err));
                
            } else {
                console.error("inputs can't be black!");
            }
        }
    }
}