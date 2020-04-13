<template>
  <div class="base-input">
    <label>
      <select
        class="-shadow"
        :value="value"
        @change="updateValue"
        v-on="$listeners"
      >
        <option
          v-for="option in options"
          :key="option.id"
          v-bind="$attrs"
          selected="option === value"
          >{{ option }}</option
        >
      </select>
    </label>
  </div>
</template>

<script>
import { baseFieldMixin } from '../mixins/basefieldMixin'
export default {
  mixins: [baseFieldMixin],
  props: {
    options: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
