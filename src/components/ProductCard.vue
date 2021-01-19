<template>
   <div class="card">
      <img :src="product.imageUrl" class="product-image" />
      <div class="card-body">
        <h5 class="card-title text-left">{{ product.name }}</h5>
        <div class="row">
          <router-link type="button" class="btn btn-primary btn-lg" :to="'/details/' + product.id">Details</router-link>
          <h4> $ {{ product.price }} </h4>
        </div>
      </div>
   </div>
</template>
<script>
export default {
  name: 'ProductCard',
  props: ['product']
}
</script>
<style>
.product-image {
  height: 300px;
}
</style>
