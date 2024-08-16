<script setup>
// import SampleComponent from "../components/global/Sample";
import Table from "../../components/global/Table";
import Input from "../../components/global/Input";
import Form from "../../components/global/Form";
import { mockTableHeader, data } from "./mockData/table";

// function handleFormSubmit() {
//   console.log('Form Submitted!');
// }
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <!-- @click="handleFormSubmit" -->
    <h1 class="font-semibold text-3xl m-10">Simple CRUD x VueJS</h1>
    <Form class="grid gap-6 mb-6 md:grid-cols-2 w-full">
      <Input
        label="Email"
        labelClass="block my-2 text-sm font-medium text-gray-900 dark:text-white"
        inputClass="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <Input
        label="Name"
        labelClass="block my-2 text-sm font-medium text-gray-900 dark:text-white"
        inputClass="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <Input
        label="Contact No."
        labelClass="block my-2 text-sm font-medium text-gray-900 dark:text-white"
        inputClass="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <Input
        label="Birthday"
        labelClass="block my-2 text-sm font-medium text-gray-900 dark:text-white"
        inputClass="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <button class="bg-gray-500 my-5 w-full border py-2">Submit</button>
    </Form>
    <Table :tableHeaderData="mockTableHeader" :tableData="data" />
  </div>
</template>

<style scoped>
</style>