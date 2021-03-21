<template>
  <div class="has-background-primary">
    <nav class="header">
      <div class="left-side">
        <h1 class="title has-text-white">Posts</h1>
        <div class="sorting">
          <b-tooltip label="Ordenar" size="is-small" position="is-right" type="is-white">
            <b-icon :icon="sortIcon" class="has-text-white" @click.native="sortList"/>
          </b-tooltip>
        </div>
      </div>
      <div class="right-side">
        <b-field class="is-flex is-align-items-center">
          <b-autocomplete
            v-model="search"
            rounded
            placeholder="Search by title or description"
            icon="magnify"
            clearable/>
        </b-field>
      </div>
    </nav>
    <div class="container is-fullhd">
      <section class="section">
        <div class="columns is-multiline">
          <post-card
            v-for="(post, index) in filteredList"
            :key="`post-${index}`"
            :post="post">
          </post-card>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import PostCard from "~/components/PostCard";

export default {
  name: 'HomePage',
  components: {
    PostCard
  },
  computed: {
    search: {
      get() {
        return this.$store.state.search
      },
      set(value) {
        this.$store.commit('updateSearch', value)
      }
    },
    sortIcon() {
      return this.sorted ? 'order-alphabetical-descending' : 'order-alphabetical-ascending'
    },
    ...mapGetters(['filteredList', 'sorted'])
  },
  methods: {
    ...mapMutations(['sortList'])
  }
}
</script>
<style lang="scss">
@import "assets/styles/main";

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding-top: 1.5rem;

  .left-side {
    h1 {
      display: inline-block;
      margin-bottom: 0;
      margin-left: 1.5rem;
    }

    .sorting {
      display: inline-block;
      color: white;

      .icon {
        cursor: pointer;
      }
    }
  }

  .right-side {
    .field {
      width: 400px;
      margin-right: 1.5rem;

      .control {
        width: 100%;
      }
    }
  }

  @include mobile {
    flex-direction: column;
    justify-content: center;
    height: inherit;

    .left-side {
      margin-bottom: 1rem;

      h1 {
        margin-left: 0;
      }
    }

    .right-side {
      width: 100%;
      padding: 0 1.5rem;

      .field {
        width: 100%;
        margin-right: 0;
      }
    }
  }
}
</style>
