<script setup>
import { reactive, onMounted, ref } from "vue";
import { mockTableHeader, data } from "./mockData/table";
import { addUser, getUser, deleteUser, updateUser } from "../../services/user";
import Table from "../../components/global/Table";
import Input from "../../components/global/Input";
import Form from "../../components/global/Form";

// ref
const form = reactive({
  email: "",
  name: "",
  contact: "",
  birthDate: ""
});
const tableData = ref();
const userId = ref(null);

// methods
const fetchUser = async () => {
  try {
    let result = await getUser();
    tableData.value = result;
  } catch (error) {
    throw error;
  }
};

const editUser = values => {
  const { id, email, name, contact, birthDate, timeStamp } = values;

  form.email = email;
  form.name = name;
  form.contact = contact;
  form.birthDate = birthDate;
  userId.value = id;
};

const clearForm = () => {
  form.email = "";
  form.name = "";
  form.contact = "";
  form.birthDate = "";
};

const removeUser = async userId => {
  try {
    const confirmDelete = confirm("Are you sure you want to remove this user?");
    if (confirmDelete) {
      let result = await deleteUser(userId);
      await fetchUser();
      return result;
    }
  } catch (error) {
    throw error;
  }
};

const handleSubmitForm = async () => {
  try {
    if (userId.value) {
      updateUser(userId.value, form);
      clearForm();
      userId.value = "";
      await fetchUser();
      alert("User updated successfully!");
    } else {
      await addUser(form);
      clearForm();
      await fetchUser();
      alert("User added successfully");
    }
  } catch (error) {
    throw error;
  }
};

//effect
onMounted(() => {
  fetchUser();
});
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <!-- @click="handleFormSubmit" -->
    <h1 class="font-semibold text-3xl m-10">CRUD - User Details</h1>
    <Form :submit="handleSubmitForm" class="grid gap-6 mb-6 md:grid-cols-2 w-full">
      <Input
        label="Email"
        id="email"
        type="email"
        v-model="form.email"
        labelClass="block my-2 text-sm font-medium text-gray-900 dark:text-white"
        inputClass="bg-gray-50 border border-red-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <Input
        label="Name"
        id="name"
        v-model="form.name"
        labelClass="block my-2 text-sm font-medium text-red-900 dark:text-white"
        inputClass="bg-gray-50 border border-red-300 text-red-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <Input
        label="Contact No."
        id="contact"
        type="number"
        v-model="form.contact"
        labelClass="block my-2 text-sm font-medium text-gray-900 dark:text-white"
        inputClass="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <Input
        label="Birthday"
        id="birthDate"
        type="date"
        v-model="form.birthDate"
        labelClass="block my-2 text-sm font-medium text-gray-900 dark:text-white"
        inputClass="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <button class="bg-gray-500 my-5 w-full py-2">Submit</button>
    </Form>
    <Table
      :tableHeaderData="mockTableHeader"
      :tableData="tableData"
      :handleClickRemove="removeUser"
      :handleClickEdit="editUser"
    />
  </div>
</template>

<style scoped>
</style>