import React, { Component, Fragment } from "react";
import Breadcrumb from "../common/Breadcrumb";
import TypographySelect from "./components/TypographySelect";

export class CustomizeTypography extends Component {
  render() {
    return (
      <Fragment>
        <Breadcrumb title="Typography" parent="Customize" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="card" style={{ marginBottom: "0px" }}>
                <div className="card-header">
                  <h5>Typography</h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div
                      className="col-sm-12 col-md-6 card"
                      style={{ marginBottom: "0px" }}
                    >
                      <TypographySelect
                        fontFamily="Character"
                        fontSize={26}
                        fontType="Black"
                        title="Headings and Buttons"
                      />
                    </div>
                    <div
                      className="col-sm-12 col-md-6 card"
                      style={{ marginBottom: "0px" }}
                    >
                      <TypographySelect
                        fontFamily="Roboto"
                        fontSize={14}
                        fontType="Regular"
                        title="Body Text"
                      />
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

export default CustomizeTypography;
