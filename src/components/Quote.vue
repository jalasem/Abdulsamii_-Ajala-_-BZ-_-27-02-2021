<template>
  <div class="quote">
    <img :src="logo" alt="Company" />

    <star-rating :rating="rating" />
    <p class="price-per-month">
      <span>${{ pricePerMonth }}</span
      >/mo
    </p>
    <p class="price-per-year">${{ pricePerYear }} per year</p>

    <button>Buy now</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StarRating from "./Rating.vue";

export default defineComponent({
  components: {
    StarRating,
  },
  props: {
    logo: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    pricePerMonth: {
      type: Number,
      required: true,
    },
    pricePerYear: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.quote {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 2.75rem;
  margin-bottom: 2.5rem;
  position: relative;
  width: 100%;

  background: #ffffff;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  img {
    max-width: 100%;
  }

  .price-per-month {
    font-size: 1.667rem;
    margin: 0;
    span {
      font-size: 3.5rem;
      font-weight: bold;
    }
  }
  .price-per-year {
    font-size: 1.355rem;
    margin-top: 0.667rem;
    font-weight: 500;
    color: #828282;
  }

  button {
    background: #71f79f;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 0.667rem;
    margin-top: 5rem;
    display: block;
    text-align: center;
    width: 100%;
    padding: 1.25rem;
    border: none;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
  }
}
</style>
