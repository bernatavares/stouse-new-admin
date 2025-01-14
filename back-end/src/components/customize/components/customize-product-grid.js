import React, { Component } from "react";
import GeneralInput from '../../../components/common/general-input'
import { AvField, AvForm } from "availity-reactstrap-validation";

class CustomizeProductGrid extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h5>Product Grid</h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-sm-12 col-md-3 col-xl-2">
              <p>
                The product grid displasy products in increments of 4. You can choose which products to display here.
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-xl-5 offset-xl-1">
              <div >
              <input
                    className="checkbox_animated"
                    id="chk-ani-1"
                    type="checkbox"
                  />
                  4
                  <input
                    className="checkbox_animated ml-4"
                    id="chk-ani-2"
                    type="checkbox"
                  />
                  8
                  <input
                    className="checkbox_animated ml-4"
                    id="chk-ani-1"
                    type="checkbox"
                  />
                  12
                  <input
                    className="checkbox_animated ml-4"
                    id="chk-ani-2"
                    type="checkbox"
                    checked
                  />
                  16
              </div>
              

              <div className="row mt-4">
                <div className="col-md-12">
                  <GeneralInput
                    name="productGridLine"
                    placeholder="Popular Products"
                    label="Product Grid Line" />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                <AvField type="select" name="select">
                  <option>Bestsellers</option>
                  <option>2</option>
                </AvField>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
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
    );
  }
}

export default CustomizeProductGrid;
