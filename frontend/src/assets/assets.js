import basket_icon from "./basket_icon.png";
import umclogo from "./umc_favicon.png";
import umc from "./umc.jpg";
import umcwithoutname from "./umc-withoutname.png";
import header_img from "./header_img.png";
import search_icon from "./search_icon.png";
import menu_1 from "./menu_1.jpg";
import menu_2 from "./menu_2.jpg";
import menu_3 from "./menu_3.jpg";

import about2 from "./about2.jpg";

import food_1 from "./food_1.jpg";
import food_2 from "./food_2.jpg";
import food_3 from "./food_3.jpg";
import food_4 from "./food_4.jpg";
import food_5 from "./food_5.jpg";
import food_6 from "./food_6.jpeg";
import food_7 from "./food_7.jpg";
import food_8 from "./food_8.jpeg";
import food_9 from "./food_9.jpg";

import add_icon_white from "./add_icon_white.png";
import add_icon_green from "./add_icon_green.png";
import remove_icon_red from "./remove_icon_red.png";
import linkedin_icon from "./linkedin_icon.png";
import facebook_icon from "./facebook_icon.png";
import twitter_icon from "./twitter_icon.png";
import cross_icon from "./cross_icon.png";
import selector_icon from "./selector_icon.png";
import profile_icon from "./profile_icon.png";
import bag_icon from "./bag_icon.png";
import logout_icon from "./logout_icon.png";
import parcel_icon from "./parcel_icon.png";
import loader from "./loader.webp";

export const assets = {
  about2,
  umclogo,
  umc,
  umcwithoutname,
  basket_icon,
  header_img,
  search_icon,
  add_icon_green,
  add_icon_white,
  remove_icon_red,
  linkedin_icon,
  facebook_icon,
  twitter_icon,
  cross_icon,
  selector_icon,
  profile_icon,
  logout_icon,
  bag_icon,
  parcel_icon,
  loader,
};

export const menu_list = [
  {
    menu_name: "Tea Leaves",
    menu_image: menu_1,
    menu_description: "Premium quality leaves for a refreshing tea experience.",
    hoverImage: "https://media3.giphy.com/media/3jVT4U5bilspG/giphy.webp?cid=790b7611u9jee84bfq3axt8f6dds892ghaudak1dwetntaba&ep=v1_gifs_search&rid=giphy.webp&ct=g",


  },
  {
    menu_name: "Coffee Blends",
    menu_image: menu_2,
    menu_description:"Expertly crafted blends for rich and bold coffee flavors.",
    hoverImage: "https://i.pinimg.com/originals/cc/e6/26/cce626ba796f68a8b33e85d419660aec.gif",
 

  },
  {
    menu_name: "Other Beverage Blends",
    menu_image: menu_3,
    menu_description:"Diverse blends for unique and flavorful beverage options.",
    hoverImage: "https://i.pinimg.com/564x/3b/62/f8/3b62f8260b61a2d56ac30c9e77869ccf.jpg",

  },
];

export const food_list = [
  {
    _id: "1",
    name: "Masala Tea",
    image: food_1,
    price: 100,
    weight: "250g",
    description:
      "A fragrant blend of spices and tea for a warming, bold flavor",
    category: "Tea Leaves",
  },
  {
    _id: "2",
    name: "Chocolate Tea",
    image: food_2,
    price: 150,
    weight: "250g",
    description:
      "A rich, indulgent blend of chocolate and tea for a sweet, comforting flavor",
    category: "Tea Leaves",
  },
  {
    _id: "3",
    name: "Rose Tea",
    image: food_3,
    price: 150,
    weight: "250g",
    description:
      "A delicate blend of rose petals and tea for a floral, aromatic flavor",
    category: "Tea Leaves",
  },
  {
    _id: "4",
    name: "Green Tea",
    image: food_4,
    price: 120,
    weight: "250g",
    description:
      "A light, refreshing blend of green tea leaves for a clean, invigorating flavor",
    category: "Tea Leaves",
  },
  {
    _id: "5",
    name: "Black Tea",
    image: food_5,
    price: 140,
    weight: "250g",
    description:
      "A bold, robust blend of black tea leaves for a rich, full-bodied flavor",
    category: "Tea Leaves",
  },
  {
    _id: "6",
    name: "Filter Coffee",
    image: food_6,
    price: 170,
    weight: "250g",
    description:
      "A rich, aromatic blend of coffee beans for a smooth, satisfying flavor",
    category: "Coffee Blends",
  },
  {
    _id: "7",
    name: "Instant Coffee",
    image: food_7,
    price: 200,
    weight: "250g",
    description:
      "A convenient, quick blend of coffee granules for a rich, bold flavor",
    category: "Coffee Blends",
  },
  {
    _id: "8",
    name: "Badam Powder",
    image: food_8,
    price: 250,
    weight: "250g",
    description:
      "A nutritious blend of almonds and spices for a creamy, nutty flavor",
    category: "Other Beverage Blends",
  },
  {
    _id: "9",
    name: "Chocolate Powder",
    image: food_9,
    price: 250,
    weight: "250g",
    description:
      "A sweet, indulgent blend of cocoa and sugar for a rich, creamy flavor",
    category: "Other Beverage Blends",
  },
];
