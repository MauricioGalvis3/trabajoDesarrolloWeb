<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <router-link class="navbar-brand" to="/dashboard">CRUD Productos</router-link>
      <div class="navbar-nav">
        <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
        <router-link class="nav-link" to="/products">Productos</router-link>
        <router-link class="nav-link" to="/products/create">Crear Producto</router-link>
      </div>
    </nav>
    <main class="container py-4">
      <router-view />
    </main>
  </div>
</template>