import React, { Component, Fragment } from "react";
import Breadcrumb from "components/common/Breadcrumb";
import CKEditors from "react-ckeditor-component";
import { AvField, AvForm } from "availity-reactstrap-validation";

import ProductVariantForm from "./components/ProductVariantForm";
import ProductPhotoUpload from "./components/ProductPhotoUpload";
import GeneralInput from "components/common/GeneralInput";

import user from "assets/images/user.png";

export class ProductAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "CK editor"
    };
  }

  render() {
    return (
      <Fragment>
        <Breadcrumb title="Add products" parent="Products" />

        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h5>Add Product</h5>
                </div>
                <div className="card-body">
                  <div className="row product-adding">
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                      <ProductPhotoUpload />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8">
                      <AvForm
                        className="needs-validation add-product-form"
                        onValidSubmit={this.handleValidSubmit}
                        onInvalidSubmit={this.handleInvalidSubmit}
                      >
                        <div className="form form-label-center">
                          <GeneralInput
                            label="Product name"
                            name="productName"
                            placeholder="ProductName"
                          />
                          <div className="form-group ">
                            <label className=""> Description</label>
                            <div className="description-sm">
                              <CKEditors
                                activeclassName="p10"
                                content={this.state.content}
                                events={{
                                  blur: this.onBlur,
                                  afterPaste: this.afterPaste,
                                  change: this.onChange
                                }}
                              />
                            </div>
                          </div>
                          <div className="form-group ">
                            <input
                              className="checkbox_animated"
                              id="chk-ani2"
                              type="checkbox"
                              name="customizable"
                            />
                            Customizable?
                          </div>
                          <div className="row">
                            <div className="col-md-6 col-sm-6">
                              <GeneralInput
                                label="Stouse SKU"
                                name="stouseSku"
                                placeholder="32102"
                              />
                            </div>
                            <div className="col-md-6 col-sm-6">
                              <GeneralInput
                                label="Your SKU"
                                name="yourSku"
                                placeholder="000000"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-6 col-md-3">
                              <GeneralInput
                                label="Markup%"
                                name="markup"
                                placeholder="00"
                              />
                            </div>
                          </div>

                          <div className="variant">
                            <label className="heading"> Variants </label>
                            <ProductVariantForm />
                            <ProductVariantForm />
                            <ProductVariantForm />
                            <ProductVariantForm />
                          </div>
                          <div class="row">
                            <div className="col-md-6 col-sm-6">
                              <button
                                className="btn btn-primary heading"
                                style={{ margin: "20px 0px", width: "100%" }}
                              >
                                View Bulk Discounts
                              </button>
                            </div>
                          </div>
                          <div style={{ marginTop: "30px" }}>
                            <label className="heading">
                              <b>Search engine listing preview </b>
                            </label>
                          </div>
                          <div className="row mt-3">
                            <div className="col-sm-12 col-md-12">
                              <GeneralInput
                                label="Page Title"
                                name="pageTitle"
                                placeholder="Page Title"
                                maxCount={72}
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-12 col-md-12">
                              <GeneralInput
                                label="Descriptiion"
                                name="description"
                                placeholder="Description"
                                maxCount={320}
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-12 col-md-12">
                              <GeneralInput
                                label="URL Handle"
                                name="url"
                                placeholder="URL Handle"
                              />
                            </div>
                          </div>

                          <div className="row" style={{ margin: "30px 0px" }}>
                            <button
                              className="btn btn-secondary col-sm-12 col-md-3 col-lg-3"
                              style={{
                                backgroundColor: "#EE7204",
                                width: "100%",
                                color: "white"
                              }}
                            >
                              Save
                            </button>

                            <button
                              type="button"
                              className="btn btn-light col-sm-12 col-md-3 col-lg-3"
                              style={{
                                width: "100%",
                                color: "#BBBBBB"
                              }}
                            >
                              Discard
                            </button>
                          </div>
                        </div>
                      </AvForm>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ProductAdd;
