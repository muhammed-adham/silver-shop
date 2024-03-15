import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  const navLinks = [
    {idx:0 , path: "/", label: "home" },
    // {idx:1 , path: "/categories", label: "categories" },
    {idx:2 , path: "/shop", label: "shop" },
    {idx:3 , path: "/contact", label: "contact us" },
  ];
  return (
    <nav>
      {navLinks.map((links) => (
        <NavLink key={links.idx} to={links.path}>{links.label}</NavLink>
      ))}
      {/* <div className="search">
      <IoIosSearch />
      </div> */}
    </nav>
  );
};

export default Navbar;
