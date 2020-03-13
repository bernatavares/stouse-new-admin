import React, { Component, Fragment } from "react";
import Breadcrumb from "../common/Breadcrumb";
import HomePageMessage from "./components/HomePageMessage";

export class CustomizeHomePage extends Component {
  render() {
    return (
      <Fragment>
        <Breadcrumb mainTitle="Homepage Layout" title="Home Page" parent="Customize" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <HomePageMessage />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CustomizeHomePage;
