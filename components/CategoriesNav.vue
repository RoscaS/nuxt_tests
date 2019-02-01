<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        Categories
      </p>
    </header>
    <div class="card-content">
      <ul>
        <li>
          <nuxt-link to="/categories"><b>root</b></nuxt-link>
        </li>
        <li v-for="cat in categories" :key="cat.id">
          <nuxt-link :to="`/categories/${cat.id}`">{{ cat.name}}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import categories from '~/plugins/categories'

  export default {
    name: 'CategoriesNav',
    data: () => ({
      categories: categories,
    }),
    methods: {
      buildUri(catId, articleId) {
        return `/categories/${catId}/articles/${articleId}`
      },
    },
  }
</script>

<style lang="scss" scoped>

  .card {
    max-width: 200px;
  }


</style>
