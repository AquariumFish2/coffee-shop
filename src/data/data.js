import { GiCoffeeCup, GiBread } from "react-icons/gi";
import { SiBuymeacoffee } from "react-icons/si";
import { TbMilkshake } from "react-icons/tb";

export const colors = {
  lightCoffee: "#ece0d1",
  mediumLight: "#dbc1ac",
  medium: "#967259",
  mediumDark: "#634832",
  DarkCoffee: "#38220f",
};

export const fonts = {
  bodyFont: "cursive",
  decoratedFont: "Dancing Script, cursive",
};

export const offerImages = [
  {
    img: require("../assets/offers/1.png"),
    description: "All Lattes have limted 50% discount offer",
    sale: 50,
  },
  {
    img: require("../assets/offers/2.png"),
    sale: 10,
    description: "Eat Indoors to get the 10% discount",
  },
];

export const cats = [
  {
    icon: <GiCoffeeCup style={{ height: "50px", width: "50px" }}></GiCoffeeCup>,
    value: "Coffee",
    selected: true,
  },
  {
    icon: <GiBread style={{ height: "50px", width: "50px" }}></GiBread>,
    value: "Bread",
    selected: true,
  },
  {
    icon: (
      <SiBuymeacoffee
        style={{ height: "50px", width: "50px" }}
      ></SiBuymeacoffee>
    ),
    value: "cold",
    selected: true,
  },
  {
    icon: <TbMilkshake style={{ height: "50px", width: "50px" }}></TbMilkshake>,
    value: "milk shake",
    selected: true,
  },
];

export const products = [
  {
    name: "latte",
    price: 5.99,
    darkness: 50,
    image: require("../assets/logo.png"),
    category: "Coffee",
    sugar: 1,
    milk: true,
  },
  {
    name: "turkish",
    price: 3.99,
    darkness: 50,
    image: require("../assets/logo.png"),
    category: "Coffee",
    sugar: 1,
    milk: false,
  },
  {
    name: "Muffin",
    price: 8.99,
    darkness: false,
    image: require("../assets/logo.png"),
    category: "Bread",
  },
  {
    name: "bread",
    price: 5.99,
    darkness: false,
    image: require("../assets/logo.png"),
    category: "Bread",
  },
  {
    name: "milkshake vanilla",
    price: 6.99,
    darkness: false,
    image: require("../assets/logo.png"),
    category: "milk shake",
  },
  {
    name: "milkshake coffee",
    price: 5.99,
    darkness: 50,
    image: require("../assets/logo.png"),
    category: "milk shake Coffee",
    sugar: 1,
    milk: false,
  },
  {
    name: "Ice Coffee",
    price: 5.99,
    darkness: 50,
    image: require("../assets/logo.png"),
    category: "cold Coffee",
    sugar: 1,
    milk: false,
  },
];
