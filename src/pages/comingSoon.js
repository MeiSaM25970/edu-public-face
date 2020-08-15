import React from "react";

export function ComingSoon() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="coming-soon">
      {scrollTop()}
      <img src="./images/coming-soon.svg" />
      <span className="text-center ir-r">بزودی...</span>
    </div>
  );
}
