<template>
  <div>
    <h4>Les {{ category.name }} {{ article.name }}</h4>
  </div>
</template>

<script>
  import categories from '~/plugins/categories'

  export default {
    name: 'article_id',

    computed: {
      catId() {
        return this.$route.params.category_id
      },
      articleId() {
        return this.$route.params.article_id
      },
      category() {
        return categories.find(i => i.id === parseInt(this.catId))
      },
      article() {
        return this.category.articles.find(i => i.id === parseInt(this.articleId))
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
