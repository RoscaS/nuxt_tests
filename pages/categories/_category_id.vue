<template>
  <section class="section">
    <h2>{{ category.name }}</h2>
    <ul>
      <li><nuxt-link :to="`/categories/${category.id}`">root</nuxt-link></li>
      <li><b>Articles:</b></li>
      <ul>
        <li v-for="article in category.articles" :key="article.id">
          <nuxt-link :to="buildUri(article.id)">{{ article.name }}</nuxt-link>
        </li>
      </ul>
    </ul>
    <nuxt/>
  </section>
</template>

<script>
  import categories from '~/plugins/categories'

  export default {
    name: '_category_id',
    computed: {
      category() {
        let id = this.$route.params.category_id
        return categories.find(i => i.id === parseInt(id))
      },
    },
    methods: {
      buildUri(articleId) {
        return `/categories/${this.category.id}/articles/${articleId}`
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
