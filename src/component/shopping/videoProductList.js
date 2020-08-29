import React from "react";
import { VideoProduct } from "./videoProduct";
import { Loading } from "../Loading";

export function VideoProductList(props) {
  return !props.shoppingData.data ? (
    <Loading />
  ) : (
    <div className="container" style={{ minHeight: 500 }}>
      {props.shoppingData.data.map((data, index) => {
        if (data.isOffline) {
          return (
            <div key={index}>
              <VideoProduct data={data} />
            </div>
          );
        }
      })}
    </div>
  );
}
