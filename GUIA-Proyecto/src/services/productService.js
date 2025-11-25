import axios from "axios";

const BASE_URL = "https://TU-URL-DE-MOCKAPI.io/api/v1/products";

export async function getAllProducts() {
  return axios.get(BASE_URL);
}

export async function getProductById(id) {
  return axios.get(`${BASE_URL}/${id}`);
}

export async function createProduct(product) {
  return axios.post(BASE_URL, product);
}

export async function updateProduct(id, product) {
  return axios.put(`${BASE_URL}/${id}`, product);
}

export async function deleteProduct(id) {
  return axios.delete(`${BASE_URL}/${id}`);
}