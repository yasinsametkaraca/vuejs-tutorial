
<script setup>
// import Input from "./components/Forms/Input.vue";
// import Select from "./components/Forms/Select.vue";
// import Label from "./components/Forms/Label.vue";
import * as Form from "./components/form-component-mix";   //burada fazla component olduğunda birleştirmek için kullanırız
</script>

<template>
  <!-- <Label>
    Başlık
    <Input />
  </Label>
  <Label>
    Kategori
    <Select />
  </Label> -->
    <Form.Label >
      Title
      <Form.Input />
    </Form.Label>
    <Form.Label>
      Category
      <Form.Select />
    </Form.Label>
</template>