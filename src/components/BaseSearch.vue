<template>
  <div class="base-search">
    <label>
      <slot></slot>
      <input
        class="-shadow"
        type="search"
        :value="value"
        @input="updateValue"
        :placeholder="placeholder"
      />
    </label>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ''
    },
    value: [String, Number],
    placeholder: {
      type: String,
      default: 'Поиск...'
    }
  },
  methods: {
    updateValue(book) {
      this.$emit('input', book.target.value)
    }
  }
}
</script>

<style lang="scss" scoped></style>
