<template>
  <div class="main">
    <h2>CATEGORIES</h2>
    <div class="pic_row">
        <a class="item" >
          <button @click="getProducts1" ><img class="image " src="../assets/cricket.jpeg"></button>
          <p class="item_description">CRICKET</p>
        </a>
        <a class="item" >
          <button @click="getProducts2" ><img class="image" src="../assets/football.jpeg"></button>
          <p class="item_description">FOOTBALL</p>
        </a>
        <a class="item" >
          <button @click="getProducts3" ><img class="image" src="../assets/badminton.jpeg"></button>
          <p class="item_description">BADMINTON</p>
        </a>
    </div>
    <div class="pic_row">
        <a class="item" >
          <button @click="getProducts4" ><img class="image" src="../assets/hockey.jpeg"></button>
          <p class="item_description">HOCKEY</p>
        </a>
        <a class="item">
          <button @click="getProducts5" ><img class="image" src="../assets/volleyball.jpeg"></button>
          <p class="item_description">VOLLEYBALL</p>
        </a>
    </div>
    <footer id=footer>
        <p>2021 SpoLub. By <a href="www.google.com">team11.com</a> </p>
    </footer>
  </div>

</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  methods: {
    ...mapActions('product', ['getProducts']),
    getProducts1 () {
      debugger
      console.log('cricket')
      this.getProducts('Cricket')
    },
    getProducts2 () {
      this.getProducts('Football')
    },
    getProducts3 () {
      this.getProducts('Badminton')
    },
    getProducts4 () {
      this.getProducts('Hockey')
    },
    getProducts5 () {
      this.getProducts('Volleyball')
    }
  }
}
</script>
<style>
html, body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0 auto;
  font-family: Helvetica, Arial, sans-serif;
  color: #333;
}
.main {
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  /* overflow-y: scroll; */
  overflow-x: hidden;
 }
/* h2 {
  margin: 0;
  margin-left: 20pt;
  margin-top: 30pt;
  margin-bottom: 15pt;
} */
.pic_row {
  background-color: none;
  /* width: calc(100% - 20pt); */
  height: 300px;
  margin-left: 20px;
  margin-bottom: 20px;
  /* overflow-x: scroll; */
  overflow-y: hidden;
  white-space:nowrap
}
.item {
  display: inline-block;
  width: 250pt;
  height: 200pt;
  background-color: #fff;
  border-radius: 6pt;
  margin-right: 15pt;
  transition: 0.2s ease-in-out;
}
.item:link, .item:visited, .item:active {
  color: #333;
  text-decoration: none;
}
.item:hover {
  opacity: 0.75;
  transform: scale(0.98);
  color: #333;
  text-decoration: none;
}
.image {
  height: 200px;
  width: 320px;
  backgroud-color: #ddd;
  border-radius: 6pt 6pt 0pt 0pt;
  background-size: cover;
  background-position: center;
}
.item_description {
  margin: 0;
  padding-top: 18pt;
  font-size: 17px;
  margin-left: 10pt;
  margin-right: 10pt;
  text-align: center;
  font-family: monospace;
}
/* #footer { height:41px; background:#f2f2f2; white-space:nowrap; line-height:50px; padding:0 15px; color:#7b7b7b; margin-top:120px;}*/
#footer a{
  color:#7b7b7b;
  }
#footer a:hover{
  color:#000;
  }

</style>
