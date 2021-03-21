<template>
  <div class="column is-one-quarter-widescreen is-one-third-tablet">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="post.image" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <a class="is-size-6 has-text-weight-medium">{{ post.title }}</a>
        <div class="is-size-7 mb-2">{{ post.date | date }}</div>
        <b-taglist class="mb-2">
          <b-tag v-if="post.most_read" class="mb-0" type="is-primary">Most read</b-tag>
          <b-tag class="mb-0">{{ post.reading_time }} read</b-tag>
        </b-taglist>
        <div class="content has-text-justified">{{ post.excerpt }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostCard",
  props: {
    post: {
      required: true,
      type: Object
    }
  },
  filters: {
    date (value) {
      const date = new Date(Number(value))
      return date.toLocaleDateString('en-GB')
    }
  }
}
</script>

<style lang="scss">
.card {
  height: 100%;

  a {
    color: inherit;
  }
}
</style>
