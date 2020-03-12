import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './index.scss';
import App from './components/app';
import { ScrollContext } from 'react-router-scroll-4';

// Components
import Dashboard from './components/Dashboard';
import AddProduct from './components/products/AddProduct';
import MenuList from './components/navigation/MenuList'

// // Products physical
// import Category from './components/products/physical/category';
// import Sub_category from './components/products/physical/sub-category';
// import Product_list from './components/products/physical/product-list';

// import Product_detail from './components/products/physical/product-detail';

// //Product Digital
// import Digital_category from './components/products/digital/digital-category';
// import Digital_sub_category from './components/products/digital/digital-sub-category';
// import Digital_pro_list from './components/products/digital/digital-pro-list';
// import Digital_add_pro from './components/products/digital/digital-add-pro';

// //Sales
// import Orders from './components/sales/orders';
// import Transactions_sales from './components/sales/transactions-sales';
// //Coupons
// import ListCoupons from './components/coupons/list-coupons';
// import Create_coupons from './components/coupons/create-coupons';

// //Pages
// import ListPages from './components/pages/list-page';
// import Create_page from './components/pages/create-page';
// import Media from './components/media/media';
// import List_menu from './components/menus/list-menu';
// import Create_menu from './components/menus/create-menu';
// import List_user from './components/users/list-user';
// import Create_user from './components/users/create-user';
// import List_vendors from './components/vendors/list-vendors';
// import Create_vendors from './components/vendors/create.vendors';
// import Translations from './components/localization/translations';
// import Rates from './components/localization/rates';
// import Taxes from './components/localization/taxes';
// import Profile from './components/settings/profile';
// import Reports from './components/reports/report';
// import Invoice from './components/invoice';
// import Datatable from './components/common/datatable'
// import Login from './components/auth/login';

class Root extends Component {
    render() {
        return (
            <BrowserRouter basename={'/'}>
                <ScrollContext>
                    <Switch>
                        <Route
                            exact path={`${process.env.PUBLIC_URL}/`}
                            component={() =>
                                <Redirect to="/products/add" />
                            }
                        />
                        <App>
                            <Route path={`${process.env.PUBLIC_URL}/dashboard`} component={Dashboard} />

                            <Route path={`${process.env.PUBLIC_URL}/products/add`} component={AddProduct} />

                            <Route path={`${process.env.PUBLIC_URL}/navigation`} component={MenuList} />

                            <Route path={`${process.env.PUBLIC_URL}/customize/typography`} component={MenuList} />

                        </App>
                    </Switch>
                </ScrollContext>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));


