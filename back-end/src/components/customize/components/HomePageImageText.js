import React, { Component, Fragment } from "react";
import CKEditors from "react-ckeditor-component";
import { ReactComponent as TruckIcon } from "assets/svgs/truck.svg";
import { ReactComponent as BookIcon } from "assets/svgs/book.svg";
import { ReactComponent as ComputerIcon } from "assets/svgs/computer.svg";

const style = {
  svgIcon: {
    border: "1px solid #dddddd",
    width: "100px",
    height: "100px",
    display: "flex",
    "justify-content": "center",
    "align-items": "center"
  },
  warning: {
    color: "#EE7E04"
  }
};

class HomePageImageText extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      content: "Cutomized Editor"
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="card">
          <div className="card-header">
            <h5>Homepage Hero Image + Text</h5>
          </div>
          <div className="card-body">
            <form
              className="dropzone digits dz-clickable mb-5 border"
              id="singleFileUpload"
              action="/upload.php"
              style={{
                border: "2px dashed #777777",
                backgroundColor: "#F7F7F7"
              }}
            >
              <div className="dz-message needsclick text-center">
                <p>Drag files or click to browse</p>
                <div
                  className="border border-1 p-1 b-r-10 mx-auto d-flex justify-content-left align-items-center"
                  style={{ width: "300px" }}
                >
                  <button
                    type="button"
                    className="btn btn-primary btn-sm btn-delete b-r-4 text-uppercase"
                    type="file"
                  >
                    Choose File
                  </button>
                  <p className="pl-3">No file selected.</p>
                </div>
              </div>
            </form>
            <form className="needs-validation user-add" noValidate="">
              <div className="form-group row">
                <label
                  htmlFor="validationCustom0"
                  className="col-xl-3 col-md-4"
                >
                  Label
                </label>
                <input
                  className="form-control col-xl-9 col-md-8"
                  id="validationCustom0"
                  type="text"
                  required=""
                  placeholder="NOW AVAILABLE FOR KWIK-SHIP"
                />
              </div>
              <div className="form-group row">
                <label
                  htmlFor="validationCustom1"
                  className="col-xl-3 col-md-4"
                >
                  <span>*</span> Headine
                </label>
                <div className="col-xl-9 col-md-8 editor-space">
                  <CKEditors
                    content={this.state.content}
                    events={{
                      blur: this.onBlur,
                      afterPaste: this.afterPaste,
                      change: this.onChange
                    }}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="validationCustom2"
                  className="col-xl-3 col-md-4"
                >
                  <span>*</span> Alignment
                </label>
                <div className="checkbox checkbox-primary col-xl-9 col-md-8">
                  <input
                    id="left-aligned"
                    type="checkbox"
                    data-original-title=""
                    title=""
                  />
                  <label htmlFor="left-aligned">Left Aligned</label>
                  <input
                    id="centered"
                    className="ml-4"
                    type="checkbox"
                    data-original-title=""
                    title=""
                  />
                  <label htmlFor="centered">Centered</label>
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="validationCustom3"
                  className="col-xl-3 col-md-4"
                >
                  <span>*</span> CTA Button Label
                </label>
                <input
                  className="form-control col-xl-9 col-md-8"
                  id="validationCustom3"
                  type="input"
                  required=""
                  placeholder="shop now"
                />
              </div>
              <div className="form-group row ">
                <label
                  htmlFor="validationCustom4"
                  className="col-xl-3 col-md-4"
                >
                  <span>*</span> CTA Button Link
                </label>
                <input
                  className="form-control col-xl-9 col-md-8"
                  id="validationCustom4"
                  type="input"
                  required=""
                  placeholder="www.yourstore.com/page"
                />
              </div>

              <div className="col-md-8 offset-md-4 col-lg-9 offset-lg-3 mt-5" style={{padding:'6px'}}>
                <div className="row">
                    <button className="btn btn-secondary col-sm-6 col-md-3">
                      Save
                    </button>
                    <button
                      className="btn btn-light col-sm-12 col-md-3"
                      style={{
                        backgroundColor: "white",
                        color: "rgb(187, 187, 187)",
                        textTransform: "none"
                      }}
                    >
                      Reset Changes
                    </button>
                  </div>
              </div>
              
            </form>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h5>Promo Bar</h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-xl-2 col-md-12">
                <p>
                  The promo bar displays Stouse production value messaging, you
                  can choose to display this or not.{" "}
                </p>
                <p>Icon images display over your sale price accent color. </p>
              </div>
              <div className="col-xl-9 offset-xl-1 col-md-12">
                <label className="d-block" htmlFor="chk-ani-1">
                  <input
                    className="checkbox_animated"
                    id="chk-ani-1"
                    type="checkbox"
                  />
                  On
                  <input
                    className="checkbox_animated ml-5"
                    id="chk-ani-2"
                    type="checkbox"
                  />
                  off
                </label>
                <div>
                  <div className="py-4">
                    <p className="f-w-600 text-dark">Promo Slot 1</p>
                  </div>
                  <div className="row">
                    <div className="col-md-2">
                      <small className="text-muted">Icon</small>
                      <div className="p-3" style={style.svgIcon}>
                        <ComputerIcon />
                      </div>
                      <a className="ml-4" style={style.warning}>
                        Change
                      </a>
                    </div>
                    <div className="col-md-10">
                      <div className="form-group">
                        <small className="text-muted">Headline</small>
                        <input
                          className="form-control my-1"
                          id="validationCustom3"
                          type="input"
                          required=""
                          placeholder="FREE SHIPPING"
                        />
                        <p>12 of 20 characters used</p>
                        <input
                          className="form-control my-1"
                          id="validationCustom3"
                          type="input"
                          required=""
                          placeholder="On orders over $15"
                        />
                        <p>18 of 40 characters used</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="py-4">
                    <p className="f-w-600 text-dark">Promo Slot 2</p>
                  </div>
                  <div className="row">
                    <div className="col-md-2">
                      <small className="text-muted">Icon</small>
                      <div className="p-3" style={style.svgIcon}>
                        <ComputerIcon />
                      </div>
                      <a className="ml-4" style={style.warning}>
                        Change
                      </a>
                    </div>
                    <div className="col-md-10">
                      <div className="form-group">
                        <small className="text-muted">Headline</small>
                        <input
                          className="form-control my-1"
                          id="validationCustom3"
                          type="input"
                          required=""
                          placeholder="FREE ONLINE PROOFS"
                        />
                        <p>18 of 20 characters used</p>
                        <input
                          className="form-control my-1"
                          id="validationCustom3"
                          type="input"
                          required=""
                          placeholder="Quick online approval process"
                        />
                        <p>29 of 40 characters used</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="py-4">
                    <p className="f-w-600 text-dark">Promo Slot 3</p>
                  </div>
                  <div className="row">
                    <div className="col-md-2">
                      <small className="text-muted">Icon</small>
                      <div className="p-3" style={style.svgIcon}>
                        <ComputerIcon />
                      </div>
                      <a className="ml-4" style={style.warning}>
                        Change
                      </a>
                    </div>
                    <div className="col-md-10">
                      <div className="form-group">
                        <small className="text-muted">Headline</small>
                        <input
                          className="form-control my-1"
                          id="validationCustom3"
                          type="input"
                          required=""
                          placeholder="FREE SAMPLES"
                        />
                        <p>12 of 20 characters used</p>
                        <input
                          className="form-control my-1"
                          id="validationCustom3"
                          type="input"
                          required=""
                          placeholder="Try before your buy"
                        />
                        <p>19 of 40 characters used</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-6 col-sm-12 col-md-6 mt-1 mt-5" >
                    <button className="btn btn-secondary col-sm-12 col-md-6">
                      Save
                    </button>
                    <button
                      className="btn btn-light col-sm-12 col-md-6"
                      style={{
                        backgroundColor: "white",
                        color: "rgb(187, 187, 187)",
                        textTransform: "none"
                      }}
                    >
                      Reset Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomePageImageText;
