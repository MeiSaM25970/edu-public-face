import React from "react";
import { Product } from "./product";
import { VideoProduct } from "../shopping/videoProduct";

export function ProductList(props) {
  if (!props.products) {
    return (
      <div
        className="text-primary spinner-border mx-auto mt-5 d-block"
        role="status"
      >
        <span className="sr-only">بارگیری...</span>
      </div>
    );
  } else {
    return props.products.data.map((data, index) => {
      if (!data.isOffline) {
        return (
          <div key={index}>
            <Product data={data} />
          </div>
        );
      }
    });
  }
}
