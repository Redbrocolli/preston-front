import React, { useEffect, useState } from "react"
import ProductService from "../../services/product.service"
import { useParams } from "react-router"

export default function Product() {
  const [product, setProduct] = useState(null)
  const { id } = useParams()

  const FetchProduct = (id) => {
    ProductService.get_product_by_id(id).then((response) => {
      setProduct(response.data.data)
    })
  }

  useEffect(() => {
    FetchProduct(id)
  }, [id])

  return product ? (
    <div className="container ">
      <div style={{ paddingTop: "1rem" }}>
        <div className="text-left">
          <h4 className="font-weight-bold text-left border-bottom border-secondary">PRODUCT</h4>
          <h2 className="font-weight-bold">Product Informations</h2>
        </div>
        <div className="row" style={{ paddingTop: "1rem" }}>
          <div className="col-sm ">
            <img
              src={
                product.product_images.length > 0
                  ? product.product_images[0].url
                  : ""
              }
              style={{ height: "30vh" }}
              alt="thumbnail"
            />
          </div>
          <div className="col-sm text-left">
            <h2>{product.name}</h2>
            <div className="lead font-weight-bold">
              Status: {product.in_stock? "Available":"Not Available"}
            </div>
            <div className="lead font-weight-bold">Price: {product.price}</div>
            <div className="lead font-weight-bold">
              Catalogue:
              <a href={`${product.catalog}`}> Download</a>
            </div>
            <div className="lead font-weight-normal">{product.description}</div>
          </div>
        </div>
      </div>

      <div style={{ paddingTop: "1rem" }}>
        <div className="text-left">
          <h4 className="font-weight-bold text-left border-bottom border-secondary">PRODUCT</h4>
          <h2 className="font-weight-bold">Product Images</h2>
        </div>
        <div style={{ paddingTop: "1rem" }}>
          {!!product.product_images &&
            product.product_images.map((product_image) => (
              <div className="rounded">
                <div className="card mb-4">
                  <img
                    className="card-img-top"
                    src={product_image.url}
                    alt="car_img"
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  )
}
