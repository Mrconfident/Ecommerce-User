<template>
  <div>
    <!-- <h2 style="text-align:center">User Profile Card</h2>
    <div class="card">
        <img src="../assets/avatar.jpeg" style="width:100%">
        <input v-model="message" placeholder="edit me">
<p>Message is: {{ message }}</p>
        <input v-model="userData.name" placeholder="NAME:">
        <p class="title">NAME : {{ userData.name }}</p>
        <input v-model="userData.email" placeholder="EMAIL:">
        <p class="title">EMAIL: {{ userData.email }}</p>
        <router-link to='/cart'><input type="submit" value="CART"></router-link> -->
         <h2 style="text-align:center">Profile Card</h2>
<div class="card">
  <img src="../assets/avatar.jpeg" alt="name" style="width:100%">
  <p class="title" >NAME: {{ user.name }} </p>
  <p class="title">EMAIL: {{ user.email }}</p>
  <router-link to='/cart'><input type="submit" value="CART"></router-link>
    </div>
</div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Account',
  data: () => ({
    user: {}
  }),
  mounted () {
    console.log('in mounted')
    const url = 'http://10.177.68.101:9601/user/info'
    axios.post(url, { userID: 3 })
      .then((res) => {
        console.log(res.data)
        this.user = res.data
      })
  }
}
</script>
<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  max-width: 350px;
  margin: auto;
  text-align: center;
  font-family: arial;
  padding-bottom: 20px;
}

.title {
  color: grey;
  font-size: 18px;
  border: none;
}

a {
  text-decoration: none;
  font-size: 22px;
  color: black;
}

button:hover, a:hover {
  opacity: 0.7;
}
input[type=submit] {
  background-color: rgb(98, 203, 245);
  color: white;
  cursor: pointer;
  width: 30%;
  line-height: 30px;
  border: none;
}

input[type=submit]:hover {
  background-color: #0569c7;
}
</style>
