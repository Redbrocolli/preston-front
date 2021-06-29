import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL
const API_URL = `${BASE_URL}/api/`

console.log(API_URL)

const get_productImages = () => {
    return axios.get(API_URL + `product-images`);
};

const get_productImages_by_product_id = (id) => {
    return axios.get(API_URL + `product-images/${id}`);
};

const productImageService = {
    get_productImages,
    get_productImages_by_product_id
}

export default productImageService;