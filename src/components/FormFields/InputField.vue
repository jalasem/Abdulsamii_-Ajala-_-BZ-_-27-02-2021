<template>
  <div class="input-field">
    <input
      :type="inputType"
      v-model="entry"
      :class="{ error: err }"
      :disabled="inactive"
      @input="err = ''"
      :placeholder="placeholder"
      :pattern="pattern"
    />
    <span class="error" v-if="err" v-text="err" />
  </div>

  <button v-if="!inactive" @click="attemptEntry">
    <span>OK</span>
    <img src="/vectors/check.svg" alt="✅" />
  </button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    inactive: {
      type: Boolean,
      default: true,
    },
    answerKey: {
      type: String,
      required: true,
    },
    inputType: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      required: true,
    },
    sendEntry: {
      type: Function,
      required: true,
    },
    pattern: {
      type: String,
      required: true,
    },
  },
  setup() {
    const entry = ref("");
    const err = ref("");

    return { entry, err };
  },
  methods: {
    attemptEntry() {
      const { answerKey, entry, pattern } = this;

      if (!entry) {
        this.err = "Umm, yeah. We’re gonna need this";
        return;
      }
      if (!new RegExp(pattern).test(entry)) {
        this.err = "Use correct format please";
        return;
      }

      this.sendEntry(answerKey, entry);
    },
  },
});
</script>

<style lang="scss" scoped>
$error: #eb5757;

.input-field {
  display: flex;
  flex-direction: column;
  padding-bottom: 0.833rem;

  .error {
    color: $error;
    margin-top: 0.5833rem;
  }
}
input {
  border: none;
  flex-grow: 1;
  background: none;
  font-size: 1.667rem;
  color: #0074d9;

  &,
  &:focus {
    border-bottom: 2px solid #333333;
  }

  &.error {
    border-bottom-color: $error;
  }
}

button {
  margin-top: 1.667rem;
  border: none;
  background: #a8daff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 0.667rem;
  font-size: 1.5rem;
  font-weight: 500;
  color: #0074d9;
  display: flex;
  align-items: center;
  height: 4.1667rem;
  padding: 0 1.4167rem;
  margin-right: auto;
  cursor: pointer;

  span {
    margin-right: 1.02rem;
  }
}
</style>
