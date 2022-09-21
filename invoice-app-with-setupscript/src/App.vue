<template>
  <div class="w-screen h-screen bg-blue-800 flex flex-row text-white items-start justify-center">
    <app-sidebar :invoices="invoiceList" :editInvoice="editInvoice" :deleteInvoice="deleteInvoice"/>
    <invoice-content :saveInvoice="saveInvoice" :activeInvoice="state.activeInvoice" />
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
import appSidebar from "./components/appSidebar.vue";
import invoiceContent from "./components/invoiceContent.vue";
const invoiceList = ref([
  {
    id: new Date().getTime(),
    contact: {
      contact_name: "",
      email: "",
      city: "",
      country: "",
      zipcode: "",
    },
    items: [
      {
        id: null,
        name: null,
        qty: null,
        unit_price: null,
        total_price: null,
      },
    ],
  },
]);
const state = reactive({ activeInvoice: null });
const saveInvoice = (invoice) => {
  invoiceList.value.push(invoice);
};
const editInvoice = (invoice) => {
  state.activeInvoice = invoice;
};
const deleteInvoice = (invoice) => {
  invoiceList.value =invoiceList.value.filter((i) => i.id !== invoice.id);
}
</script>