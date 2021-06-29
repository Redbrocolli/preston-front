import React, { useEffect, useState } from "react";
import ProductCategoryService from "../../services/productCategory.service";

export default function ProductCategories() {
  const [product_categories, setProductCategories] = useState("");

  const FetchProductCategories = () => {
    ProductCategoryService.get_product_categories().then((response) => {
      setProductCategories(response.data.data);
    });
  };

  useEffect(() => {
    FetchProductCategories();
  }, []);

  return (
    <div style={{ paddingTop: "2rem" }}>
      <h4 className="font-weight-bold text-left text-secondary border-bottom border-secondary">
        OUR PRODUCTS
      </h4>
      <div className="row" style={{ paddingTop: "1rem" }}>
        {!!product_categories &&
          product_categories.map((product_category) => (
            <div key={product_category.id} className="col-md-3 rounded">
              <a href={`/products/${product_category.id}`}>
                <div className="card card-product bg-dark text-light h-100">
                  <img
                    className="card-img"
                    style={{ height: "30vh" }}
                    src={product_category.url}
                    alt="car_img"
                  />
                  <div className="card-body rounded-bottom">
                    <p className="card-text font-weight-bold text-uppercase">
                      {product_category.name}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          ))}
      </div>
    </div>
  );
}
