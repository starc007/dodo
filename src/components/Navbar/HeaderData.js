import React from "react";
import { BiWorld, BiCart } from "react-icons/bi";
export const links = [
  {
    id: 1,
    url: "/",
    text: "overview",
  },
  {
    id: 2,
    url: "/about",
    text: "feature",
  },
  {
    id: 3,
    url: "/projects",
    text: "pricing",
  },
  {
    id: 4,
    url: "/contact",
    text: "documentation",
  },
  {
    id: 5,
    url: "/profile",
    text: "addons",
  },
  {
    id: 5,
    url: "/profile",
    text: "all products",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <BiWorld size={34} className="mr-4" />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <BiCart size={34} />,
  },
];
