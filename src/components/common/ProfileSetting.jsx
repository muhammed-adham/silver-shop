import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getCurrentUser, updateCurrentUser } from "../../utils/axiosConfig";

const ProfileSetting = () => {
  
  const { data, isSuccess } = useQuery("currentUser", getCurrentUser);

  useEffect(()=>{
    if(isSuccess){
      setData()
    }
  },[data])

  const setData=()=>{
    setCurrent(data?.data)
  }

  const [current,setCurrent]=useState()

  const [userData, setUserData] = useState(current);

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  // const{handleSubmite}=useFormAction()

  const handleSubmite = (e) => {
    // e.preventDefault();
    // console.log(userData);
    // console.log(e.target.value)
    updateCurrentUser(userData)
  };

  return (
    <>
      <div className="form-container">
        <form action="" onSubmit={(e) => handleSubmite(e)}>
          <div className="form-header">
            <h4>profile information</h4>
          </div>
          <div className="form-main">
            <div className="form-group">
              <label htmlFor="">first name</label>
              <input
                onChange={(e) => handleChange(e)}
                name="name"
                id="name"
                type="text"
                defaultValue={current?.name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">last name</label>
              <input
                onChange={(e) => handleChange(e)}
                name="lname"
                id="lname"
                type="text"
                defaultValue={current?.lname}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">birthday</label>
              <input
                defaultValue={current?.bday}
                onChange={(e) => handleChange(e)}
                name="bday"
                id="bday"
                type="date"
                style={{ fontSize: "1rem", height: "100%" }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">gender</label>
              <select
                name="gender"
                id="gender"
                style={{ fontSize: "1rem", height: "100%" }}
                onChange={(e) => handleChange(e)}
                // defaultValue={current?.gender}
                // defaultChecked={current?.gender}
                
              >
                <option value="male" style={{ fontSize: "1rem" }} >
                  Male
                </option>
                <option value="female" style={{ fontSize: "1rem" }} selected={current?.gender=='female'?true:false} >
                  Female
                </option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="">email</label>
              <input
                onChange={(e) => handleChange(e)}
                name="email"
                id="email"
                type="mail"
                defaultValue={current?.email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">phone</label>
              <input
                onChange={(e) => handleChange(e)}
                name="phone"
                id="phone"
                type="text"
                defaultValue={current?.phone}
              />
            </div>
          </div>
          <br />
          <div className="form-header">
            <h4>address</h4>
          </div>
          <div className="form-main">
            <div className="form-group">
              <label htmlFor="">address</label>
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                name="address"
                id="address"
                defaultValue={current?.address}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">bulding number</label>
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                name="bulding"
                id="bulding"
                className="tiny-input"
                defaultValue={current?.bulding}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">city</label>
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                name="city"
                id="city"
                className="tiny-input"
                defaultValue={current?.city}
              />
            </div>
          </div>
          <button>save all</button>
        </form>
      </div>
    </>
  );
};

export default ProfileSetting;
