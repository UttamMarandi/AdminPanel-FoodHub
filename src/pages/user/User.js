import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./User.css";

const User = () => {
  return (
    <div className="user_page">
      <div className="user_title_container">
        <h1 className="user_title">Edit User</h1>
        <Link to="/newUser">
          <button className="user_add_button">Create</button>
        </Link>
      </div>
      <div className="user_container">
        <div className="user_show">
          <div className="user_show_top">
            <img
              src="https://images.pexels.com/photos/9668543/pexels-photo-9668543.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=700&w=1200"
              alt=""
              className="user_show_img"
            />
            <div className="user_show_top_title">
              <span className="user_show_user_name">Anna Becker</span>
              <span className="user_show_user_title">Software Engineer</span>
            </div>
          </div>
          <div className="user_show_bottom">
            <div className="user_show_title">Account Details</div>
            <div className="user_show_info">
              <MailOutline className="user_show_icon" />
              <span className="user_show_info_title">annabeck99@gmail.com</span>
            </div>
            <div className="user_show_info">
              <CalendarToday className="user_show_icon" />
              <span className="user_show_info_title">10.12.1999</span>
            </div>
            <div className="user_show_title">Contact Details</div>
            <div className="user_show_info">
              <PhoneAndroid className="user_show_icon" />
              <span className="user_show_info_title">+1 34242 3523</span>
            </div>
            <div className="user_show_info">
              <LocationSearching className="user_show_icon" />
              <span className="user_show_info_title">New york | USA</span>
            </div>
          </div>
        </div>
        <div className="user_update">
          <span className="user_update_title">Edit</span>
          <form action="" className="user_update_form">
            <div className="user_update_left">
              <div className="user_update_item">
                <label htmlFor="">Username</label>
                <input
                  type="text"
                  placeholder="annabeck999"
                  className="user_update_input"
                />
              </div>
              <div className="user_update_item">
                <label htmlFor="">Full Name</label>
                <input
                  type="text"
                  placeholder="Anna Becker"
                  className="user_update_input"
                />
              </div>
              <div className="user_update_item">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  placeholder="annabeck999@gmail.com"
                  className="user_update_input"
                />
              </div>
              <div className="user_update_item">
                <label htmlFor="">Phone</label>
                <input
                  type="text"
                  placeholder="+1 123 456 67"
                  className="user_update_input"
                />
              </div>
              <div className="user_update_item">
                <label htmlFor="">Address</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="user_update_input"
                />
              </div>
            </div>
            <div className="user_update_right">
              <div className="user_update_upload">
                <img
                  src="https://images.pexels.com/photos/9668543/pexels-photo-9668543.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=700&w=1200"
                  alt=""
                  className="user_update_img"
                />
                <label htmlFor="fileid">
                  <Publish className="user_update_icon" />
                </label>
                <input type="file" id="fileid" style={{ display: "none" }} />
              </div>
              <button className="user_update_button">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
