import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  const mainLinks = [
    { path: "/", label: "home" },
    { path: "/categories", label: "categories" },
    { path: "/shop", label: "shop" },
    { path: "/contact", label: "contact us" },
  ];

  const blogLinks = [
    { path: "", label: "support" },
    { path: "", label: "FAQ" },
    { path: "", label: "policy" },
  ];

  const backTop = () => {
    scroll(0, 0);
  };
  return (
    <>
      <footer>
        <div className="container">
          <div className="top-widgets">
            <div className="site-info">
              <h1>Sliver Shop</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div className="links">
              {blogLinks.map((links, idx) => (
                <Link
                  key={idx}
                  to={links.path}
                  className="link-hover"
                  onClick={backTop}
                >
                  {links.label}
                </Link>
              ))}
            </div>
            <div className="links">
              {mainLinks.map((links, idx) => (
                <Link
                  key={idx}
                  to={links.path}
                  className="link-hover"
                  onClick={backTop}
                >
                  {links.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="bottom-widgets">
            <div className="social-icons">
              <Link to={"https://facebook.com"} target={"_blank"}>
                <FaFacebook />
              </Link>
              <Link to={"https://youtube.com"} target={"_blank"}>
                <FaYoutube />
              </Link>
              <Link to={"https://instagram.com"} target={"_blank"}>
                <FaInstagram />
              </Link>
              <Link to={"https://twitter.com"} target={"_blank"}>
                <FaSquareXTwitter />
              </Link>
            </div>
            <div className="copy-rights">
              <p>
                © <span> Muhammed Adham </span> All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
