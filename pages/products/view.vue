<template>
  <div>
    <h1>View Product {{ product.id }}</h1>
    <p>{{ product.title }}</p>
    <p>Price: {{ product.price }}</p>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    created() {
      // console.log(this);
      this.$store.dispatch('product/load')
    },

    computed: {
      ...mapState(['product'])
    }
  }
</script>

<style lang="scss" scoped>

</style>
