import bcrypt from "bcryptjs";
import { User } from "./models/userModel";
import { Product } from "./models/productModel";

export const sampleProducts: Product[] = [
  {
    name: "Slim shirt",
    slug: "slimshirt",
    image: "../images/p1.jpg",
    category: "Shirt",
    brand: "Nike",
    price: 120,
    countInStock: 10,
    description: "High Quality Shirt",
    rating: 4.5,
    numReviews: 10,
  },
  {
    name: "Denim shirt",
    slug: "fullshirt",
    image: "../images/p2.jpg",
    category: "Shirt",
    brand: "Nike",
    price: 150,
    countInStock: 5,
    description: "High Quality Shirt",
    rating: 4.8,
    numReviews: 15,
  },
  {
    name: "Formal Pant",
    slug: "fullPant",
    image: "../images/p7.jpg",
    category: "Pant",
    brand: "Adidas",
    price: 300,
    countInStock: 20,
    description: "High Quality Pant",
    rating: 4.3,
    numReviews: 13,
  },
  {
    name: "Full Jeans",
    slug: "fulljeans",
    image: "../images/p6.jpg",
    category: "Pant",
    brand: "Killer",
    price: 220,
    countInStock: 0,
    description: "High Quality Jeans",
    rating: 4.9,
    numReviews: 22,
  },
];

export const sampleUsers: User[] = [
  {
    name: "Joe",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456"),
    isAdmin: true,
  },
  {
    name: "John",
    email: "user@example.com",
    password: bcrypt.hashSync("123456"),
    isAdmin: false,
  },
];
