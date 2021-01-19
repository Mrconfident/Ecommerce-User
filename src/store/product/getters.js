const products = function (state) {
  return state.products
}

const product = function (state) {
  return state.product
}

const cart = function (state) {
  return state.cart
}

export default {
  products,
  product,
  cart
}
