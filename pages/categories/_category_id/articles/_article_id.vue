<template>
  <h4>Les {{ category.name }} {{ article.name }}</h4>
</template>

<script>
  import categories from '~/plugins/categories'

  export default {
    name: '_article_id',
    computed: {
      category() {
        let catId = this.$route.params.category_id
        return categories.find(i => i.id === parseInt(catId))
      },
      article() {
        let articleId = this.$route.params.article_id
        return this.category.articles.find(i => i.id === parseInt(articleId))
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
