<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "text"
  },
  inputClass: {
    type: String,
    default: ""
  },
  inputId: {
    type: String,
    default: ""
  },
  placeHolder: {
    type: String,
    default: ""
  },
  required: {
    type: Boolean,
    default: false
  },
  labelClass: {
    type: String,
    default: ""
  },
  label: {
    type: String,
    default: ""
  },
  max: {
    type: String,
    default: ""
  },
  modelValue: [String, Number]
});
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <div>
    <label :for="inputId" :class="labelClass">{{label}}</label>
    <input
      :type="type"
      :id="inputId"
      :class="inputClass"
      :placeholder="placeHolder"
      :required="required"
      :value="modelValue"
      :max="max"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

