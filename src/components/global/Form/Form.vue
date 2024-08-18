 <script setup>
defineProps({
  formClass: {
    type: String,
    default: ""
  },
  submit: {
    type: Function,
    default: () => {}
  }
});
</script>

 <template>
  <form @submit.prevent="submit" :class="formClass">
    <slot></slot>
  </form>
</template>

<style scoped>
</style>