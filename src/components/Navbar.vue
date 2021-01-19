<template>
  <div class="navbar">
    <router-link to="/">HOME</router-link>
    <router-link to="/about">ABOUT US</router-link>
    <router-link to="/account">MY ACCOUNT</router-link>
    <div class="dropdown">
      <button class="dropbtn">
        CATEGORIES
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <button @click="getProducts1" >CRICKET</button>
        <button @click="getProducts2" >FOOTBALL</button>
        <button @click="getProducts3" >BADMINTON</button>
        <button @click="getProducts4" >HOCKEY</button>
        <button @click="getProducts5" >VOLLEYBALL</button>
        <!-- <router-link to="/products">CRICKET
          </router-link>
          <a href="#">FOOTBALL</a>
          <a href="#">BADMINTON</a>
          <a href="#">HOCKEY</a>
          <a href="#">VOLLEYBALL</a> -->
      </div>
    </div>
    <router-link to="/login">LOGIN</router-link>
    <button class="cart_btn" @click="getProductsfromCart1">CART</button>
    <div class="search-container">
      <input
        type="text"
        placeholder="Search.."
        name="search"
        v-model="searchInput"
        class="search"
      />
      <button class="search_btn" @click="SearchByName"><i>search</i></button>

      <!-- <form action="">
          <input type="text" placeholder="Search.." name="search" class="search">
          <router-link to="/products">
             <button type="submit" class="search_btn" v-on:click="Search({ search })"><i>search</i></button>
          </router-link>
        </form> -->
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import router from '../router'
import { getCookie } from '../cookies'
export default {
  name: 'Navbar',
  data () {
    return {
      searchInput: ''
    }
  },
  computed: {
    ...mapGetters('account', ['user'])
  },
  methods: {
    ...mapMutations('product', ['setProducts']),
    // ...mapMutations("account",["setUserData"]),
    ...mapActions('product', ['getProductsFromCart']),
    ...mapActions('product', ['getProducts']),
    SearchByName () {
      console.log('Helloooooooooo')
      const search1 = this.searchInput
      axios
        .post('', search1)
        .then((response) => {
          this.setProducts(response.data)
          router.push('/products')
        })
        .catch((error) => {
          console.log(error + ' ******************* ')
          router.push('/products')
        })
    },
    getProductsfromCart1 () {
      debugger
      console.log('in cart ')
      this.getProductsFromCart(getCookie('userID'))
    },
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
<style >
.navbar {
  overflow: hidden;
  background-color: rgb(98, 203, 245);
}

.navbar a {
  float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.navbar a:hover,
.dropdown:hover .dropbtn {
  background-color: #0569c7;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}
.search-container {
  float: right;
}
.search_btn {
  color: white;
  float: right;
  padding: 10px 10px 10px 10px;
  margin-top: 10px;
  margin-right: 16px;
  line-height: 9px;
  background: rgb(174, 176, 177);
  font-size: 14px;
  border: gray;
  cursor: pointer;
  border-radius: 20%;
}
.search_btn:hover {
  background: rgb(98, 203, 245);
}
/* .search_btn {
  float: right;
  padding: 6px;
  margin-top: 8px;
  margin-right: 6px;
  background: white;
  font-size: 15px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}
.search_btn:hover {
  background: #ccc;
} */
.search {
  padding: 6px;
  margin-top: 10px;
  margin-right: 10px;
  padding-right: 200px;
  margin-bottom: 22px;
}
h1 {
  text-shadow: 2px 2px #00b7ff;
}
</style>
