<template>
  <span class="number_bullet" v-text="number" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NumberBullet",
  props: {
    number: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.number_bullet {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: #a8daff;
  color: #0074d9;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  justify-content: center;
  flex-shrink: 0;
}
</style>
