import React, { Component, Fragment } from 'react'
import Breadcrumb from '../common/Breadcrumb';

export class CustomizeTypography extends Component {
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
                                        <div className="col-sm-12 col-md-3 ">
                                            <p>Menus, or link lists, help your customers navigate around your online store. </p>
                                            <p>Your store supports 4 menu variations.</p>
                                            <p>You can also create nested menus to display drop-down menus, and group products or pages together.</p>
                                        </div>
                                        <div className="col-sm-12 col-md-9">
                                            <div className="container">
                                                <table className="table table-bordered table-responsive-md">
                                                    <thead className="thead-white">
                                                        <tr>
                                                            <th scope="col">Title</th>
                                                            <th scope="col">Menu Items</th>
                                                        </tr>
                                                    </thead>

                                                </table>
                                            </div>
                                            <div className="col-sm-12 col-md-4" style={{ marginTop: '50px' }}>
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
        )
    }
}

export default CustomizeTypography
