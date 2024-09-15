//http://localhost:3000/items
import products from "./products.js";
export let allProductsData = [];

document.addEventListener("DOMContentLoaded", () => {
  axios
    .get("http://localhost:3000/items")
    .then((res) => {
      allProductsData = res.data;
    })
    .catch((err) => console.log(err));
  products.createProducts(allProductsData);
});
