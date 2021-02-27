<template>
  <div class="quotes">
    <img src="/vectors/wind.svg" alt="wind" class="wind" />

    <h1 class="title">Fast like the wind!</h1>
    <p>We dove deep through the internet to get you these great quotes</p>

    <quote-card
      v-for="(
        { pricePerMonth, pricePerYear, rating, logo }, quoteIndex
      ) in quotes"
      :key="`quote-${quoteIndex}`"
      :logo="logo"
      :price-per-month="pricePerMonth"
      :price-per-year="pricePerYear"
      :rating="rating"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import QuoteCard from "../Quote.vue";

interface Quote {
  logo: string;
  rating: number;
  pricePerMonth: Number;
  pricePerYear: Number;
}

export default defineComponent({
  components: {
    QuoteCard,
  },
  setup() {
    const quotes: Quote[] = [
      {
        logo: "/images/pr_logo.png",
        rating: 4.5,
        pricePerMonth: 120,
        pricePerYear: 1440,
      },
      {
        logo: "/images/geico_logo.png",
        rating: 4,
        pricePerMonth: 125,
        pricePerYear: 1500,
      },
      {
        logo: "/images/stateFarm_logo.png",
        rating: 3.5,
        pricePerMonth: 125,
        pricePerYear: 1500,
      },
    ];

    return { quotes };
  },
});
</script>

<style lang="scss" scoped>
.quotes {
  flex-grow: 1;
  overflow-y: auto;
}
.wind {
  display: block;
  margin: 5.046rem auto 3.75rem;
}

.title {
  font-size: 3.1667rem;
  font-weight: 700;
  text-align: center;
}
.title + p {
  font-size: 1.667rem;
  margin: 1.25rem 0 5rem;
  text-align: center;
}
</style>
