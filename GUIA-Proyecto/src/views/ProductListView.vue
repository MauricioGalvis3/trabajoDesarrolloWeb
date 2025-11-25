<template>
  <div>
    <h2 class="mb-3">Listado de Productos</h2>
    <button class="btn btn-success mb-3" @click="goCreate">Nuevo Producto</button>
    <ProductTable :products="products" @edit="goEdit" @delete="removeProduct" />
    <div v-if="loading" class="alert alert-info mt-3">Cargando...</div>
    <div v-if="error" class="alert alert-danger mt-3">{{ error }}</div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { getAllProducts, deleteProduct } from "../services/productService";
import ProductTable from "../components/ProductTable.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const products = ref([]); const loading = ref(false); const error = ref("");
async function loadProducts(){ loading.value=true; try{ products.value=(await getAllProducts()).data; }catch{ error.value="Error cargando productos"; } loading.value=false; }
function goCreate(){ router.push("/products/create"); }
function goEdit(id){ router.push("/products/edit/"+id); }
async function removeProduct(id){ if(!confirm("¿Eliminar producto?")) return; await deleteProduct(id); loadProducts(); }
onMounted(loadProducts);
</script>