import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL
const API_URL = `${BASE_URL}api/`

console.log(API_URL)

const get_products = () => {
    return axios.get(API_URL + `products`);
};

const get_products_by_category = (id) => {
    return axios.get(API_URL + `categories/${id}/products?hide=true`);
};

const get_product_by_id = (id) => {
    return axios.get(API_URL + `products/${id}?hide=true`);
};

const ProductService = {
    get_products,
    get_product_by_id,
    get_products_by_category,
}

export default ProductService;