<template>

<div class="container">
  <form action="" method="">
    <div class="user_row">
      <h1 class="user_login">USER LOGIN</h1>
        <router-link to="/Home">
        <v-btn class="google login_btn" id="signin-button" x-large block color="#F95E49" v-on:click="signIn"><i class="fa fa-google-plus-official fa-3x"></i>Sign in with Google</v-btn></router-link>
        <!-- <a href="#" class="google login_btn">
          <i class="fa fa-google"></i> Login with Google+
        </a> -->
      </div>
          <h3> OR </h3>
          <div id="inputs">
           <input type="text" name="name" placeholder="Username" id="username" v-model="email" required>
           <input type="password" name="password" placeholder="Password" v-model="password" required>
           <input type="submit" id="login" value="Login" @click.prevent="handleSubmit">
          </div>
         <router-link to='/register'><center><input type="submit" id="register" value="Register" ></center></router-link>
       <!-- <div>
        <input type="text" name="username" placeholder="Username" required>
        <input type="password" name="password" placeholder="Password" required>
        <router-link to='/'><input type="submit" value="Login"></router-link>
      </div> -->

 </form>
      <!-- <router-link to='/register'><input type="submit" value="Register"></router-link> -->
      <footer id=footer>
        <p>2021 SpoLub. By <a href="www.google.com">team11.com</a> </p>
      </footer>

</div>
</template>

<script>
import Vue from 'vue'
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      submitted: false
    }
  },
  methods: {
    ...mapActions('account', ['login']),
    signIn: function () {
      Vue.googleAuth().signIn(this.onSignInSuccess, this.onSignInError)
    },
    onSignInSuccess: function () {
      this.toggleLoading()
      this.resetResponse()
      this.$http.post('http://localhost:8082', { code: 'ZnEuUGe_K_PWX_EgyRneSm16pT8', redirect_uri: 'http://localhost:8082/Home' }).then(function (response) {
        if (response.body) {
          var data = response.body
          var token = 'Bearer ' + data.token
          this.$store.commit('SET_USER', data.user_data)
          this.$store.commit('SET_TOKEN', token)
          if (window.localStorage) {
            window.localStorage.setItem('user', JSON.stringify(data.user_data))
            window.localStorage.setItem('token', token)
          }
          this.$router.push({ name: 'home' })
        }
      }, function (response) {
        var data = response.body
        this.response = data.error
        console.log('BACKEND SERVER - SIGN-IN ERROR', data)
      })
    },
    onSignInError: function (error) {
      this.response = 'Failed to sign-in'
      console.log('GOOGLE SERVER - SIGN-IN ERROR', error)
    },
    toggleLoading: function () {
      this.loading = (this.loading === '') ? 'loading' : ''
    },
    resetResponse: function () {
      this.response = ''
    },
    handleSubmit () {
      debugger
      console.log(' in handle ')
      this.submitted = true
      const email = this.email
      const password = this.password
      if (email && password) {
        this.login({ email, password })
      }
    }
  }
}
</script>
<style>
* {box-sizing: border-box}

.user_login{
    text-align: center;
    align-content: center;
}

.container {
  margin: 40px;
  position: relative;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px 10px 30px 10px;
  justify-content: center;
}

input,
.login_btn {
  width: 70%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  margin: 5px 0;
  opacity: 0.85;
  display: inline-block;
  font-size: 17px;
  line-height: 20px;
}

.login_btn {
  color: rgb(228, 176, 176);
}
.login_btn:hover {
  opacity: 1;
   background-color: #f38c7e;
}

input[type=submit] {
  background-color: rgb(98, 203, 245);
  color: white;
  cursor: pointer;
  width: 40%;
}

input[type=submit]:hover {
  background-color: #0569c7;
}
/* #footer { height:41px; background:#f2f2f2; white-space:nowrap; line-height:50px; padding:0 15px; color:#7b7b7b; margin-top:120px;} */
#footer a{
  color:#7b7b7b;
  }
#footer a:hover{
  color:#000;
  }
</style>
