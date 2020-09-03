import React, { Component } from "react";
import * as userService from "../../service";
import validator from "validator";

export class InvitedToCooperateForm extends Component {
  state = {
    load: false,
    selectedFile: null,
    firstName: "",
    lastName: "",
    resume: "",
    mobile: "",
    description: "",
    firstNameError: false,
    lastNameError: false,
    resumeError: false,
    mobileError: false,
    descriptionError: false,
    isValid: true,
    done: false,
  };
  changeHandler(e) {
    const teacher = {};
    const name = e.target.name;
    const value = e.target.value;
    teacher[name] = value;
    this.setState({ ...this.state.teacher, ...teacher });
  }
  inputHandler(event) {
    if (!event.target.files.length) {
      this.setState({ chooseFile: false, load: false });
    } else
      this.setState({
        selectedFile: event.target.files[0],
        chooseFile: true,
        load: false,
      });
  }

  async submitHandler(event) {
    await event.preventDefault();
    await this.validationInput();
    if (this.state.chooseFile && this.state.selectedFile !== null) {
      this.setState({ resumeError: false, load: false });
      await this.uploadFile();
    } else {
      this.setState({ resumeError: true, isValid: false, load: false });
    }
    const data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      resume: this.state.resume,
      mobile: this.state.mobile,
      description: this.state.description,
    };
    if (this.state.isValid) {
      await userService
        .addITC(data)
        .then(this.setState({ done: true, load: false }))
        .catch((e) => {
          console.log(e);
          this.setState({ load: false });
        });
    }
  }
  validationInput() {
    const firstName = validator.isEmpty(this.state.firstName);
    const lastName = validator.isEmpty(this.state.lastName);
    const mobile = validator.isMobilePhone(this.state.mobile, ["fa-IR"]);
    const description = validator.isEmpty(this.state.description);

    if (firstName) {
      this.setState({ firstNameError: true, isValid: false });
    } else {
      this.setState({ firstNameError: false });
    }
    if (lastName) {
      this.setState({ lastNameError: true, isValid: false });
    } else {
      this.setState({ lastNameError: false });
    }

    if (!mobile) {
      this.setState({ mobileError: true, isValid: false });
    } else {
      this.setState({ mobileError: false });
    }
    if (description) {
      this.setState({ descriptionError: true, isValid: false });
    } else {
      this.setState({ descriptionError: false });
    }
    if (!firstName && !lastName && mobile && !description) {
      this.setState({ isValid: true });
    }
  }

  async uploadFile() {
    const uploadData = new FormData();

    uploadData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    await userService
      .uploadResume(uploadData)
      .then((res) => this.setState({ load: false, resume: res.data.path }))
      .catch((e) => {
        console.log(e);
        this.setState({ load: false });
      });
  }
  render() {
    return (
      <div className="container">
        <div className="breadcrumb " style={{ marginTop: 10 }}>
          <h1 style={{ fontSize: 30, textAlign: "right" }}>
            {" "}
            درخواست همکاری مدرسان
          </h1>
          <h3 style={{ marginTop: 30, textAlign: "right" }}>
            مدرسان میتوانند با تکمیل فرم زیر و ارسال رزومه خود جهت همکاری با ما
            اقدام نمایند.
          </h3>
          <form
            className=" form-inline text-right"
            onSubmit={this.submitHandler.bind(this)}
            style={{ marginTop: 50 }}
          >
            {/* <span className="input-group-addon" id="sizing-addon2">
                @
              </span> */}

            <div
              className={
                this.state.firstNameError
                  ? " form-group responsive-itc has-error"
                  : "form-group responsive-itc"
              }
            >
              <input
                type="text"
                className="form-control fname"
                placeholder="نام "
                aria-describedby="sizing-addon2 "
                name="firstName"
                onChange={this.changeHandler.bind(this)}
              />
              <br />
              {this.state.firstNameError ? (
                <span
                  className="text-danger"
                  style={{
                    display: "block",
                    textAlign: "center",
                  }}
                >
                  نام اجباری است.
                </span>
              ) : (
                ""
              )}
            </div>
            <div
              className={
                this.state.lastNameError
                  ? " form-group has-error responsive-itc"
                  : "form-group responsive-itc"
              }
            >
              <input
                type="text"
                className="form-control lname"
                placeholder="نام خانوادگی"
                aria-describedby="sizing-addon2 "
                name="lastName"
                onChange={this.changeHandler.bind(this)}
              />
              <br />
              {this.state.lastNameError ? (
                <span
                  className="text-danger "
                  style={{
                    display: "block",
                    textAlign: "center",
                  }}
                >
                  نام خانوادگی اجباری است.
                </span>
              ) : (
                ""
              )}
            </div>
            <div
              className={
                this.state.mobileError
                  ? " form-group responsive-itc has-error"
                  : "form-group responsive-itc"
              }
              style={{
                transform: "translateY(13px)",
                marginRight: 20,
              }}
            >
              <input
                type="number"
                className="form-control mob responsive-cv"
                placeholder="موبایل"
                aria-describedby="sizing-addon2 "
                name="mobile"
                onChange={this.changeHandler.bind(this)}
              />
              <br />
              <small
                style={{ position: "absolute", right: "50px", top: "40px" }}
              >
                ......... 09 (با صفر شروع شود)
              </small>
              <br />
              {this.state.mobileError ? (
                <span
                  className="text-danger"
                  style={{
                    display: "block",
                    textAlign: "center",
                  }}
                >
                  شماره تماس صحیح وارد نشده است.
                </span>
              ) : (
                ""
              )}
            </div>
            <div
              className={
                this.state.resumeError
                  ? " form-control responsive-cv back-error"
                  : "form-control responsive-cv back"
              }
              style={{
                display: "inline-block",
                marginRight: "20px",
                transform: "translateY(5px)",
              }}
            >
              <label for="exampleInputFile">{"رزومه"}</label>
              <input
                type="file"
                id="exampleInputFile"
                className="  cv"
                name="resume"
                style={{ display: "inline" }}
                onChange={this.inputHandler.bind(this)}
              />
              <br />
              {this.state.resumeError ? (
                <span
                  className="text-danger"
                  style={{
                    marginTop: "10px",
                    display: "block",
                    textAlign: "center",
                  }}
                >
                  رزومه خود را وارد نمایید.
                </span>
              ) : (
                ""
              )}
            </div>
            <br />
            <div
              className={
                this.state.descriptionError
                  ? " form-group itc-des responsive-itc has-error"
                  : "form-group itc-des responsive-itc"
              }
            >
              <textarea
                type="description"
                className="form-control "
                placeholder="توضیحات"
                aria-describedby="sizing-addon2 "
                name="description"
                rows="3"
                style={{ width: "100%" }}
                onChange={this.changeHandler.bind(this)}
              ></textarea>
              <br />
              {this.state.descriptionError ? (
                <span className="text-danger"> توضیحاتی برای ما بنویسید.</span>
              ) : (
                ""
              )}
            </div>
            <br />
            <button
              type="submit"
              className="btn btn-success "
              style={{ margin: "50px 50%" }}
              onClick={() => this.setState({ load: true })}
              disabled={this.state.done}
            >
              {this.state.load
                ? "صبرکنید..."
                : this.state.done
                ? "درخواست ارسال شد"
                : " ثبت درخواست"}
            </button>
          </form>
        </div>
      </div>
    );
  }
}
