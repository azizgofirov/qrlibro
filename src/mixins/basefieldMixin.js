export const baseFieldMixin = {
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
