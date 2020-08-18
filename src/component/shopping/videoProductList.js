import React from "react";
import { VideoProduct } from "./videoProduct";
import { Loading } from "../Loading";

export function VideoProductList(props) {
  if (!props.shoppingData) {
    return <Loading />;
  } else
    return !props.shoppingData.data ? (
      <Loading />
    ) : (
      <div className="container" style={{ minHeight: 500 }}>
        {props.shoppingData.data.map((data, index) => (
          <div key={index}>
            <VideoProduct data={data} />
          </div>
        ))}
      </div>
    );
}
