import { tBarRating, tCollectProduct } from "@/types";

// footer Links
export const shopLinks = {
  title: "Shop",
  links: [
    {
      id: 1,
      name: "My Account",
      href: "/My Account",
    },
    {
      id: 2,
      name: "Login",
      href: "/Login",
    },
    {
      id: 3,
      name: "Whishlist",
      href: "/Whishlist",
    },
    {
      id: 4,
      name: "Cart",
      href: "/Cart",
    },
  ],
};

export const informationLinks = {
  title: "Information",
  links: [
    { id: 1, name: "Shipping Policy", href: "/shipping-policy" },
    { id: 2, name: "Returns & Refunds", href: "/returns-refunds" },
    { id: 3, name: "Cookies Policy", href: "/cookies-policy" },
    { id: 4, name: "Frequently asked", href: "/faq" },
  ],
};

export const companyLinks = {
  title: "Company",
  links: [
    { id: 1, name: "About us", href: "/about" },
    { id: 2, name: "Privacy Policy", href: "/privacy-policy" },
    { id: 3, name: "Terms & Conditions", href: "/terms-and-conditions" },
    { id: 4, name: "Contact Us", href: "/contact" },
  ],
};

// navbar categories Items
export const categories = [
  {
    id: 1,
    name: "Wears",
    link: "/",
  },
  {
    id: 2,
    name: "Shoes",
    link: "/",
  },
  {
    id: 3,
    name: "Sports",
    link: "/",
  },
  {
    id: 4,
    name: "Electronics",
    link: "/",
  },
];

export const currencies = [
  {
    id:1 ,
    name: "USD",
    link:"/"
  },
  {
    id:2 ,
    name: "EGP",
    link:"/"
  },
  {
    id:3 ,
    name: "EUR",
    link:"/"
  },
]

export const languages = [
  {
    id:1 ,
    name: "English",
    link:"/"
  },
  {
    id:2 ,
    name: "French",
    link:"/"
  },
  {
    id:3 ,
    name: "Arabic",
    link:"/"
  },
]
// collection Products
export const collectionProducts: tCollectProduct[] = [
  {
    id: 1 ,
    name: "Whistle",
    category: "Wide Leg Cropped Jeans, Denim",
    price: 26,
    rating :4.5 ,
    sold_count: 1450,
    img:"/assets/images/demo-product-img.png"
  },
  {
    id: 2 ,
    name: "Whistle",
    category: "Wide Leg Cropped Jeans, Denim",
    price: 26,
    rating :4.5 ,
    sold_count: 1450,
    img:"/assets/images/demo-product-img.png"
  },
  {
    id: 3 ,
    name: "Whistle",
    category: "Wide Leg Cropped Jeans, Denim",
    price: 26,
    rating :4.5 ,
    sold_count: 1450,
    img:"/assets/images/demo-product-img.png"
  },
  {
    id: 4 ,
    name: "Whistle",
    category: "Wide Leg Cropped Jeans, Denim",
    price: 26,
    rating :4.5 ,
    sold_count: 1450,
    img:"/assets/images/demo-product-img.png"
  },
  {
    id: 5 ,
    name: "Whistle",
    category: "Wide Leg Cropped Jeans, Denim",
    price: 26,
    rating :4.5 ,
    sold_count: 1450,
    img:"/assets/images/demo-product-img.png"
  },
  
]

export const barRatings : tBarRating[]= [
  {
    id: 1 ,
    rating: 5 ,
    percentage: 80 ,
    ratingsCount: 2823
  },
  {
    id: 2 ,
    rating: 4 ,
    percentage: 50 ,
    ratingsCount: 84
  },
  {
    id: 3 ,
    rating: 3 ,
    percentage: 10 ,
    ratingsCount: 4
  },
  {
    id: 4 ,
    rating: 2 ,
    percentage: 0 ,
    ratingsCount: 0
  },
  {
    id: 5 ,
    rating: 1 ,
    percentage: 0 ,
    ratingsCount: 0
  },
]