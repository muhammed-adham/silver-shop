import React from "react";
import { Link } from "react-router-dom";

const PNF = () => {
  return (
    <>
      <div className="container pnf-404">
        <div className="vector-image">
          {/* <img src="/images/png/Future City Illustration.svg" alt="" /> */}
        </div>
        <div className="content">
        <h6>page not found</h6>
        <Link>home page</Link>
        </div>
      </div>
    </>
  );
};

export default PNF;
