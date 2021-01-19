<template>
    <div class="container">
          <div class="my_row">
              <h1 class="my_main">USER REGISTRATION</h1>
              <a href="#" class="google btn">
                <i class="fa fa-google"></i> Login with Google+
              </a>
          </div>
          <h3> OR </h3>
          <div>
             <input type="text" name="username" placeholder="Username" v-model="name" required>
             <input type="password" name="password" placeholder="Password" v-model="password" required>
             <input type="email" name="email" placeholder="Email" v-model="email" required>
             <input type="submit" value="Register" @click="getData">
        <!-- <router-link to='/login'><input type="submit" value="Register"></router-link> -->
         </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'Register',
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions('account', ['register']),
    getData () {
      const name = this.name
      const email = this.email
      const password = this.password
      this.register({ email, name, password })
    }
  }
}
</script>
<style>
* {box-sizing: border-box}

.my_main{
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
.btn {
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

.btn {
  color: rgb(228, 176, 176);
}
.btn:hover {
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
  background-color: #4392db;
}
</style>
