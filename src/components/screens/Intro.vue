<template>
  <img src="/vectors/umbrellaLogo.svg" alt="Umbrella" class="logo" />
  <h1 class="text-h1 text-center mb-5">So what gives?</h1>

  <div class="gives">
    <template v-for="(give, giveIndex) in gives" :key="`give-${giveIndex}`">
      <number-bullet :number="giveIndex + 1" />
      <span class="give_text" v-text="give" />
    </template>
  </div>

  <button class="start-button" @click="getStarted">Get started</button>

  <div class="powered-by">
    <img src="/vectors/zap.svg" alt="⚡️" />
    <span>Powered by Briza</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NumberBullet from "../NumberBullet.vue";

export default defineComponent({
  name: "IntroScreen",
  components: {
    NumberBullet,
  },
  setup() {
    const gives: string[] = [
      "Answer a few simple questions about your business",
      "Browse through specially curated quotes",
      "Select your quote-of-choice and receive your policy instantly",
    ];
    return { gives };
  },
  props: {
    getStarted: {
      type: Function,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.logo {
  display: block;
  margin: 8.83rem auto 3.91rem;
}

.gives {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 1.75rem;
  grid-row-gap: 2.416rem;
  font-size: 1.5rem;
  margin-bottom: 5.83rem;
}

.start-button {
  text-transform: uppercase;
  background-color: #71f79f;
  font-weight: 700;
  cursor: pointer;
  display: block;
  width: 100%;
  border: none;
  padding: 1.25rem;
  font-size: 1.5rem;
  border-radius: 0.67rem;
}

.powered-by {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: absolute;
  bottom: 5rem;
  left: 0;
  font-size: 1.2125rem;
  color: #bdbdbd;
}
</style>
