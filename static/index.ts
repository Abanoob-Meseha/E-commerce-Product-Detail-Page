import { tBarRating, tCollectProduct, tCustomerReview } from "@/types";

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
    id: 1,
    name: "USD",
    link: "/",
  },
  {
    id: 2,
    name: "EGP",
    link: "/",
  },
  {
    id: 3,
    name: "EUR",
    link: "/",
  },
];

export const languages = [
  {
    id: 1,
    name: "English",
    link: "/",
  },
  {
    id: 2,
    name: "French",
    link: "/",
  },
  {
    id: 3,
    name: "Arabic",
    link: "/",
  },
];
// collection Products
export const collectionProducts: tCollectProduct[] = [
  {
    id: 1,
    name: "Whistle",
    category: "Wide Leg Cropped Jeans, Denim",
    price: 26,
    rating: 4.5,
    sold_count: 1450,
    img: "/assets/images/demo-product-img.png",
  },
  {
    id: 2,
    name: "Whistle",
    category: "Wide Leg Cropped Jeans, Denim",
    price: 26,
    rating: 4.5,
    sold_count: 1450,
    img: "/assets/images/demo-product-img.png",
  },
  {
    id: 3,
    name: "Whistle",
    category: "Wide Leg Cropped Jeans, Denim",
    price: 26,
    rating: 4.5,
    sold_count: 1450,
    img: "/assets/images/demo-product-img.png",
  },
  {
    id: 4,
    name: "Whistle",
    category: "Wide Leg Cropped Jeans, Denim",
    price: 26,
    rating: 4.5,
    sold_count: 1450,
    img: "/assets/images/demo-product-img.png",
  },
  {
    id: 5,
    name: "Whistle",
    category: "Wide Leg Cropped Jeans, Denim",
    price: 26,
    rating: 4.5,
    sold_count: 1450,
    img: "/assets/images/demo-product-img.png",
  },
];

export const barRatings: tBarRating[] = [
  {
    id: 1,
    rating: 5,
    percentage: 80,
    ratingsCount: 2823,
  },
  {
    id: 2,
    rating: 4,
    percentage: 50,
    ratingsCount: 84,
  },
  {
    id: 3,
    rating: 3,
    percentage: 10,
    ratingsCount: 4,
  },
  {
    id: 4,
    rating: 2,
    percentage: 0,
    ratingsCount: 0,
  },
  {
    id: 5,
    rating: 1,
    percentage: 0,
    ratingsCount: 0,
  },
];

export const customerReviews: tCustomerReview[] = [
  {
    id: "1",
    date: "July 2, 2020 03:29 PM",
    disLikesCount: 4,
    img: "/assets/images/customer.png",
    likesCount: 240,
    name: "Darrell Steward",
    rating: 5,
    review: "This is an amazing product I have.",
  },
  {
    id: "2",
    date: "July 3, 2020 10:12 AM",
    disLikesCount: 2,
    img: "/assets/images/customer.png",
    likesCount: 180,
    name: "Courtney Henry",
    rating: 4.5,
    review: "I love how easy it is to use!",
  },
  {
    id: "3",
    date: "July 4, 2020 01:55 PM",
    disLikesCount: 3,
    img: "/assets/images/customer.png",
    likesCount: 200,
    name: "Cody Fisher",
    rating: 4,
    review: "Good value for the price.",
  },
  {
    id: "4",
    date: "July 5, 2020 06:23 PM",
    disLikesCount: 1,
    img: "/assets/images/customer.png",
    likesCount: 150,
    name: "Jenny Wilson",
    rating: 5,
    review: "Exceeded my expectations.",
  },
  {
    id: "5",
    date: "July 6, 2020 08:45 AM",
    disLikesCount: 5,
    img: "/assets/images/customer.png",
    likesCount: 95,
    name: "Robert Fox",
    rating: 3.5,
    review: "It’s okay, could be better.",
  },
  {
    id: "6",
    date: "July 7, 2020 11:10 AM",
    disLikesCount: 0,
    img: "/assets/images/customer.png",
    likesCount: 300,
    name: "Jane Cooper",
    rating: 5,
    review: "Highly recommend it to everyone!",
  },
  {
    id: "7",
    date: "July 8, 2020 09:30 PM",
    disLikesCount: 6,
    img: "/assets/images/customer.png",
    likesCount: 120,
    name: "Esther Howard",
    rating: 2.5,
    review: "Not really satisfied.",
  },
  {
    id: "8",
    date: "July 9, 2020 07:15 PM",
    disLikesCount: 2,
    img: "/assets/images/customer.png",
    likesCount: 210,
    name: "Kristin Watson",
    rating: 4.2,
    review: "Very useful product.",
  },
  {
    id: "9",
    date: "July 10, 2020 04:00 PM",
    disLikesCount: 1,
    img: "/assets/images/customer.png",
    likesCount: 130,
    name: "Ralph Edwards",
    rating: 4.8,
    review: "Great design and functionality.",
  },
  {
    id: "10",
    date: "July 11, 2020 02:17 PM",
    disLikesCount: 3,
    img: "/assets/images/customer.png",
    likesCount: 170,
    name: "Savannah Nguyen",
    rating: 3.8,
    review: "Satisfactory overall.",
  },
];
