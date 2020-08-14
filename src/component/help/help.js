import React, { Component } from "react";
export class LoginHelp extends Component {
  state = {};
  scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  componentDidMount() {
    this.scrollTop();
  }
  render() {
    return (
      <div className="extra-page row">
        <div className="container">
          <h1 className="page-title" style={{ margin: "10px 0px" }}>
            راهنمای ورود به کلاس آنلاین (متقاضیان)
          </h1>

          <div className="content">
            {/* <!-- start content --> */}

            <div className="container">
              <div className="newstyle">
                <div className="row bg-w">
                  <div
                    className="row img-header"
                    style={{
                      backgroundColor: "#05c4b4",
                      marginBottom: "20px",
                      position: "relative",
                    }}
                  >
                    <div className="new-title-head col-md-6">
                      <h1
                        style={{
                          textAlign: "center",
                          paddingTop: "90px",
                          fontSize: "24px",
                          color: "#fff",
                        }}
                      >
                        راهنمای شرکت در کلاس آنلاین (وبینار)
                      </h1>
                    </div>
                    <div className=" new-imgchild col-md-6">
                      <img src="http://onlineamoozan.ir/Uploads/Pictures/Larges/برگزاری-کلاس-آنلاین.png" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="panel panel-info">
                        <div className="panel-heading">
                          <h1 className="panel-title text-center">
                            <img
                              src="http://onlineamoozan.ir/Uploads/Pictures/Larges/موبایل.png"
                              alt="اندروید"
                            />
                            آموزش ورود به کلاس آنلاین با موبایل
                          </h1>
                        </div>
                        <div className="panel-body">
                          <div
                            className="ckeditor-html5-video"
                            data-responsive="true"
                            style={{ textAlign: "center" }}
                          >
                            <video
                              __idm_id__="28721153"
                              controls="controls"
                              src="https://s16.namasha.com/videos/dl/7238047739-1080p/%D8%A2%D9%85%D9%88%D8%B2%D8%B4_%D8%AB%D8%A8%D8%AA_%D9%86%D8%A7%D9%85_%D9%88_%D9%88%D8%B1%D9%88%D8%AF_%D8%A8%D9%87_%DA%A9%D9%84%D8%A7%D8%B3_%D8%A2%D9%86%D9%84%D8%A7%DB%8C%D9%86_%D9%88%D8%A8%DB%8C%D9%86%D8%A7%D8%B1_-1080p.mp4"
                              style={{
                                height: "auto",
                                maxWidth: "100%",
                                marginTop: "10px",
                              }}
                              width="100%"
                            >
                              &nbsp;
                            </video>
                          </div>
                        </div>
                        {/* <!-- end panel-body --> */}
                      </div>
                      {/* <!-- end panel --> */}
                    </div>

                    <div className="col-md-6">
                      <div className="panel panel-warning">
                        <div className="panel-heading">
                          <h1 className="panel-title text-center">
                            <img
                              src="http://onlineamoozan.ir/Uploads/Pictures/Larges/لپ-تاپ.png"
                              alt="اندروید"
                            />
                            آموزش ورود و ثبت نام در کلاس آنلاین
                          </h1>
                        </div>
                        <div className="panel-body">
                          <div
                            className="ckeditor-html5-video"
                            data-responsive="true"
                            style={{ textAlign: "center" }}
                          >
                            <video
                              __idm_id__="28721153"
                              controls="controls"
                              src="https://s17.namasha.com/videos/dl/7238103866-1080p/%D8%A2%D9%85%D9%88%D8%B2%D8%B4_%D8%AB%D8%A8%D8%AA_%D9%86%D8%A7%D9%85_%D8%AF%D8%B1_%D9%88%D8%A8%DB%8C%D9%86%D8%A7%D8%B1_%DA%A9%D9%84%D8%A7%D8%B3_%D8%A2%D9%86%D9%84%D8%A7%DB%8C%D9%86_%D8%A7%D8%B2_%D8%B7%D8%B1%DB%8C%D9%82_%DA%A9%D8%A7%D9%85%D9%BE%DB%8C%D9%88%D8%AA%D8%B1-1080p.mp4"
                              style={{
                                height: "auto",
                                maxWidth: "100%",
                                marginTop: "10px",
                              }}
                              width="100%"
                            >
                              &nbsp;
                            </video>
                          </div>
                        </div>
                        {/* <!-- end panel-body --> */}
                      </div>
                      {/* <!-- end panel --> */}
                    </div>
                  </div>
                  {/* <!-- end row child --> */}

                  <div className="panel panel-success">
                    <div className="panel-heading">
                      <h1 className="panel-title text-center">
                        {" "}
                        نحوه ورود و ثبت نام در کلاس آنلاین{" "}
                      </h1>
                    </div>
                    <div className="panel-body">
                      &lt;
                      <img
                        style={{ width: "100%" }}
                        src="http://onlineamoozan.ir/Uploads/Pictures/Larges/راهنمای-ورود-به-کلاس.jpg"
                      />
                    </div>
                    {/* <!-- end panel-body --> */}
                  </div>
                  {/* <!-- end panel --> */}
                </div>
                {/* <!-- end row bg-w --> */}
              </div>
            </div>
            {/* <!-- end content --> */}
          </div>
        </div>
      </div>
    );
  }
}
