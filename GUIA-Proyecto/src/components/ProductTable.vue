<template>
  <table class="table table-bordered table-striped">
    <thead class="table-dark">
      <tr>
        <th>Nombre</th><th>Precio</th><th>Categoría</th><th>Descripción</th><th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="p in products" :key="p.id">
        <td>{{ p.name }}</td><td>${{ p.price }}</td><td>{{ p.category }}</td><td>{{ p.description }}</td>
        <td>
          <button class="btn btn-warning btn-sm" @click="$emit('edit', p.id)">Editar</button>
          <button class="btn btn-danger btn-sm ms-1" @click="$emit('delete', p.id)">Eliminar</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup>
defineProps({ products: Array });
</script>