<template >
<section class="vh-100 bg-image" >
  <div class="mask d-flex align-items-center h-100 gradient-custom-3">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card" style="border-radius: 15px;">
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center text-Main mb-5">Create an account</h2>

              <form @click.prevent="handleSubmit">

                <div class="form-group mb-4">
                  <label class="form-label" for="form3Example1cg">First Name</label>
                  <input v-model='firstName' type="text" id="form3Example1cg" class="form-control form-control-lg border" />
                  <div v-if='!firstName' class='errors'> <p>Name required  </p></div>
                </div>
                  <div class="form-group mb-4">
                    <label class="form-label" for="form3Example1cg">Second Name</label>
                  <input v-model='lastName' type="text" id="form3Example1cg" class="form-control form-control-lg border" />
                   <div v-if='!lastName' class='errors'> <p>Name required  </p></div>
                </div>

                <div class="form-group mb-4">
                  <label class="form-label" for="form3Example3cg">Your Email</label>
                  <input v-model='email' type="email" id="form3Example3cg" class="form-control form-control-lg border" />
                  <div v-if='!email' class='errors'> <p> required valid </p></div>
                </div>

                <div class="form-group mb-4">
                  <label class="form-label" for="form3Example4cg">Password</label>
                  <input v-model='password1' type="password" id="form3Example4cg" class="form-control form-control-lg border" />
                  <div v-if='!password1' class='errors'> <p> required valid password </p></div>
                </div>


                <div class="form-check d-flex justify-content-center mb-5">
                  <input
                    class="form-check-input me-2 bg-Main"
                    type="checkbox"
                    v-model="terms"
                    value="true"
                  />
                  <label class="form-check-label" for="form2Example3g">
                    I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                  </label>
                    <div  v-if='!terms' class='errors'> <p>need to check box {{terms}} </p></div>
                </div> 

                <div class="d-flex justify-content-center">
                  <button class="btn bg-Main btn-block btn-lg gradient-custom-4 text-body">Register</button>
                </div>

                <p class="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!" class="fw-bold text-body"><u>Login here</u></a></p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
<script>
import { mapActions} from 'vuex'
export default {
   data(){
       return {
                errors: [],
               firstName :'',
               lastName :'',
               email :'',
               password1:'',
               terms:false
           
       }
   } ,
    methods: {
       checkForm: function (e) {
     

      this.errors = [];

      if (!this.lastName) {
        this.errors.push('Name required.');
      }
      if (!this.firstName) {
        this.errors.push('name required.');
      }
       if (!this.email) {
        this.errors.push('Email required.');
      }
      if (!this.terms) {
        this.errors.push(' checkbox.');
      }
      

      e.preventDefault();
    },
    ...mapActions(['register']),
    async handleSubmit(){
          if(this.email.trim() === ''|| this.firstName.trim() === '' || this.lastName.trim() === ''|| this.terms === false) {
            return
           }

      let user = {
          firstName : this.firstName,
          lastName : this.lastName,
          email : this.email,
          password : this.password1
      }  
      let route = this.$route.query.redirect
      console.log(this.$route.query.redirect)
      this.register({user})
    }
    }
    
    
}
</script>
<style >
  .text-Main{
  color: #ffc400;
  }
  .errors{
    font-size: 1.3rem;
    color: red;
  }   
</style>