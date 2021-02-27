<template>
  <div
    class="card"
    v-for="(option, optionIndex) in selectOptions"
    :key="`option-${id}_${optionIndex}`"
    @click="clickCard(answerKey, option.title)"
  >
    <img :src="option.icon" alt="" />
    <div>
      <span class="select-title" v-text="option.title" />
      <span class="select-subtitle" v-text="option.subtitle" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardField",
  props: {
    id: {
      type: String,
      required: true,
    },
    selectOptions: {
      type: Array,
      required: true,
    },
    answerKey: {
      type: String,
      required: true,
    },
    clickCard: {
      type: Function,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.card {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 1.354rem;
  align-items: center;
  background: white;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 2rem 1.67rem;
  cursor: pointer;

  .select-title {
    font-size: 1.419rem;
    font-weight: 500;
    display: block;
  }
  .select-subtitle {
    margin-top: 0.41667rem;
    display: block;
    font-size: 1rem;
  }
}
</style>
