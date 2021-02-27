<template>
  <form @submit.prevent>
    <div
      :class="[
        'question-wrapper',
        {
          active: currentQuestion === questionIndex,
          passed: currentQuestion > questionIndex,
        },
      ]"
      v-for="(question, questionIndex) in questionList"
      :key="`question-${questionIndex}`"
    >
      <div class="question-head">
        <number-bullet :number="questionIndex + 1" />
        <span class="question-text" v-text="question.questionText" />
      </div>

      <div class="question-field">
        <card-fields
          v-if="question.questionType === 'cards'"
          :answer-key="question.answerKey"
          :id="question.answerKey"
          :click-card="fillField"
          :selectOptions="question.options"
        />
        <input-field
          v-else-if="question.questionType === 'input'"
          :answer-key="question.answerKey"
          :send-entry="fillField"
          :placeholder="question.placeholder || ''"
          :pattern="question.pattern || '[a-zA-Z0-9]+'"
          :inactive="currentQuestion !== questionIndex"
          :input-type="question.inputType"
        />
        <select-field
          v-else-if="question.questionType === 'select'"
          :answerKey="question.answerKey"
          :make-selection="fillField"
          :id="question.answerKey"
          :options="question.options"
        />
      </div>
    </div>
  </form>

  <button
    @click="submitSurvey"
    class="get-quotes"
    v-if="currentQuestion === questionList.length - 1"
  >
    Get quotes
  </button>

  <nav class="question-nav">
    <span>{{ currentQuestion + 1 }}/{{ questionList.length }}</span>

    <div class="nav-buttons">
      <button @click="currentQuestion--" :disabled="currentQuestion === 0">
        <img src="/vectors/chevron-up.svg" alt="🔼" />
      </button>
      <button
        @click="proceed"
        :disabled="currentQuestion === questionList.length - 1"
      >
        <img src="/vectors/chevron-down.svg" alt="🔽" />
      </button>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import questionList from "../../questions";

import NumberBullet from "../NumberBullet.vue";
import CardFields from "../FormFields/CardFields.vue";
import InputField from "../FormFields/InputField.vue";
import SelectField from "../FormFields/SelectField.vue";

export default defineComponent({
  name: "SurveyForm",
  components: {
    NumberBullet,
    CardFields,
    InputField,
    SelectField,
  },
  setup() {
    const currentQuestion = ref(0);
    const formData: any = reactive({});

    // set form data via answer key in each question
    questionList.forEach((question) => {
      formData[question.answerKey] = "";
    });

    return { questionList, currentQuestion, formData };
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
  methods: {
    proceed() {
      const currentAnswerKey = questionList[this.currentQuestion].answerKey;

      if (!this.formData[currentAnswerKey]) return;

      this.currentQuestion++;
    },
    fillField(field: string, entry: any): void {
      this.formData[field] = entry;

      if (this.currentQuestion === this.questionList.length - 1) {
        return;
      }

      this.currentQuestion++;

      console.log(this.formData);
    },
    submitSurvey() {
      // I'm assuming all fields are true unless proven otherwise
      let fieldsComplete = true;
      Object.keys(this.formData).forEach((field) => {
        if (!this.formData[field]) fieldsComplete = false;
      });
      if (!fieldsComplete) return;

      this.surveyComplete(this.formData);
    },
  },
});
</script>

<style lang="scss" scoped>
.question-wrapper {
  margin-top: 3.796rem;
  margin-bottom: 0.83rem;
  transition: all ease-in 0.25s;

  &:not(.active) {
    opacity: 0.1;
  }

  &.passed {
    display: none;
  }

  .question-head {
    display: flex;
    align-items: center;
  }
  .question-field {
    padding: 3.33rem 0 2rem;
    display: grid;
    grid-row-gap: 1.67rem;
  }
}

.question-text {
  margin-left: 1.75rem;
  font-size: 2rem;
  font-weight: bold;
}

.get-quotes {
  margin-top: 5.833rem;
  height: 4.1667rem;
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 700;
  font-size: 1.5rem;
  color: #333333;
  background: #71f79f;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 0.667rem;
  cursor: pointer;
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
