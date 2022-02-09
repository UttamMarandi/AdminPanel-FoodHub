import React from "react";
import "./NewUser.css";

const NewUser = () => {
  return (
    <div className="newUser_page">
      <h1>New User</h1>
      <form action="" className="new_user_form">
        <div className="new_user_item">
          <label htmlFor=""> Username</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="new_user_item">
          <label htmlFor=""> Full Name</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="new_user_item">
          <label htmlFor=""> Email</label>
          <input type="email" placeholder="Email" />
        </div>
        <div className="new_user_item">
          <label htmlFor=""> Password</label>
          <input type="password" placeholder="Password" />
        </div>
        <div className="new_user_item">
          <label htmlFor=""> Phone</label>
          <input type="password" placeholder="+1 2234 5678" />
        </div>
        <div className="new_user_item">
          <label htmlFor=""> Address</label>
          <input type="password" placeholder="New York | USA" />
        </div>
        <div className="new_user_item">
          <div className="new_user_gender">
            <label htmlFor=""> Gender</label>
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label htmlFor="other">Other</label>
          </div>
        </div>
        <div className="new_user_item">
          <label htmlFor="">Active</label>
          <select name="active" id="active" className="new_user_select">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="new_user_button">Create</button>
      </form>
    </div>
  );
};

export default NewUser;
