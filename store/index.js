import data from '@/static/data.json'

export const state = () => {
  return {
    posts: data,
    search: '',
    isSorted: undefined
  }
}

export const mutations = {
  updateSearch (state, value) {
    state.search = value
  },
  sortList (state) {
    state.isSorted
      ? state.posts.sort((a, b) => a.title < b.title ? 1 : a.title > b.title ? -1 : 0)
      : state.posts.sort((a, b) => a.title < b.title ? -1 : a.title > b.title ? 1 : 0)
    state.isSorted = !state.isSorted
  }
}

export const getters = {
  sorted (state) {
    return !!state.isSorted
  },
  filteredList(state) {
    return state.posts.filter((post) => {
      return post.title
          .toString()
          .toLowerCase()
          .includes(state.search.toLowerCase())
        || post.excerpt
          .toString()
          .toLowerCase()
          .includes(state.search.toLowerCase())
    })
  }
}
