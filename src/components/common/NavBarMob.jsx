import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";

const NavBarMob = () => {
  const toggleLinks = [
    { idx: 0, path: "/", label: "home" },
    // {idx:1 , path: "/categories", label: "categories" },
    { idx: 2, path: "/shop", label: "shop" },
    { idx: 3, path: "/contact", label: "contact us" },
  ];

  const [active, setActive] = useState(false);

  return (
    <>
      <div className="fab" onClick={() => setActive((prev) => (prev = true))}>
        <TiThMenu />
      </div>
      <div className={`toggle-menu ${active ? "active" : null}`}>
        {toggleLinks.map((link) => (
          <NavLink
            onClick={() => setActive((prev) => (prev = false))}
            key={link.idx}
            to={link.path}
          >
            {link.label}
          </NavLink>
        ))}
        <span  onClick={() => setActive((prev) => (prev = false))}>close</span>
      </div>
    </>
  );
};

export default NavBarMob;
