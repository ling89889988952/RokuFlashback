export default {
    template: `
        <div class="vertifyPage text-center">
           <h3>Please type the entry code</h3> 
           <div class="text-center vertify-form">
            <form>
                <input v-model="input.code" type="password" class="form-control" id="inlineFormPassword" placeholder="password" required>
                <button v-on:click.prevent="vertify()" type="submit" class="btn btn-primary">Vertify</button>
           </form>
           </div>
        </div>
     `,

    data() {
        return {
            input: {
                code: ""
            },

        }
    },

    methods: {
        vertify() {
            //console.log(this.$parent.mockAccount.username);
            // debugger;
            if(this.input.code != ""){
              if(this.input.code == this.$parent.vertifycode){
                localStorage.setItem("cachedUser",'parent');
                this.$emit("gochild",true);
                this.$router.push({ name: "parent"});
            } else {
                console.error("The code is wrong!");
            }
        }
    }
}
}