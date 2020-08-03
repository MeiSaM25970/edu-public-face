import React from "react";
import { Product } from "./product";

export function ProductList(props) {
  return (
    <div>
      <Product data={props} />
    </div>
  );
}
