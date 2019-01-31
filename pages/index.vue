<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        nuxt-test
      </h1>
      <div class="links">
        <nuxt-link class="button--green" to="/categories">Catégories</nuxt-link>
      </div>

    </div>
  </section>
</template>

<script>
  import AppLogo from '~/components/AppLogo.vue'

  export default {
    components: {
      AppLogo,
    },
  }
</script>

<style>

</style>

