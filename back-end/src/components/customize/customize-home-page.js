import React, { Component, Fragment } from "react";
import Breadcrumb from '../../components/common/bread-crumb';
import HomePageMessage from "./components/customize-message";
import HomeProductGrid from "./components/customize-product-grid";
import HomePageImageText from "./components/customize-image-text";
import HomeCollectionGrid from "./components/customize-collection-grid";
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
