import React, { useEffect, useState } from "react";
import BannerPage from "../common/BannerPage";
import { Link, NavLink, Outlet } from "react-router-dom";
import Dialog from "../common/Dialog";
import { useQuery } from "react-query";
import { getCurrentUser } from "../../utils/axiosConfig";

const Account = () => {
 
  const [dialog, setDialog] = useState(false);

  const hh=(e)=>{
    setDialog(prev=> prev=e)
  }

  const{data}=useQuery('currentUser', getCurrentUser)

  return (
    <>
      <BannerPage
        currentPage={"profile"}
        primaryPage={"home"}
        img={"/images/banners/banner-profile.jpg"}
      />
      <div className="container">
        <section className="account-container">
          <div className="side-profile-nav">
            <div className="user-info">
              <div className="user-picture">
                <img src="/images/pp/pp-1.jpg" alt="" />
              </div>
              <div className="user-name">
                <h4>{data?.data.name}</h4>
              </div>
            </div>
            <div className="account-nav">
              <NavLink to={"/account/activity"}>activity</NavLink>
              <NavLink to={"/account/settings"}>settings</NavLink>
              <Link to={"/account/activity"}
                onClick={() => {
                  setDialog(prev=> prev=true);
                }}
              >
                logout
              </Link>
            </div>
          </div>
          <div className="account-content">
            <Outlet />
          </div>
        </section>
      </div>
      {dialog ? <Dialog msgAlert={"Are you sure you want to log out !"} confirm={'logout'} onDialog={hh}/> : null}
    </>
  );
};

export default Account;
