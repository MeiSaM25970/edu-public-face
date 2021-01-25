import React, { Component } from "react";

export class WhyUs extends Component {
  render() {
    return (
      <div className="whyus row" style={{ minHeight: 500 }}>
        <div className="container why-us">
          <div className="row">
            <div className="featured text-center">
              <div className="col-md-4">
                <div className="feature">
                  <div className="img-container-bg">
                    {" "}
                    <img
                      src="/images/feature-2.png"
                      className="make-center"
                      alt="Feature"
                    />{" "}
                  </div>
                  <h6>از هر کجا و در هر زمان یاد بدهید و یاد بگیرید</h6>
                  <p>
                    مدرسان و دانش پذیران با Tad-Group بدون محدودیت مکانی و
                    زمانی، در هر ساعت و هرمکان که باشند می توانند یاد بدهند و یا
                    یاد بگیرند.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature">
                  <div className="img-container-bg">
                    {" "}
                    <img
                      src="/images/feature-3.png"
                      className="make-center"
                      alt="Feature"
                    />{" "}
                  </div>
                  <h6>پشتیبانی از همه دستگاه ها بدون محدودیت</h6>
                  <p>
                    Tad-Group به دلیل ماهیت و طراحی نوین وب سایت آن، بدون نیاز
                    به نصب هرگونه برنامه اضافی، با تمامی دستگاه ها (لپ تاپ،
                    کامپیوتر، موبایل) و تمامی سیستم عاملها سازگاری دارد.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature">
                  <div className="img-container-bg">
                    {" "}
                    <img
                      src="/images/feature-4.png"
                      className="make-center"
                      alt="Feature"
                    />{" "}
                  </div>
                  <h6>یادگیری توانایی های جدید، راحتتر و سریعتر</h6>
                  <p>
                    مدرسان از سرتاسر دنیا در Tad-Group همه روزه در حال برگزاری
                    دوره های مختلف می باشند و شما می توانید تنها با چند کلیک در
                    این دوره ها شرکت کنید.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row container">
            <div className="col-md-4">
              <h6>شرکت در کلاس ها با کمترین هزینه </h6>
              <p>
                در Tad-Group می توانید با کمترین هزینه و بدون نیاز به خارج شدن
                از منزل یا محل کار خود در دوره ها شرکت کرده و چیزهای جدید یاد
                بگیرید.
              </p>
            </div>
            <div className="col-md-4">
              <h6>امکان برگزاری آزمون آنلاین</h6>
              <p>
                در Tad-Group می توانید آزمون های آنلاین برگزار کنید، به دانش
                آموزان نمره بدهید و نمرات آن ها را مقیسه کنید.
              </p>
            </div>
            <div className="col-md-4">
              <h6>دوره های آموزشی با موضوعات و اساتید متنوع</h6>
              <p>
                اساتید زیادی در زمینه های مختلف آموزشی در Tad-Group وجود دارند
                که دائما در حال برگزاری دوره های جدید می باشند. شما می توانید
                متناسب با نیاز خود به راحتی در این دوره ها شرکت کنید.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
