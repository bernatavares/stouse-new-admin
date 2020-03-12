import React, { Component, Fragment } from 'react'
import Breadcrumb from '../common/Breadcrumb';
import data from '../../assets/data/listMenu';
import Datatable from '../common/Datatable'

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
                                        <div className="col-md-6 col-lg-3">
                                            <p>Menus, or link lists, help your customers navigate around your online store. </p>
                                            <p>Your store supports 4 menu variations.</p>
                                            <p>You can also create nested menus to display drop-down menus, and group products or pages together.</p>
                                        </div>
                                        <div className="col-md-6 col-log-9">
                                            <Datatable
                                                multiSelectOption={true}
                                                myData={data}
                                                pageSize={6}
                                                pagination={false}
                                                class="-striped -highlight"
                                            />
                                        </div>
                                    </div>
                                    <div id="batchDelete" className="category-table order-table coupon-list-delete">

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

export default MenuList
