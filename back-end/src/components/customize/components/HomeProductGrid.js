import React, { Component } from "react";

class HomeProductGrid extends Component {
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
            <div className="sm-12 md-3 lg-3 mt-1">
              <p>The Product Grid displays products in increments of 4 You can choose which products to display here</p>
            </div>
            <div className="sm-12 md-8 md-offset-1 lg-offset-1 lg-8 mt-1">
                <div className="row">
                  <div className="sm-3">
                    <input tyep="checkbox"/> 4
                  </div>
                  <div className="sm-3">
                    <input tyep="checkbox"/> 8
                  </div>
                  <div className="sm-3">
                    <input tyep="checkbox"/> 12
                  </div>
                  <div className="sm-3">
                    <input tyep="checkbox"/> 16
                  </div>
                </div>
            </div>
            <div className="col-xl-8 col-sm-12 col-md-6 mt-1">
              <input
                className="form-control"
                type="text"
                name="messsing"
                placeholder="Save 25% on all Kwik-Ship order now through May"
                required
              />
            </div>
            
          </div>
          <div className="row">
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
    );
  }
}

export default HomeProductGrid;
