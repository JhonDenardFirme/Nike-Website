import shoe4 from "../assets/images/shoe4.svg";
import shoe5 from "../assets/images/shoe5.svg";
import shoe6 from "../assets/images/shoe6.svg";
import shoe7 from "../assets/images/shoe7.svg";

import {shieldTick} from "../assets/icons/index";
import {support} from "../assets/icons/index";
import {truckFast} from "../assets/icons/index";

import { customer1 } from "../assets/images";
import { customer2 } from "../assets/images";



export const navLinks = [
    {href: "#home", label: "Home"},
    {href: "#about-us", label: "About Us"},
    {href: "#proucts", label: "Products"},
    {href: "#contact-us", label: "Contact Us"},
];

export const stats = [
    {label: "Products", value:"1k+"},
    {label: "Shops", value:"500+"},
    {label: "Customers", value:"250k+"}
]


export const products = [
    { id: "shoe4", title: "Nike Air Jordan-01", rating: "4.5", price: "200.20", image: shoe4 },
    { id: "shoe5", title: "Nike Air Jordan-01", rating: "4.5", price: "210.20", image: shoe5 },
    { id: "shoe6", title: "Nike Air Jordan-01", rating: "4.5", price: "220.20", image: shoe6 },
    { id: "shoe7", title: "Nike Air Jordan-01", rating: "4.5", price: "230.20", image: shoe7 }
];

export const services = [
    {label:"Free Shipping", text:"Enjoy seamless shopping with our complimentary shipping service.", image: truckFast},
    {label:"Secure Payment", text:"Experience worry-free transactions with our secure payment options.", image: shieldTick},
    {label:"Love to help you", text:"Our dedicated team is here to assist you every step of the way.", image: support}
]


export const customers = [
    {id: 1, name:"Jane Doe Surname", profile: customer2, comment:"The product not only met but exceeded my expectations. I'll definitely be a returning customer!", rating: 4.9},
    {id: 2, name:"John Doe Surname", profile: customer1, comment:"The attention to detail and the quality of the product exceeded my expectations. Highly recommended!", rating: 4.5},
    {id: 3, name:"Jane Doe Surname", profile: customer2, comment:"The product not only met but exceeded my expectations. I'll definitely be a returning customer!", rating: 4.9}
]



export const productList = [
    {list: "Air Force 1"},
    {list: "Air Max 1"},
    {list: "Air Jordan 1"},
    {list: "Air Force 2"},
    {list: "Nike Waffle Racer"},
    {list: "Nike Cortez"},
]

export const helpList = [
    {list: "About Us"},
    {list: "FAQs"},
    {list: "How it Works"},
    {list: "Privacy Policy"},
    {list: "Payment Policy"}

]