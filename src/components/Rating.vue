<template>
  <div class="star-rating">
    <img
      src="/vectors/full-star.svg"
      v-for="i in fullStars"
      :key="`fstar-${i}`"
      alt="full-star"
    />
    <img src="/vectors/half-star.svg" v-if="halfStar" alt="half-star" />
    <img
      src="/vectors/empty-star.svg"
      v-for="i in emptyStars"
      :key="`estar-${i}`"
      alt="empty-star"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    rating: {
      required: true,
      type: Number,
    },
  },
  computed: {
    fullStars(): number {
      return Math.floor(this.rating);
    },
    halfStar(): boolean {
      return this.rating % 1 !== 0;
    },
    emptyStars(): number {
      return 5 - this.fullStars - (this.halfStar ? 1 : 0);
    },
  },
});
</script>

<style lang="scss" scoped>
.star-rating {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 1.72rem auto 5rem;
}
</style>
