<template>
  <div class="base-search">
    <label>
      <slot></slot>
      <input
        class="-shadow"
        type="search"
        :value="value"
        @input="updateValue"
        placeholder="Поиск. . ."
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
    value: [String, Number]
  },
  methods: {
    updateValue(book) {
      this.$emit('input', book.target.value)
    }
  }
}
</script>

<style lang="scss" scoped></style>
