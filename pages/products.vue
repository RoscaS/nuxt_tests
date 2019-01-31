<template>
  <div>
    <h1 class="title">Products</h1>
    <ul>
      <li><nuxt-link to="/Products">Root</nuxt-link></li>
      <li>Edit</li>
      <ul>
        <li><nuxt-link to="/Products/edit/1">product 1</nuxt-link></li>
        <li><nuxt-link to="/Products/edit/2">product 2</nuxt-link></li>
        <li><nuxt-link to="/Products/edit/3">product 3</nuxt-link></li>
      </ul>
    </ul>
    <nuxt />
  </div>
</template>

<script>
  export default {
    name: 'products',
  }
</script>

<style lang="scss" scoped>

</style>
