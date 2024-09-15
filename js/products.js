const searchInput = document.querySelector(".search-input");
const productsDom = document.querySelector(".products");
const btns=document.querySelectorAll(".btn");
import { allProductsData } from "./app.js";
class Products {
  constructor() {
    searchInput.addEventListener("input", (e) => {
      this.filters.searchItems = e.target.value;
      this.renderProducts(allProductsData, this.filters);
    });
    this.filters = {
      searchItems: "",
    };
    btns.forEach(btn=>{
        btn.addEventListener("click",(e)=>this.getBtns(e));
    })
  }
  getBtns(e){
    const filter=e.target.dataset.filter;
    this.filters.searchItems=filter;
    this.renderProducts(allProductsData,this.filters)    
  }
  renderProducts(products, filters) {
    const filteredProducts = products.filter((p) => {
      return p.title.toLowerCase().includes(filters.searchItems.toLowerCase());
    });
    productsDom.innerHTML="";
    this.createProducts(filteredProducts);
  }
  createProducts(products) {
    let result = "";
    products.forEach((product) => {
      result += `<div class="single_product">
             <img src="${product.image}" alt="${product.title}" class="product_img" />
             <span class="product_detail">
               <p class="product_price">${product.price}$</p>
               <p class="product_category">${product.category}</p>
             </span>
           </div>`;
    });
    productsDom.innerHTML = result;
  }
}
export default new Products();
