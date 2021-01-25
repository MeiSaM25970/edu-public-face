import React from "react";
export const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
export function ComingSoon() {
  return (
    <div className="coming-soon" style={{ minHeight: 300 }}>
      {scrollTop()}
      <img src="./images/coming-soon.svg" alt="بزودی" />
      <span className="text-center ir-r">بزودی...</span>
    </div>
  );
}
