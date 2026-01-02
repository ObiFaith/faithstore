import {
  hm,
  nike,
  polo,
  puma,
  user,
  coats,
  heart,
  levis,
  wears,
  gilets,
  github,
  shirts,
  bombers,
  jackets,
  joggers,
  profile,
  puffers,
  twitter,
  facebook,
  rainwear,
  instagram,
  shoppingbag,
  review_img_1,
  review_img_2,
  review_img_3,
  review_img_4,
  review_img_5,
  shoppingcart,
  lightweight_jackets,
} from "../assets";

export const navLinks = [
  { href: "/", label: "Store" },
  { href: "/#Men", label: "Male" },
  { href: "/#Women", label: "Female" },
];

export const navIcons = [
  { alt: "favourite", icon: heart },
  { alt: "user", icon: profile },
  { alt: "shopping-cart", icon: shoppingcart },
];

export const sidebar = [
  { label: "Home", alt: "shopping-bag", icon: shoppingbag },
  { label: "Inbox", alt: "message", icon: user },
  { label: "Cart", alt: "shopping-cart", icon: shoppingcart },
  { label: "Account", alt: "user", icon: user },
  { label: "Saved Items", alt: "favourite", icon: heart },
];

export const hero = [
  { image: wears, text: "Wears", color: "text-[#faa613]" },
  { image: jackets, text: "Jackets", color: "text-[#ef0d04]" },
  { image: joggers, text: "Joggers", color: "text-[#38CB89]" },
  { image: shirts, text: "Shirts", color: "text-[#9747FF]" },
];

export const categoryImg = [
  { img: puffers, alt: "Puffers" },
  { img: bombers, alt: "Bombers" },
  { img: lightweight_jackets, alt: "Lightweight Jackets" },
  { img: gilets, alt: "Gilets" },
  { img: coats, alt: "Coats" },
  { img: rainwear, alt: "Rainwear" },
];

export const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
};

export const reviews = [
  {
    id: 1,
    name: "Blessing",
    img: review_img_1,
    comment:
      "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
    date: 1,
    rating: 4,
  },
  {
    id: 2,
    name: "John",
    img: review_img_2,
    comment:
      "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
    date: 1,
    rating: 4,
  },
  {
    id: 3,
    name: "Michael",
    img: review_img_3,
    comment:
      "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
    date: 1,
    rating: 4,
  },
  {
    id: 4,
    name: "Favour",
    img: review_img_4,
    comment:
      "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
    date: 1,
    rating: 4,
  },
  {
    id: 5,
    name: "Sussan",
    img: review_img_5,
    comment:
      "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
    date: "02/03/2024",
    rating: 4,
  },
];

export const faqs = [
  {
    id: 1,
    question: "How is your return policy like?",
    answer:
      "This text here comes to describe the contents of the accordion title. It can contain any kind of information or details, ranging from info to warning to success messages.",
  },
  {
    id: 2,
    question: "How is your return policy like?",
    answer:
      "This text here comes to describe the contents of the accordion title. It can contain any kind of information or details, ranging from info to warning to success messages.",
  },
  {
    id: 3,
    question: "How is your return policy like?",
    answer:
      "This text here comes to describe the contents of the accordion title. It can contain any kind of information or details, ranging from info to warning to success messages.",
  },
  {
    id: 4,
    question: "How is your return policy like?",
    answer:
      "This text here comes to describe the contents of the accordion title. It can contain any kind of information or details, ranging from info to warning to success messages.",
  },
];

export const brands = [
  { img: nike, alt: "Nike" },
  { img: hm, alt: "HM" },
  { img: levis, alt: "Levis" },
  { img: polo, alt: "US Polo" },
  { img: puma, alt: "Puma" },
];

export const footer = {
  links: [
    {
      heading: "Company",
      links: ["About", "Stores", "Payment", "Career"],
    },
    {
      heading: "Help",
      links: [
        "Customer Support",
        "Delivery Details",
        "Terms & Conditions",
        "Privacy Policy",
      ],
    },
    {
      heading: "Resources",
      links: ["Blog", "Fashion Training", "Quick Connects", "Trendy Groups"],
    },
  ],
  socials: [
    { alt: "twitter-icon", icon: twitter },
    { alt: "facebook-icon", icon: facebook },
    { alt: "instagram-icon", icon: instagram },
    { alt: "github-icon", icon: github },
  ],
};
