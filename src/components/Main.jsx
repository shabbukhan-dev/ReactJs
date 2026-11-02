
import { useState, useEffect } from "react";

import UserProfile from "./user/UserProfile";
import { UserCard } from "./user/UserCard";
import { Card } from "./card/Card";
import ProductCard from "./product/ProductCard";

const user = {
  id: 1,
  name: "John",
  age: 30,
  role: "Frontend Developer",
  skills: ["JavaScript", "React", "HTML", "CSS"],
};

const users = [
  {
    id: 1,
    name: "John",
    role: "Frontend Developer",
  },
  {
    id: 2,
    name: "Sarah",
    role: "UI/UX Designer",
  },
  {
    id: 3,
    name: "David",
    role: "Backend Developer",
  },
];

function handleUserClick(name) {
  console.log(`User clicked: ${name}`);
}

const products = [
  {
    id: 1,
    name: "MacBook Pro",
    price: 150000,
    category: "Laptop",
  },
  {
    id: 2,
    name: "iPhone",
    price: 80000,
    category: "Mobile",
  },
  {
    id: 3,
    name: "AirPods",
    price: 20000,
    category: "Audio",
  },
];

function handleProductClick(name) {
  console.log(`Added to cart: ${name}`);
}

function Main() {

  return (
    <>
      <UserProfile user={user} />
      <UserCard users={users} handleUserClick={handleUserClick} />
      <ProductCard
        products={products}
        handleProductClick={handleProductClick}
      />
    </>
  );
}

export default Main;
