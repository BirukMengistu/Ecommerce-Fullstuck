<template>
   
   
<section class="h-100 gradient-form" style="background-color: #eee;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-xl-6">
        <div class="card rounded-3 text-black">
          <div class="row g-0">
            <div class="col">
              <div class="card-body p-md-5 mx-md-4">

                <div class="text-center login-form-head">
                  <i class="fa fa-sign-in fa-2xl" aria-hidden="true"></i>
                  <h4 class="mt-1 mb-5 pb-1">Bridev Login Form</h4>
                </div>

                <form @submit.prevent="handleSubmit">
                  <p>Please login to your account</p>

                  <div class="form-outline mb-4">
                    <input v-model="email" type="email" id="form2Example11" class="form-control border" placeholder="Phone number or email address"/>
                    <label class="form-label" for="form2Example11">Username</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input v-model="password" type="password" id="form2Example22" class="form-control border" />
                    <label class="form-label" for="form2Example22">Password</label>
                  </div>

                  <div class="text-center pt-1 mb-5 pb-1">
                    <button  class="btn bg-Main btn-block fa-lg gradient-custom-2 mb-3" type="submit">Log in</button>
                    <a class="text-muted" href="#!">Forgot password?</a>
                  </div>

                  <div class="d-flex align-items-center justify-content-center pb-4">
                    <p class="mb-0 me-2">Don't have an account?</p>
                      <router-link to="/register" class="btn btn-register">Register</router-link>
                    </div>

                </form>

              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        

</template>
<script>
import { mapActions } from 'vuex'
export default {
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods: {
    ...mapActions(['login']),
    async handleSubmit() {
      if(this.email.trim() === '' || this.password.trim() === '') {
        return
      }

      let user = {
        email: this.email,
        password: this.password
      }
  
       

       
       let route = this.$route.query.redirect
       
        this.login({user})
         if(this.$route.query.redirect) {
           this.$router.push(this.$route.query.redirect)
       } else {
           this.$router.push({ name: 'Home' })
       }
    }
  }
}
</script>
<style>
  .login-form-head , .text-Main{
  color: #ffc400;
  } 
  .btn-register{
    outline:1px solid #ffc400;
    color: #ffc400;
    cursor: pointer;
  }
</style>