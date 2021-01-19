<template>
    <div class="container">
        <img src="../assets/images.png">
        <h1>FOR SHOPPING WITH US!!</h1>
        <router-link to='/'><input type="submit" value="CONTINUE SHOPPING"></router-link>
    </div>
</template>
<script>
export default {
}
</script>
<style >

.container {
  margin: 40px;
  position: relative;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px 10px 30px 10px;
  justify-content: center;
}
.logout{
  width: 70%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  margin: 5px 0;
  opacity: 0.85;
  display: inline-block;
  font-size: 17px;
  line-height: 20px;
  background-color: rgb(98, 203, 245);
  color: white;
  cursor: pointer;
  width: 40%;
}
.logout:hover{
  background-color: #0569c7;
}
input{
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
