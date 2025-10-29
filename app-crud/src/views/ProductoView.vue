<template>
  <div class="container mt-4">
    <h4>Gestión de Productos</h4>
    <form @submit.prevent="guardarProducto">
      <input v-model="nombre" class="form-control mb-2" placeholder="Nombre" />
      <input v-model="precio" type="number" class="form-control mb-2" placeholder="Precio" />
      <button class="btn btn-success w-100">Guardar</button>
    </form>

    <ul class="list-group mt-3">
      <li
        v-for="(p, i) in productos"
        :key="i"
        class="list-group-item d-flex justify-content-between"
      >
        {{ p.nombre }} - ${{ p.precio }}
        <div>
          <button class="btn btn-warning btn-sm me-2" @click="editar(i)">Editar</button>
          <button class="btn btn-danger btn-sm" @click="eliminar(i)">Eliminar</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return { productos: [], nombre: '', precio: '' }
  },
  created() {
    const datos = localStorage.getItem('productos')
    this.productos = datos ? JSON.parse(datos) : []
  },
  methods: {
    guardarProducto() {
      if (!this.nombre || !this.precio) {
        alert('Completa todos los campos')
        return
      }
      this.productos.push({ nombre: this.nombre, precio: this.precio })
      localStorage.setItem('productos', JSON.stringify(this.productos))
      this.nombre = ''
      this.precio = ''
    },
    eliminar(index) {
      this.productos.splice(index, 1)
      localStorage.setItem('productos', JSON.stringify(this.productos))
    },
    editar(index) {
      const p = this.productos[index]
      this.nombre = p.nombre
      this.precio = p.precio
      this.eliminar(index)
    }
  }
}
</script>
