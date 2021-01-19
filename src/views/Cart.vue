<template>
 <div class="container" style="padding: 30px">
    <div class="row d-flex justify-content-center">
      <div class="list-group col-8">
        <a v-for="item in cart" :key="item.id" href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
          <img :src="item.imageUrl" alt height="60" width="60" />
          <p class="h4">{{ item.name }}</p>
          <div class="row">
            <div class="mr-2">
              <p>Unique Price</p>
              <p>${{ item.price }}</p>
            </div>
            <div class="mr-2">
              <p>Total Price</p>
              <p>${{ item.price * item.quantity }}</p>
            </div>
            <div>
              <p>Quantity</p>
              <p>{{ item.quantity }}</p>
            </div>
          </div>
        </a>
        <div class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            <p class="h4">Total</p>
            <div>
              <p>Total Price</p>
              <p>${{ totalPrice }}</p>
            </div>
        </div>
       <button @click="checkout()" type="button" class="checkout_btn btn-primary btn-lg btn-block mt-4">Checkout</button>
      </div>
    </div>
 </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Cart',
  data () {
    return {
      totalPrice: 0
    }
  },
  computed: {
    ...mapGetters('product', ['cart']),
    ...mapGetters('account', ['user'])
  },
  methods: {
    ...mapActions('product', ['removeCart']),
    calcPrice () {
      this.cart.forEach((element) => {
        this.totalPrice += element.price * element.quantity
      })
    },
    checkout () {
      const vm = this
      setTimeout(() => {
        vm.removeCart()
        alert('Purchase successful!')
        vm.$router.push('/thankyou')
      }, 500)
    }
  },
  mounted () {
    this.calcPrice()
  }
}
</script>
<style>
.row {
  background-color: none;
  /* width: calc(100% - 20pt); */
  height: 200px;
  margin-left: 20px;
  margin-bottom: 20px;
  /* overflow-x: scroll; */
  overflow-y: hidden;
  /* white-space:nowrap */
}
.container {
  margin: 40px;
  position: relative;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px 10px 30px 10px;
  justify-content: center;
}
.checkout_btn {
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
.checkout_btn {
  color: rgb(228, 176, 176);
}
.checkout_btn:hover {
  opacity: 1;
   background-color: #f38c7e;
}
</style>
