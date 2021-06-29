import React, { useEffect, useState } from "react";
import ProductCategoryService from "../../services/productCategory.service";
import logo from "../../assets/logo/logo.png";

export default function NavigationBar() {
  const [product_categories, setProductCategories] = useState("");

  const FetchProductCategories = () => {
    ProductCategoryService.get_product_categories().then((response) => {
      setProductCategories(response.data.data);
      console.log(response.data.data);
    });
  };

  useEffect(() => {
    FetchProductCategories();
  }, []);

  return (
    <div>
      <nav className="navbar sticky navbar-expand-lg navbar-dark navbar-custom">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-inverse navbar-brand " href="/home">
          <img src={logo} alt="preston-logo" style={{ height: "12vh" }} />
          <b>PRESTON</b>
        </a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="/home">
                Home Page<span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/about">
                About Us
              </a>
            </li>
            <li className="nav-item dropdown active">
              <a
                className="nav-link dropdown-toggle"
                href="/home"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Our Products
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                {!!product_categories &&
                  product_categories.map((product_category) => (
                    <a
                      key={product_category.id}
                      className="dropdown-item"
                      href={`/products/${product_category.id}`}
                    >
                      {product_category.name}
                    </a>
                  ))}
              </div>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
