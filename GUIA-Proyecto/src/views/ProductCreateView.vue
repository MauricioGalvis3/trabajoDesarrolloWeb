<template>
  <div><h2>Crear Producto</h2>
    <ProductForm :loading="loading" @submit="create" @cancel="goBack"/>
    <div v-if="error" class="alert alert-danger mt-3">{{ error }}</div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { createProduct } from "../services/productService";
import ProductForm from "../components/ProductForm.vue";
import { useRouter } from "vue-router";
const router=useRouter(); const loading=ref(false); const error=ref("");
async function create(prod){ loading.value=true; try{ await createProduct(prod); router.push("/products"); }catch{ error.value="Error creando producto"; } loading.value=false; }
function goBack(){ router.push("/products"); }
</script>