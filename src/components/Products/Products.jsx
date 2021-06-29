import React, { useEffect, useState } from "react"
import ProductService from "../../services/product.service"
import "./Products.css"
import { useParams } from "react-router"

export default function Products(props) {
    const [products, setProducts] = useState([])
    const { id } = useParams()

    const FetchProducts = (id) => {
        ProductService.get_products_by_category(
            id
        ).then((response) => {
            setProducts(response.data.data)
        })
    }

    useEffect(() => {
        FetchProducts(id)
    }, [id])

    return (
        <div>
            <h2 className="font-weight-bold text-left border-bottom border-secondary">{products.length>0?products[0].category.name:""}</h2>
            <div className="row" style={{ paddingTop: "1rem" }}>
                {!!products && products.map(product => (
                    <div key={product.id} className="col-md-4 col-sm-6 rounded pt-2">
                        <a href={`/product/${product.id}`}>
                            <div className="card card-product bg-dark text-light h-100">
                                <img className="card-img-top" style={{ height: "30vh" }} src={product.product_images.length>0?product.product_images[0].url:""} alt="product_img" />
                                <div className="card-body rounded-bottom">
                                    <p className="card-text">{product.name}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div >
    )
}