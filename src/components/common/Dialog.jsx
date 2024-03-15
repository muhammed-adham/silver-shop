import Cookies from "js-cookie";
import React from "react";
import { useNavigate } from "react-router-dom";

const Dialog = ({onDialog,msgAlert,confirm}) => {

  const navigate=useNavigate()

  return (
    <>
      <div className="dialog-container">
        <div className="msg-container">
          <h4>{msgAlert}</h4>
          <div className="cta-buttons">
            <button
              onClick={() => {
                Cookies.remove("access"),Cookies.remove("user"), navigate("/login"), scroll(0, 0);
                onDialog(false)
              }}
            >
              {confirm}
            </button>
            <button onClick={()=>onDialog(false)}>cancel</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dialog;
