import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL
const API_URL = `${BASE_URL}api/`

console.log(API_URL)

const get_product_categories = () => {
    return axios.get(API_URL + `categories?hide=true`);
};

const get_product_category = (id) => {
    return axios.get(API_URL + `product-categories/${id}`);
};

const ProductCategoryService = {
    get_product_categories,
    get_product_category
}

export default ProductCategoryService;