import React, { useEffect, useState } from "react";
import ProductCategoryService from "../../services/productCategory.service";

export default function Footer() {
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
    <div className="container" style={{ paddingTop: "2rem" }}>
      <div className="row">
        <div className="col-sm">
          <small className="d-block mb-3 text-muted">&copy 2021</small>
        </div>
        <div className="col-sm">
          <h5>About PRESTON</h5>
          <ul className="list-unstyled text-small">
            <li>
              <a className="text-muted" href="/home">
                Home Page
              </a>
            </li>
            <li>
              <a className="text-muted" href="/home">
                About Us
              </a>
            </li>
            <li>
              <a className="text-muted" href="/home">
                Contact Us
              </a>
            </li>
            <li>
              <a className="text-muted" href="/terms">
                Terms and Conditions
              </a>
            </li>
          </ul>
        </div>
        <div className="col-sm">
          <h5>Products</h5>
          <ul className="list-unstyled text-small">
            {!!product_categories &&
              product_categories.map((product_category) => (
                <li key={product_category.id}>
                  <a
                    className="text-muted"
                    href={`/products/${product_category.id}`}
                  >
                    {product_category.name}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
