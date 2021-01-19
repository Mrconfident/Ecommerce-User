const setProducts = function (state, val) {
  state.products = val
}

const setProduct = function (state, val) {
  state.product = val
}

const setLoad = function (state, val) {
  state.uploadingData = val
}

const setCart = function (state, val) {
  state.cart = val
}

export default {
  setProducts,
  setProduct,
  setLoad,
  setCart
}
