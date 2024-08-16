<script setup>
defineProps({
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
  }
});
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
    />
  </div>
</template>

<style scoped>
</style>