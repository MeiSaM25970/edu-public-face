import React, { Component, Fragment } from "react";
import { getPolicies } from "../service";
import { Loading } from "../component/Loading";
import { Link } from "react-router-dom";

export class PoliciesPage extends Component {
  state = { text: "", loading: true };
  scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  componentDidMount() {
    this.scrollTop();
    getPolicies().then((res) =>
      this.setState({ text: res.data, loading: false })
    );
  }
  render() {
    return this.loading ? (
      <Loading />
    ) : (
      <Fragment>
        {" "}
        <div
          className="course-details-breadcrumb text-center ir-r container d-block"
          style={{ marginTop: 140 }}
        >
          <div className="breadcrumb text-center">
            <Link to="/">
              <i
                className="breadcrumb-item text-green zmdi zmdi-home zmdi-hc-2x"
                style={{ transform: "translateY(4px)" }}
              ></i>
              <span
                className="breadcrumb-item text-green"
                style={{ paddingLeft: 5, paddingRight: 5 }}
              >
                {"خانه"}
              </span>
            </Link>

            <i
              className=" zmdi zmdi-chevron-left"
              style={{ paddingRight: 5 }}
            ></i>
            <i
              className="breadcrumb-item text-red zmdi zmdi-book zmdi-hc-2x"
              style={{
                paddingRight: 10,
                width: 18,
                height: 18,
                transform: "translateY(6px)",
              }}
            ></i>
            <span
              className="breadcrumb-item text-red"
              style={{ paddingRight: 17 }}
            >
              قوانین و مقررات
            </span>
          </div>
        </div>
        <div className="container" style={{ minHeight: 500 }}>
          <h1 class="page-title" style={{ marginTop: 10 }}>
            بسمه تعالی{" "}
          </h1>
          <p
            dir="RTL"
            style={{ textAlign: "center", marginTop: 20, lineHeight: 3 }}
          >
            <span style={{ fontSize: "14.0pt" }}>
              <span style={{ fontFamily: "iransans-bold" }}>
                اصل اول : تمام فعالیت های این سامانه ، براساس قوانین جمهوری
                اسلامی ایران بوده و رعایت آن برای تمام کابران این سامانه اعم از
                مدرس و متقاضی و سایرین الزامی میباشد ، لذا هرگونه فعالیت مغایر
                با موازین قانونی ، مستوجب تعقیب قضایی خواهد بود .
                <br />
                <br />
              </span>
            </span>
          </p>
          <div
            dir="RTL"
            style={{ textAlign: "justify" }}
            dangerouslySetInnerHTML={{ __html: this.state.text }}
          ></div>
        </div>
      </Fragment>
    );
  }
}
