import React from "react";
import ProductCategories from "../ProductCategories/ProductCategories";
import Cover from "../Carousel/Carousel";
import Support from "../Support/Support";

export default function Home() {
  return (
    <div>
      <div>
        <Cover />
      </div>
      <div>
        <ProductCategories />
      </div>
      <div>
        <Support />
      </div>
    </div>
  );
}
