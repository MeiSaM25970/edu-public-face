import React, { Component } from "react";

export class Search extends Component {
  render() {
    return (
      <div className="col-md-3">
        <div className="text-center show-on-sm">
          <button
            className="btn btn-block btn-white"
            // onclick="ToggleSearchForm(this)"
          >
            جستجوی پیشرفته <b className="caret"></b>
          </button>
        </div>
        <form className="search-form side-search-form hide-on-sm">
          <div className="search-area card course-search">
            <div className="card-content">
              <input type="hidden" name="TeacherId" id="TeacherId" />
              <input type="hidden" name="AcademyId" id="AcademyId" />

              <div className="row">
                {/* <!--متن جستجو--> */}
                <div className="col-xs-12">
                  <input
                    type="text"
                    id="SearchText"
                    name="SearchText"
                    placeholder="جستجو ..."
                  />
                </div>

                {/* <!--انتخاب موضوع--> */}
                <div className="col-xs-12">
                  <div className="field-tree treeview">
                    <ul className="list-group">
                      <li
                        className="list-group-item node-"
                        data-nodeid="0"
                        style={{ color: undefined, backgroundColor: undefined }}
                      >
                        <span className="icon expand-icon glyphicon glyphicon-plus"></span>
                        <span className="icon node-icon"></span>هنر، ورزش و
                        سرگرمی
                      </li>
                      <li
                        className="list-group-item node-"
                        data-nodeid="12"
                        style={{ color: undefined, backgroundColor: undefined }}
                      >
                        <span className="icon expand-icon glyphicon glyphicon-plus"></span>
                        <span className="icon node-icon"></span>دروس تحصیلی و
                        کنکور
                      </li>
                      <li
                        className="list-group-item node-"
                        data-nodeid="23"
                        style={{ color: undefined, backgroundColor: undefined }}
                      >
                        <span className="icon expand-icon glyphicon glyphicon-plus"></span>
                        <span className="icon node-icon"></span>شغلی و کسب و کار
                      </li>
                      <li
                        className="list-group-item node-"
                        data-nodeid="35"
                        style={{ color: undefined, backgroundColor: undefined }}
                      >
                        <span className="icon expand-icon glyphicon glyphicon-plus"></span>
                        <span className="icon node-icon"></span>زبان و مهاجرت و
                        توریسم
                      </li>
                      <li
                        className="list-group-item node-"
                        data-nodeid="47"
                        style={{ color: undefined, backgroundColor: undefined }}
                      >
                        <span className="icon expand-icon glyphicon glyphicon-plus"></span>
                        <span className="icon node-icon"></span>نرم افزارهای فنی
                        و مهندسی
                      </li>
                      <li
                        className="list-group-item node-"
                        data-nodeid="68"
                        style={{ color: undefined, backgroundColor: undefined }}
                      >
                        <span className="icon expand-icon glyphicon glyphicon-plus"></span>
                        <span className="icon node-icon"></span>پزشکی و طب سنتی
                      </li>
                      <li
                        className="list-group-item node-"
                        data-nodeid="74"
                        style={{ color: undefined, backgroundColor: undefined }}
                      >
                        <span className="icon expand-icon glyphicon glyphicon-plus"></span>
                        <span className="icon node-icon"></span>روانشناسی و علوم
                        تربیتی
                      </li>
                      <li
                        className="list-group-item node-"
                        data-nodeid="83"
                        style={{ color: undefined, backgroundColor: undefined }}
                      >
                        <span className="icon expand-icon glyphicon glyphicon-plus"></span>
                        <span className="icon node-icon"></span>علوم دینی و
                        الهیات
                      </li>
                      <li
                        className="list-group-item node-"
                        data-nodeid="92"
                        style={{ color: undefined, backgroundColor: undefined }}
                      >
                        <span className="icon expand-icon glyphicon glyphicon-plus"></span>
                        <span className="icon node-icon"></span>آموزش عالی
                      </li>
                      <li
                        className="list-group-item node-"
                        data-nodeid="100"
                        style={{ color: undefined, backgroundColor: undefined }}
                      >
                        <span className="icon expand-icon glyphicon glyphicon-plus"></span>
                        <span className="icon node-icon"></span>علوم کشاورزی و
                        زیستی
                      </li>
                      <li
                        className="list-group-item node-"
                        data-nodeid="104"
                        style={{ color: undefined, backgroundColor: undefined }}
                      >
                        <span className="icon expand-icon glyphicon glyphicon-plus"></span>
                        <span className="icon node-icon"></span>ادارات و ضمن
                        خدمت
                      </li>
                      <li
                        className="list-group-item node-"
                        data-nodeid="109"
                        style={{ color: undefined, backgroundColor: undefined }}
                      >
                        <span className="icon glyphicon"></span>
                        <span className="icon node-icon"></span>سایر آموزشها
                      </li>
                    </ul>
                  </div>
                  <input type="hidden" name="FieldId" id="FieldId" />
                </div>

                {/* <!--انتخاب مقطع تحصیلی--> */}
                <div className="col-xs-12">
                  <div className="btn-group bootstrap-select Grade">
                    <button
                      type="button"
                      className="dropdown-toggle bs-placeholder btn btn-primary"
                      data-toggle="dropdown"
                      role="button"
                      data-id="GradeId"
                      title="گروه هدف"
                    >
                      <span className="filter-option pull-left">گروه هدف</span>
                      &nbsp;
                      <span className="bs-caret">
                        <span className="caret"></span>
                      </span>
                    </button>
                    <div className="dropdown-menu open" role="combobox">
                      <div className="bs-searchbox">
                        <input
                          type="text"
                          className="form-control"
                          autoComplete="off"
                          role="textbox"
                          aria-label="Search"
                        />
                      </div>
                      <ul
                        className="dropdown-menu inner"
                        role="listbox"
                        aria-expanded="false"
                      >
                        <li data-original-index="1">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">همه</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="2">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">مقطع هفتم</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="3">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">مقطع نهم</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="4">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">مقطع یازدهم</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="5">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">مقطع دوازدهم</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="6">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">پشت کنکور</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="7">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">پیش از دبستان</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="8">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">
                              انگلیسی زبانان مقیم ایران
                            </span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="9">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">کارشناسی</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="10">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">کنکور کارشناسی ارشد</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="11">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">کارشناسی ارشد</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="12">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">کنکور دکتری</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="13">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">دکتری</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="14">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">مهندسین ساختمان</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="15">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">دبستان</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="16">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">متوسطه اول</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="17">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">متوسطه دوم</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="18">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">مقطع دوم</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="19">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">مقطع سوم</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="20">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">مقطع چهارم</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="21">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">مقطع پنجم</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="22">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">مقطع ششم</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="23">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">
                              تیزهوشان (ورودی متوسطه اول)
                            </span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="24">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">
                              تیزهوشان (ورودی متوسطه دوم)
                            </span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="25">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">آزاد (عمومی)</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="26">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">کودکان</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="27">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">نوجوانان</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="28">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">والدین</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="29">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">خانم ها</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="30">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">آقایان</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="31">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">دانشجویان</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="32">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">کارمندان</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="33">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">کارکنان شرکتها</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="34">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">پزشکان</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="35">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">مدیران</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="36">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">جوانان</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="37">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">کنکور</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="38">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">خصوصی</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="39">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">مقطع هشتم</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="40">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">گروه های دیگر</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="41">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">مقطع دهم</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="42">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">مشاغل مربوطه</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="43">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">استارت آپ ها</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="44">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">کودکان و نوجوانان</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="45">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">کاردانی</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="46">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">روانشناسان</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="47">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">
                              فارغ التحصیلان مقطع کارشناسی
                            </span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="48">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">
                              فارغ التحصیلان مقطع کارشناسی ارشد
                            </span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="49">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">فارغ التحصیلان</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="50">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">ایرانیان خارج از کشور</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="51">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">طلاب</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="52">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">وکلا و حقوقدانان</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="53">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">مادران</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="54">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">پدران</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="55">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">افراد مسن</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="56">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">پرستاران</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="57">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">ورزشکاران</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="58">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">کشاورزان</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="59">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">دامداران</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="60">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">غیر ایرانیان دنیا</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="61">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">درمانگران</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <select
                      className="selectpicker Grade"
                      name="GradeId"
                      id="GradeId"
                      title="گروه هدف"
                      data-style="btn btn-primary"
                      data-size="7"
                      tabIndex="-98"
                      data-live-search="true"
                    >
                      <option className="bs-title-option" value="">
                        گروه هدف
                      </option>
                      <option value="">همه</option>
                      <option value="1">مقطع هفتم</option>
                      <option value="3">مقطع نهم</option>
                      <option value="5">مقطع یازدهم</option>
                      <option value="6">مقطع دوازدهم</option>
                      <option value="7">پشت کنکور</option>
                      <option value="1002">پیش از دبستان</option>
                      <option value="1003">انگلیسی زبانان مقیم ایران</option>
                      <option value="1004">کارشناسی</option>
                      <option value="1005">کنکور کارشناسی ارشد</option>
                      <option value="1006">کارشناسی ارشد</option>
                      <option value="1007">کنکور دکتری</option>
                      <option value="1008">دکتری</option>
                      <option value="1011">مهندسین ساختمان</option>
                      <option value="1013">دبستان</option>
                      <option value="1014">متوسطه اول</option>
                      <option value="1015">متوسطه دوم</option>
                      <option value="1016">مقطع دوم</option>
                      <option value="1017">مقطع سوم</option>
                      <option value="1018">مقطع چهارم</option>
                      <option value="1019">مقطع پنجم</option>
                      <option value="1020">مقطع ششم</option>
                      <option value="1021">تیزهوشان (ورودی متوسطه اول)</option>
                      <option value="1022">تیزهوشان (ورودی متوسطه دوم)</option>
                      <option value="1024">آزاد (عمومی)</option>
                      <option value="2003">کودکان</option>
                      <option value="2004">نوجوانان</option>
                      <option value="2005">والدین</option>
                      <option value="2006">خانم ها</option>
                      <option value="2007">آقایان</option>
                      <option value="2008">دانشجویان</option>
                      <option value="2009">کارمندان</option>
                      <option value="2010">کارکنان شرکتها</option>
                      <option value="2011">پزشکان</option>
                      <option value="2012">مدیران</option>
                      <option value="2013">جوانان</option>
                      <option value="3002">کنکور</option>
                      <option value="4006">خصوصی</option>
                      <option value="4008">مقطع هشتم</option>
                      <option value="4010">گروه های دیگر</option>
                      <option value="4011">مقطع دهم</option>
                      <option value="4012">مشاغل مربوطه</option>
                      <option value="4013">استارت آپ ها</option>
                      <option value="4014">کودکان و نوجوانان</option>
                      <option value="4016">کاردانی</option>
                      <option value="4017">روانشناسان</option>
                      <option value="4018">فارغ التحصیلان مقطع کارشناسی</option>
                      <option value="4019">
                        فارغ التحصیلان مقطع کارشناسی ارشد
                      </option>
                      <option value="4020">فارغ التحصیلان</option>
                      <option value="4021">ایرانیان خارج از کشور</option>
                      <option value="4022">طلاب</option>
                      <option value="4023">وکلا و حقوقدانان</option>
                      <option value="4024">مادران</option>
                      <option value="4025">پدران</option>
                      <option value="4026">افراد مسن</option>
                      <option value="4027">پرستاران</option>
                      <option value="4028">ورزشکاران</option>
                      <option value="4029">کشاورزان</option>
                      <option value="4030">دامداران</option>
                      <option value="4031">غیر ایرانیان دنیا</option>
                      <option value="4032">درمانگران</option>
                    </select>
                  </div>
                </div>

                {/* <!--مرتب سازی بر اساس--> */}
                <div className="col-xs-12">
                  <div className="btn-group bootstrap-select">
                    <button
                      type="button"
                      className="dropdown-toggle bs-placeholder btn btn-primary"
                      data-toggle="dropdown"
                      role="button"
                      data-id="Sort"
                      title="مرتب سازی"
                    >
                      <span className="filter-option pull-left">مرتب سازی</span>
                      &nbsp;
                      <span className="bs-caret">
                        <span className="caret"></span>
                      </span>
                    </button>
                    <div className="dropdown-menu open" role="combobox">
                      <ul
                        className="dropdown-menu inner"
                        role="listbox"
                        aria-expanded="false"
                      >
                        <li data-original-index="1">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">جدیدترین ها</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="2">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">محبوب ترین ها</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                        <li data-original-index="3">
                          <a
                            tabIndex="0"
                            className=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"
                          >
                            <span className="text">پر فروش ترین ها</span>
                            <span className="material-icons  check-mark">
                              {" "}
                              done{" "}
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <select
                      className="selectpicker"
                      name="Sort"
                      id="Sort"
                      title="مرتب سازی"
                      data-style="btn btn-primary"
                      data-size="7"
                      tabIndex="-98"
                    >
                      <option className="bs-title-option" value="">
                        مرتب سازی
                      </option>
                      <option value="1">جدیدترین ها</option>
                      <option value="2">محبوب ترین ها</option>
                      <option value="3">پر فروش ترین ها</option>
                    </select>
                  </div>
                </div>
              </div>

              <br />
              <br />

              <div className="row">
                {/* <!--رنج قیمت--> */}
                <div className="col-xs-12">
                  <div className="col-xs-12">
                    <div
                      id="price-slider"
                      className="noUi-target noUi-rtl noUi-horizontal"
                    >
                      <div className="noUi-base">
                        <div className="noUi-origin" style={{ right: 0 }}>
                          <div
                            className="noUi-handle noUi-handle-lower"
                            data-handle="0"
                            style={{ zIndex: 5 }}
                          >
                            <div className="noUi-handle-touch-area"></div>
                            <div className="noUi-tooltip">
                              <span>0</span>
                            </div>
                          </div>
                        </div>
                        <div
                          className="noUi-connect"
                          style={{ right: 0, left: 0 }}
                        ></div>
                        <div className="noUi-origin" style={{ right: 100 }}>
                          <div
                            className="noUi-handle noUi-handle-upper"
                            data-handle="1"
                            style={{ zIndex: 4 }}
                          >
                            <div className="noUi-handle-touch-area"></div>
                            <div className="noUi-tooltip">
                              <span>15,000,000</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="noUi-pips noUi-pips-horizontal">
                        <div
                          className="noUi-marker noUi-marker-horizontal noUi-marker-large"
                          style={{ right: "0.00000%" }}
                        ></div>
                        <div
                          className="noUi-value noUi-value-horizontal noUi-value-large"
                          style={{ right: "0.00000%" }}
                        >
                          0
                        </div>
                        <div
                          className="noUi-marker noUi-marker-horizontal noUi-marker-large"
                          style={{ right: "100.00000%" }}
                        ></div>
                        <div
                          className="noUi-value noUi-value-horizontal noUi-value-large"
                          style={{ right: "100.00000%" }}
                        >
                          15000000
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 price-lable">
                    از قیمت
                    <span className="start-price text-primary">0</span>
                    تا
                    <span className="end-price text-primary">15,000,000</span>
                    تومان
                  </div>
                  <input
                    type="hidden"
                    id="MinPrice"
                    name="MinPrice"
                    value="0"
                  />
                  <input
                    type="hidden"
                    id="MaxPrice"
                    name="MaxPrice"
                    value="15000000"
                  />
                </div>

                {/* <!--فقط دوره های فعال--> */}
                <div className="col-xs-12">
                  <div className="togglebutton">
                    <label>
                      <input
                        type="checkbox"
                        name="JustEnabled"
                        id="JustEnabled"
                      />
                      <span className="toggle"></span>
                      فقط دوره های فعال
                    </label>
                  </div>
                </div>

                {/* <!--فقط دوره های رایگان--> */}
                <div className="col-xs-12">
                  <div className="togglebutton">
                    <label>
                      <input type="checkbox" name="JustFree" id="JustFree" />
                      <span className="toggle"></span>
                      فقط دوره های رایگان
                    </label>
                  </div>
                </div>

                {/* <!--دکمه جستجو--> */}
                <div className="col-xs-12">
                  <button
                    className="btn btn-success btn-block"
                    //  onclick="RenderCourses(1)"
                  >
                    <i className="material-icons">search</i>
                    جستجو دوره ها
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
