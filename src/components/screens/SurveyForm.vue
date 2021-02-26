<template>
  <div
    :class="['question-wrapper', { active: currentQuestion === questionIndex }]"
    v-for="(question, questionIndex) in questionList"
    :key="`question-${questionIndex}`"
  >
    <div class="question-head">
      <number-bullet :number="questionIndex + 1" />
      <span class="question-text" v-text="question.questionText" />
    </div>

    <div class="question-field">
      <select-fields
        v-if="question.questionType === 'select'"
        id="questionIndex"
        :selectOptions="question.options"
      />
    </div>
  </div>

  <nav class="question-nav">
    <span>{{ stage }}/{{ questionList.length }}</span>

    <div class="nav-buttons">
      <button :disabled="stage === 1">
        <img src="/vectors/chevron-up.svg" alt="🔼" />
      </button>
      <button>
        <img src="/vectors/chevron-down.svg" alt="🔽" />
      </button>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import questionList from "../../questions";

import NumberBullet from "../NumberBullet.vue";
import SelectFields from "../FormFields/SelectFields.vue";

export default defineComponent({
  name: "SurveyForm",
  components: {
    NumberBullet,
    SelectFields,
  },
  setup() {
    const currentQuestion = ref(0);
    return { questionList, currentQuestion };
  },
  props: {
    stage: {
      type: Number,
      required: true,
    },
    surveyComplete: {
      type: Function,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.question-wrapper {
  margin-top: 3.796rem;
  margin-bottom: 0.83rem;

  &:not(.active) {
    opacity: 0.1;
  }

  .question-head {
    display: flex;
    align-items: center;
  }
  .question-field {
    padding: 3.33rem 0;
    display: grid;
    grid-row-gap: 1.67rem;
  }
}

.question-text {
  margin-left: 1.75rem;
  font-size: 2rem;
  font-weight: bold;
}

.question-nav {
  background: #0074d9;
  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.25);
  padding: 2.33rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;

  .nav-buttons {
    display: flex;
    align-items: stretch;

    button {
      width: 3.0483rem;
      height: 3.0483rem;
      border: none;
      margin-left: 0.7rem;
      border-radius: 0.2102rem;
      display: flex;
      align-items: center;
      cursor: pointer;
      justify-content: center;

      &:disabled {
        background: rgba($color: #ffffff, $alpha: 0.8);
      }
    }
  }
}
</style>
