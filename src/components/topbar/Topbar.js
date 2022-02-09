import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar_wrapper">
        <div className="top_left">
          <span className="logo">Admin Panel</span>
        </div>
        <div className="top_right">
          <div className="topbar_icon_container">
            <NotificationsNone />
            <span className="top_icon_badge">2</span>
          </div>
          <div className="topbar_icon_container">
            <Language />
            <span className="top_icon_badge">2</span>
          </div>
          <div className="topbar_icon_container">
            <Settings />
          </div>
          <img
            src="https://images.pexels.com/photos/904124/pexels-photo-904124.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            alt=""
            className="top_avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
