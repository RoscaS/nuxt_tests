<template>
  <div>
    <h1 class="title">About Page</h1>
    <ul>
      <li><nuxt-link to="/about">Root</nuxt-link></li>
      <li><nuxt-link to="/about/sol-rosca">Sol Rosca</nuxt-link></li>
      <li><nuxt-link to="/about/bob-mcqueen">Bob Mcqueen</nuxt-link></li>
    </ul>
    <nuxt />
  </div>
</template>

<script>
  export default {
    name: 'index',


  }
</script>

<style lang="scss" scoped>

</style>
