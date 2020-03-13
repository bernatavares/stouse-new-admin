import React, { Component, Fragment } from "react";
import Breadcrumb from "../common/Breadcrumb";
import data from "../../assets/data/listMenu";
import Datatable from "../common/Datatable";
import ReactTable from "react-table";
import { ShoppingBag } from "react-feather";

const menus = [
  {
    title: "Primary Menu",
    items: [
      "Kwik - ShoppingBag",
      "Recorder",
      "Stickers",
      "Decals",
      "Paper",
      "Products"
    ]
  },
  {
    title: "Seconardy Menu",
    items: ["Item1", "Recorder", "Stickers", "Decals", "Paper", "Products"]
  },
  {
    title: "Third Menu",
    items: [
      "Kwik - ShoppingBag",
      "Recorder",
      "Stickers",
      "Decals",
      "Paper",
      "Products"
    ]
  },
  {
    title: "Footer1",
    items: [
      "Kwik - ShoppingBag",
      "Recorder",
      "Stickers",
      "Decals",
      "Paper",
      "Products"
    ]
  },
  {
    title: "Footer2",
    items: [
      "Kwik - ShoppingBag",
      "Recorder",
      "Stickers",
      "Decals",
      "Paper",
      "Products"
    ]
  }
];

export class MenuList extends Component {
  render() {
    return (
      <Fragment>
        <Breadcrumb title="Menu list" parent="Navigation" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h5>Menus</h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-12 col-md-3 mt-1 container p-2">
                      <p>
                        Menus, or link lists, help your customers navigate
                        around your online store.
                      </p>
                      <p>Your store supports 4 menu variations.</p>
                      <p>
                        You can also create nested menus to display drop-down
                        menus, and group products or pages together.
                      </p>
                    </div>
                    <div className="col-sm-12 col-md-9 mt-1">
                      <div className="container">
                        <table className="table table-bordered table-responsive-md">
                          <thead className="thead-white">
                            <tr>
                              <th scope="col">Title</th>
                              <th scope="col">Menu Items</th>
                            </tr>
                          </thead>
                          <tbody style={{ backgroundColor: "#F7F7F9" }}>
                            {menus.map((menu, index) => (
                              <tr key={index}>
                                <td scope="col">
                                  <b>{menu.title}</b>
                                </td>
                                <td scope="col">{menu.items.join(", ")}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div
                        className="col-sm-12 col-md-4"
                        style={{ marginTop: "50px" }}
                      >
                        <button className="btn btn-secondary">ADD Menu</button>
                      </div>
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

export default MenuList;
