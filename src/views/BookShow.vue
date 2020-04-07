<template>
  <div>{{ book.id }}</div>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      required: true
    }
  }
}
</script>

<style></style>
