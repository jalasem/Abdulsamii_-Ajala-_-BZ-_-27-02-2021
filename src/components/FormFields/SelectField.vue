<template>
  <select v-model="entry" @change="attemptSelect">
    <option value="" disabled>Select State</option>
    <option
      v-for="(option, optionIndex) in options"
      :key="`${id}_select_${optionIndex}`"
      :value="option.title"
      v-text="option.title"
    />
  </select>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    id: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      required: true,
    },
    answerKey: {
      type: String,
      required: true,
    },
    makeSelection: {
      type: Function,
      required: true,
    },
  },
  setup() {
    const entry = ref("");

    return { entry };
  },
  methods: {
    attemptSelect() {
      if (!this.entry) return;

      this.makeSelection(this.answerKey, this.entry);
    },
  },
});
</script>

<style lang="scss" scoped>
select {
  background: none;
  border: none;
  font-size: 1.667rem;
  padding-bottom: 0.833rem;
  border-bottom: 2px solid #333333;
}
</style>
