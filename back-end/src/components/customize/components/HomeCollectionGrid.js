import React, { Component } from "react";
import GeneralInput from 'components/common/GeneralInput'
import { AvField, AvForm } from "availity-reactstrap-validation";

class HomeCollectionGrid extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h5>Collection Grid</h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-sm-12 col-md-3 col-xl-2">
              <p>
                The Collection Grid displays up to 6 collections for easy navigation on the home page. You can set these collections here. If no collections are selected, then this component will not display on the homepage. 
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-xl-5 offset-xl-1">
              <div className="row">
                <div className="col-md-12">
                  <GeneralInput
                    name="collectionGridLine"
                    placeholder="Popular Categories"
                    label="Collection Grid Headline" />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-12">
                <AvField type="select" name="select"  >
                  <option> Select a collection </option>
                </AvField>
                <AvField type="select" name="select"  >
                  <option> Select a collection </option>
                </AvField>
                <AvField type="select" name="select"  >
                  <option> Select a collection </option>
                </AvField>
                <AvField type="select" name="select"  >
                  <option> Select a collection </option>
                </AvField>
                <AvField type="select" name="select"  >
                  <option> Select a collection </option>
                </AvField>
                <AvField type="select" name="select"  >
                  <option> Select a collection </option>
                </AvField>
                <AvField type="select" name="select"  >
                  <option> Select a collection </option>
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

export default HomeCollectionGrid;
