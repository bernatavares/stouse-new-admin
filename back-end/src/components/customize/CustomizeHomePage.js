import React, { Component, Fragment } from "react";
import Breadcrumb from "../common/Breadcrumb";
import HomePageMessage from "./components/HomePageMessage";
import HomeProductGrid from "./components/HomeProductGrid";
import HomePageImageText from "./components/HomePageImageText";
import HomeCollectionGrid from "./components/HomeCollectionGrid";
import { AvField, AvForm } from "availity-reactstrap-validation";


export class CustomizeHomePage extends Component {
  render() {
    return (
      <Fragment>
        <Breadcrumb mainTitle="Homepage Layout" title="Home Page" parent="Customize" />
        <div className="container-fluid">
        <AvForm
          className="needs-validation add-product-form"
          onValidSubmit={this.handleValidSubmit}
          onInvalidSubmit={this.handleInvalidSubmit}
        >
          <HomePageMessage />
          
          <HomePageImageText />
          <HomeProductGrid />
          <HomeCollectionGrid />
        </AvForm>
        </div>  
      </Fragment>
    );
  }
}

export default CustomizeHomePage;
