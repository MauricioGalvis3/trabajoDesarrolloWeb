<template>
  <div>
    <h2>Editar Producto</h2>
    <ProductForm :product="product" :loading="loading" @submit="update" @cancel="goBack"/>
    <div v-if="loadingData" class="alert alert-info">Cargando producto...</div>
    <div v-if="error" class="alert alert-danger mt-3">{{ error }}</div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { getProductById, updateProduct } from "../services/productService";
import { useRoute, useRouter } from "vue-router";
import ProductForm from "../components/ProductForm.vue";
const route=useRoute(); const router=useRouter();
const product=ref(null); const loadingData=ref(true); const loading=ref(false); const error=ref("");
onMounted(async()=>{ try{ product.value=(await getProductById(route.params.id)).data; } catch{ error.value="No se pudo cargar el producto"; } loadingData.value=false; });
async function update(data){ loading.value=true; try{ await updateProduct(route.params.id,data); router.push("/products"); } catch{ error.value="Error actualizando"; } loading.value=false; }
function goBack(){ router.push("/products"); }
</script>