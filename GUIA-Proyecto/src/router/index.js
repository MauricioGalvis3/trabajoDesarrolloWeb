import { createRouter, createWebHistory } from "vue-router";
import ProductListView from "../views/ProductListView.vue";
import ProductCreateView from "../views/ProductCreateView.vue";
import ProductEditView from "../views/ProductEditView.vue";
import DashboardView from "../views/DashboardView.vue";

const routes = [
  { path: "/", redirect: "/dashboard" },
  { path: "/dashboard", component: DashboardView },
  { path: "/products", component: ProductListView },
  { path: "/products/create", component: ProductCreateView },
  { path: "/products/edit/:id", component: ProductEditView, props: true }
];

export default createRouter({
  history: createWebHistory(),
  routes
});