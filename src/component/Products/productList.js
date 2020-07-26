import React from "react";
import { Product } from "./product";
import { Link } from "react-router-dom";

export function ProductList(props) {
  return props.products.map((item, index) => (
    <div key={index}>
      <Link to={item._id + "/edu"}>
        <Product data={item} />
      </Link>
    </div>
  ));
}
