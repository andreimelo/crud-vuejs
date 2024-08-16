<script setup>
defineProps({
  tableHeaderData: {
    type: Array,
    default: []
  },
  tableData: {
    type: Array,
    default: []
  }
});
</script>

<template>
  <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th
            scope="col"
            class="px-6 py-3"
            v-for="item in tableHeaderData"
            :key="item.id"
          >{{item.name}}</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          v-for="item in tableData"
          :key="item.id"
        >
          <td
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >{{item.emailAddress}}</td>
          <td class="px-6 py-4">{{item.name}}</td>
          <td class="px-6 py-4">{{item.contactNumber}}</td>
          <td class="px-6 py-4">{{item.birthDate}}</td>
          <td class="px-6 py-4">{{item.timeStamp}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
</style>