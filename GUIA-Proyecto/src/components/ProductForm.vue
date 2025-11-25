<template>
  <form @submit.prevent="submitForm">
    <div class="mb-3"><label class="form-label">Nombre</label><input v-model="form.name" class="form-control" required /></div>
    <div class="mb-3"><label class="form-label">Precio</label><input type="number" v-model="form.price" class="form-control" required /></div>
    <div class="mb-3"><label class="form-label">Categoría</label><input v-model="form.category" class="form-control" required /></div>
    <div class="mb-3"><label class="form-label">Descripción</label><textarea v-model="form.description" class="form-control" required></textarea></div>
    <div class="d-flex">
      <button class="btn btn-primary" :disabled="loading">{{ loading ? "Guardando..." : "Guardar" }}</button>
      <button type="button" class="btn btn-secondary ms-2" @click="$emit('cancel')">Cancelar</button>
    </div>
  </form>
</template>
<script setup>
import { reactive, watch } from "vue";
const props = defineProps({ product: Object, loading: Boolean });
const emit = defineEmits(["submit","cancel"]);
const form = reactive({ name:"", price:"", category:"", description:"" });
watch(()=>props.product, v => { if(v) Object.assign(form,v); }, { immediate:true });
function submitForm(){ emit("submit", {...form}); }
</script>