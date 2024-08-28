<script setup>
import { convertTimeStamp } from "../../../helpers/date";

defineProps({
  tableHeaderData: {
    type: Array,
    default: []
  },
  tableData: {
    type: Array,
    default: []
  },
  handleClickRemove: {
    type: Function,
    default: () => {}
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
          >{{item.email}}</td>
          <td class="px-6 py-4">{{item.name}}</td>
          <td class="px-6 py-4">{{item.contact}}</td>
          <td class="px-6 py-4">{{item.birthDate}}</td>
          <td class="px-6 py-4">{{convertTimeStamp(item.timeStamp)}}</td>
          <td class="px-6 py-4 cursor-pointer text-center">✏️</td>
          <td class="px-6 py-4 cursor-pointer text-center" @click="handleClickRemove(item.id)">🗑️</td>
        </tr>
      </tbody>
    </table>
    <div
      v-if="tableData.length === 0"
      class="p-4 text-center text-gray-500 dark:text-gray-400"
    >No data available</div>
  </div>
</template>

<style scoped>
</style>