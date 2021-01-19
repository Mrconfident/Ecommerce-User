import axios from 'axios'
import router from '../../router'

export function getProducts ({ commit }, category) {
  const url = 'http://10.177.68.101:9605/product/category'
  console.log('hhiiiiiii')
  axios.post(url, { category: category }).then((response) => {
    console.log(response)
    commit('setProducts', response.data.product)
    router.push('/products')
  }).catch(error => {
    console.log(error)
    router.push('/products')
  })
}

export function productDetails ({ commit }, id) {
  console.log('in product details')
  const url = 'http://10.177.68.101:9605/product'
  console.log('in product details')
  axios.post(url, { productId: id }).then((response) => {
    console.log(response)
    commit('setProduct', response.data.product)
  }).catch(function (error) {
    console.log(error)
  })
}

export function addCart ({ commit, getters }, payload) {
  const cart = getters.cart
  const data = payload.product
  data.quantity = payload.quantity
  cart.push(data)
  commit('setCart', cart)
}

export function removeCart ({ commit, getters }, id) {
  const cart = []
  if (id) {
    for (let index = 0; index < getters.cart.length; index++) {
      const element = getters.cart[index]
      if (element.id !== id) {
        cart.push(element)
      }
    }
  }
  commit('setCart', cart)
}
export function func (a) {
  debugger
  this.$route.push({ path: '/cart' })
  for (let index = 0; index < a.length; index++) {
    productDetails(a[index].productID)
  }
}

export function getProductsFromCart ({ commit }, userid) {
  console.log(userid + ' in cart add')
  console.log(commit)
  const url = 'http://10.177.68.37:9607/transactions/cart'
  debugger
  const response = axios.post(url, { userID: userid })
  console.log('response data', response.data.transactions)
  debugger
  func(response.data.transactions.transactionID)
}

export function addProductToCart ({ commit }, userid, productid, merchantid, quantity) {
  const url = 'https://10.177.68.37:9605/transactions/cart'
  console.log(commit)
  axios.post(url, { data: { userId: userid, productId: productid, merchantId: merchantid, quantity: quantity } })
}

export function editProductInCart ({ commit }, transactionid, quantity) {
  const url = 'https://10.177.68.37:9605/transactions/cart'
  axios.put(url, { data: { transactionid: transactionid, quantity: quantity } }).then((response) => {
    commit('setProducts', response.data)
  }).catch(error => {
    console.log(error)
  })
}

export function removeItemFromcart ({ commit }, tid) {
  console.log(commit)
  const url = 'https://10.177.68.37:9605/transactions/cart'
  axios.delete(url, { data: { transactionId: tid } })
}

export function checkOut ({ commit }, userid) {
  console.log(commit)
  const url = 'https://10.177.68.37:9605/transactions/cart'
  axios.post(url, { data: { userId: userid } }).then(() => {
    removeCart(userid)
  })
}
export default {
  func,
  checkOut,
  removeCart,
  productDetails,
  getProducts,
  addCart,
  addProductToCart,
  editProductInCart,
  removeItemFromcart,
  getProductsFromCart
}
