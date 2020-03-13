import {
    Home,
    Box,
    DollarSign,
    Settings,
    Edit2,
    Users,
    AlignLeft,
    UserPlus,
    Folder,
    BarChart, Archive, LogIn
} from 'react-feather';


export const MENUITEMS = [
    {
        title: 'Customize', icon: Edit2, type: 'sub', active: false, children: [
            { path: '/customize/homepage', title: 'Homepage Layout', type: 'link' },
            { path: '/customize/typography', title: 'Color & Typography', type: 'link' },
            { path: '/', title: 'Google Analytics', type: 'link' }
        ]
    },
    {
        title: 'Pages', icon: Box, type: 'sub', active: false, children: [
            { path: '/', title: 'Children', type: 'link' },
        ]
    },
    {
        title: 'Navigation', icon: AlignLeft, type: 'sub', active: false, children: [
            { path: '/navigation/', title: 'Menus', type: 'link' },
            { path: '/navigation/add', title: 'AddMenu', type: 'link' }
        ]
    },
    {
        title: 'Products', icon: Folder, type: 'sub', active: false, children: [
            { path: '/', title: 'All products', type: 'link' },
            { path: '/products/add', title: 'Add product', type: 'link' }
        ]
    },
    {
        title: 'Sales', icon: DollarSign, type: 'sub', active: false, children: [
            { path: '/', title: 'Children', type: 'link' },
        ]
    },
    {
        title: 'Users', icon: Users, type: 'sub', active: false, children: [
            { path: '/', title: 'Children', type: 'link' },
        ]
    },
    {
        title: 'Settings', icon: Settings, type: 'sub', active: false, children: [
            { path: '/', title: 'Children', type: 'link' },
        ]
    },
    {
        title: 'Logout', icon: Settings, type: 'link', active: false
    }
]
