<template>
  <img src="/vectors/close.svg" alt="close" class="close-button" />
  <div class="umbrella-logo" v-if="stage">
    <img src="/vectors/umbrella.svg" alt="Umbrella" />
    <span>Umbrella Hub</span>
  </div>

  <IntroScreen :get-started="proceed" v-if="!stage" />
  <SurveyForm :survey-complete="proceed" :stage="stage" v-if="stage === 1" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import IntroScreen from "./components/screens/Intro.vue";
import SurveyForm from "./components/screens/SurveyForm.vue";

export default defineComponent({
  name: "App",
  components: {
    IntroScreen,
    SurveyForm,
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
.close-button {
  position: absolute;
  top: 2rem;
  right: 2.5rem;
  cursor: pointer;
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
