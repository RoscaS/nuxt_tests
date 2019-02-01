<template>
  <section  v-if="id" class="section">
    <h2>{{ category.name }}</h2>
    <ul>
      <li>
        <nuxt-link :to="`/categories/${id}`">root</nuxt-link>
      </li>
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
    name: 'category_id',

    computed: {
      id () {
        return this.$route.params.category_id
      },
      category() {
        return categories.find(i => i.id === parseInt(this.id))
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
