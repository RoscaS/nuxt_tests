<template>
  <section class="section">
    <app-logo class="logo"/>
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

<style lang="scss">

  .logo {
    margin-left: 75px;
  }

</style>

