<template>
  <div class="pagination">
    <button
      class="pagination__link"
      :class="{ 'pagination__link-active': page === selectedPage }"
      v-for="page of pageCount"
      :key="page"
      @click="selectPage(page)"
    >
      {{ page }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'PaginationBlock',
  data: () => ({
    selectedPage: null
  }),
  props: {
    listLength: {
      type: Number,
      required: true
    },
    pageSize: {
      type: Number,
      default: 5
    },
    startPage: {
      type: Number,
      default: 1
    }
  },
  computed: {
    pageCount () {
      return Math.ceil(this.listLength / this.pageSize)
    }
  },
  methods: {
    selectPage (page) {
      this.selectedPage = page
      this.$emit('select-page', this.selectedPage)
    }
  },
  created () {
    this.selectedPage = this.startPage
  }
}
</script>

<style lang="scss">
.pagination {
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 8px 0;

  &__link {
    border: none;
    background: transparent;
    cursor: pointer;
    font-size: 16px;
    margin: 0 8px;

    &:hover {
      color: #18C2B3;
      text-decoration: underline;
    }

    &-active {
      color: dodgerblue;
      font-weight: 500;
    }
  }
}
</style>
