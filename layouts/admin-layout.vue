<template>
  <div class="main">

    <Header class="header"/>

    <div class="container">
      <p class="layout">Admin layout</p>
      <div class="content">
        <div class="columns">
          <div class="column is-one-fifth">
          </div>
          <div class="column is is-three-fifths">
            <section class="section">
              <nuxt/>
            </section>
          </div>
        </div>
      </div>
    </div>

    <Footer class="footer"/>

  </div>
</template>

<script>
  import Header from '../components/Header'
  import Footer from '../components/Footer'
  import CategoriesNav from '../components/CategoriesNav'

  export default {
    components: {CategoriesNav, Footer, Header},
  }
</script>

<style lang="scss">
  html {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  .header {
    margin-bottom: 50px;
  }

  .layout {
    float: right;
    color: orangered;
    font-weight: bold;
  }

  .main {
    display: flex;
    min-height: 105vh;
    flex-direction: column;
  }

  .container {
    flex: 1
  }


</style>

