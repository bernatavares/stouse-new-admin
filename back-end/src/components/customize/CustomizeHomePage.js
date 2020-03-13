import React, { Component, Fragment } from "react";
import Breadcrumb from "../common/Breadcrumb";
import HomePageMessage from "./components/HomePageMessage";
import HomeProductGrid from "./components/HomeProductGrid";

export class CustomizeHomePage extends Component {
  render() {
    return (
      <Fragment>
        <Breadcrumb mainTitle="Homepage Layout" title="Home Page" parent="Customize" />
        <div className="container-fluid">
          <HomePageMessage />
          <HomeProductGrid />
        </div>  
      </Fragment>
    );
  }
}

export default CustomizeHomePage;
