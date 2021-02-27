<template>
  <div class="App" :class="{ 'no-scroll': stage === 1 }">
    <div class="top" v-if="stage">
      <div class="umbrella-logo">
        <img src="/vectors/umbrella.svg" alt="Umbrella" />
        <span>Umbrella Hub</span>
      </div>
      <img
        src="/vectors/close.svg"
        alt="close"
        class="close-button"
        @click="stage = 0"
      />
    </div>

    <intro-screen :get-started="proceed" v-if="!stage" />
    <survey-form :survey-complete="proceed" :stage="stage" v-if="stage === 1" />
    <quotes v-if="stage === 2" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import IntroScreen from "./components/screens/Intro.vue";
import SurveyForm from "./components/screens/SurveyForm.vue";
import Quotes from "./components/screens/Quotes.vue";

export default defineComponent({
  name: "App",
  components: {
    IntroScreen,
    SurveyForm,
    Quotes,
  },
  setup() {
    const stage = ref(0);

    return { stage };
  },
  methods: {
    proceed() {
      this.stage++;
    },
  },
});
</script>

<style lang="scss" scoped>
.App {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.503rem;
}

.umbrella-logo {
  display: flex;
  align-items: center;
  color: #0074d9;
  font-size: 1.2rem;
  cursor: pointer;

  span {
    margin-left: 0.719rem;
  }
}
</style>
