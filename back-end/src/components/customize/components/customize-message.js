import React, { Component } from "react";

class CustomizeMessage extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h5>Flexible Messaging Area</h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-xl-8 col-sm-12 col-md-6 mt-1">
              <input
                className="form-control"
                type="text"
                name="messsing"
                placeholder="Save 25% on all Kwik-Ship order now through May"
                required
              />
            </div>
            <div className="col-xl-4 col-sm-12 col-md-6 mt-1">
              <button className="btn btn-secondary col-sm-12 col-md-4">
                Save
              </button>
              <button
                className="btn btn-light col-sm-12 col-md-4"
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
    );
  }
}

export default CustomizeMessage;
