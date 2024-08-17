 <script setup>
  defineProps({
    formClass: {
      type: String,
      default: "",
    }
  });
</script>

 <template>
  <form @click="$emit('click')" :class="formClass"> 
    <slot> </slot>
  </form>
</template>

<style scoped>
</style>