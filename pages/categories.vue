<template>
<div>
  <div class="columns">
    <div class="column is-one-quarter">
      <h1>Categories</h1>
      <ul>
        <li><nuxt-link to="/categories">root</nuxt-link></li>
        <li v-for="cat in categories" :key="cat.id">
          <nuxt-link :to="`/categories/${cat.id}`">{{ cat.name}}</nuxt-link>
        </li>
      </ul>
    </div>
    <div class="column">
      <section class="section">
        <nuxt/>
      </section>
    </div>
  </div>
</div>
</template>

<script>
  import categories from '~/plugins/categories'

  export default {
    name: 'categories',
    data: () => ({
      categories: categories
    }),
    methods: {
      buildUri(catId, articleId) {
        return `/categories/${catId}/articles/${articleId}`
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>

