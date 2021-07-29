import {
    FaAddressBook,
    FaBlog,
    FaEdit,
    FaImages,
    FaShoppingCart,
    FaUser,
    FaUserEdit
} from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
const list = [
    {
        title: 'Profile',
        link: '/profile/',
        icon: FaUser
    },
    {
        title: 'Blogs',
        link: '/blogs/create',
        icon: FaBlog
    },
    {
        title: 'Posts',
        link: '/explore/create',
        icon: FaImages
    },
    {
        title: 'Edit Profile',
        link: '/profile/testimonials',
        icon: FaUserEdit
    },
    {
        title: 'Orders',
        link: '/shop/index',
        icon: FaShoppingCart
    },
    {
        title: 'Settings',
        link: '/profile/testimonials',
        icon: FiSettings
    }
];

export default list;
