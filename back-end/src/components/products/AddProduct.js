import React, { Component, Fragment } from 'react';
import Breadcrumb from '../common/Breadcrumb';
import CKEditors from "react-ckeditor-component";
import { AvField, AvForm } from 'availity-reactstrap-validation';

import ProductVariantForm from './components/ProductVariantForm';
import ProductPhotoUpload from './components/ProductPhotoUpload';
import GeneralInput from 'components/common/GeneralInput'


import user from 'assets/images/user.png';


export class AddProduct extends Component {

    constructor(props) {
        super(props);

        this.state = {
            content: "CK editor"
        }
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
                                        <div className="col-sm-12 col-md-12 col-lg-5s col-xl-5">
                                            <ProductPhotoUpload />
                                        </div>
                                        <div className="col-sm-12 col-md-12 col-lg-7 col-xl-7">
                                            <AvForm className="needs-validation add-product-form" onValidSubmit={this.handleValidSubmit} onInvalidSubmit={this.handleInvalidSubmit}>
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
                                                                    "blur": this.onBlur,
                                                                    "afterPaste": this.afterPaste,
                                                                    "change": this.onChange
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-group ">
                                                        <input className="checkbox_animated" id="chk-ani2" type="checkbox" name="customizable" />
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
                                                                style={{ margin: '20px 0px', width: "100%" }}
                                                            >
                                                                View Bulk Discounts
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div style={{ marginTop: '30px' }}>
                                                        <label className="heading"> Search engine listing preview </label>
                                                        <div className="form-group mb-3" style={{ marginTop: '20px' }}>
                                                            <label className="c mb-0" style={{ fontWeight: 100 }} >Page title :</label>
                                                            <div>
                                                                <AvField className="form-control mb-0" name="description" id="validationCustom02" type="text" required />
                                                            </div>
                                                            <div style={{ marginTop: '10px', fontSize: '10px' }}> 0 of 70 characters used</div>
                                                            <div className="valid-feedback">Looks good!</div>
                                                        </div>
                                                        <div className="form-group mb-3" style={{ marginTop: '20px' }}>
                                                            <label className="c mb-0" style={{ fontWeight: 100 }}> Description </label>
                                                            <div>
                                                                <AvField className="form-control mb-0" name="description" id="validationCustom02" type="text" required />
                                                            </div>
                                                            <div style={{ marginTop: '10px', fontSize: '10px' }}> 0 of 320 characters used</div>
                                                            <div className="valid-feedback">Looks good!</div>
                                                        </div>
                                                        <div className="form-group mb-3" style={{ marginTop: '20px' }}>
                                                            <label className="c mb-0" style={{ fontWeight: 100 }}> URL and handle </label>
                                                            <div>
                                                                <AvField className="form-control mb-0" name="description" id="validationCustom02" type="text" required />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={{ marginTop: '30px' }} className="row" >
                                                    <div className="col-xs-3 col-sm-3">
                                                        <button
                                                            type="submit"
                                                            className="btn"
                                                            style={{ backgroundColor: "#EE7204", width: "100%", color: "white" }}>Save</button>
                                                    </div>
                                                    <div className="col-xs-3 col-sm-3">
                                                        <button type="button"
                                                            className="btn"
                                                            style={{ backgroundColor: "white", width: "100%", color: "#BBBBBB" }}>Discard</button>
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
        )
    }
}

export default AddProduct
