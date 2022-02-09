import React from "react";
import "./sidebar.css";
import {
  LineStyle,
  PermIdentity,
  Timeline,
  TrendingUp,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_wrapper">
        <div className="sidebar_menu">
          <div className="sidebar_title">Dashboard</div>
          <ul className="sidebar_list">
            <div className="sidebar_list_item ">
              <LineStyle className="sidebar_icon" />
              Home
            </div>
            <div className="sidebar_list_item">
              <Timeline className="sidebar_icon" />
              Analytics
            </div>
            <div className="sidebar_list_item">
              <TrendingUp className="sidebar_icon" />
              Sales
            </div>
          </ul>
        </div>
        <div className="sidebar_menu">
          <div className="sidebar_title">Staff </div>
          <ul className="sidebar_list">
            <div className="sidebar_list_item ">
              <LineStyle className="sidebar_icon" />
              Manage
            </div>
            <div className="sidebar_list_item">
              <Timeline className="sidebar_icon" />
              Analytics
            </div>
            <div className="sidebar_list_item">
              <TrendingUp className="sidebar_icon" />
              Products
            </div>
          </ul>
        </div>
        <div className="sidebar_menu">
          <div className="sidebar_title">QuickMenu </div>
          <ul className="sidebar_list">
            <Link to="/users" className="link">
              <div className="sidebar_list_item ">
                <PermIdentity className="sidebar_icon" />
                Users
              </div>
            </Link>
            <Link to="/products" className="link">
              <div className="sidebar_list_item">
                <Timeline className="sidebar_icon" />
                Products
              </div>
            </Link>
            <div className="sidebar_list_item">
              <TrendingUp className="sidebar_icon" />
              Transactions
            </div>
            <div className="sidebar_list_item">
              <TrendingUp className="sidebar_icon" />
              Reports
            </div>
          </ul>
        </div>
        <div className="sidebar_menu">
          <div className="sidebar_title">Notifications </div>
          <ul className="sidebar_list">
            <div className="sidebar_list_item ">
              <LineStyle className="sidebar_icon" />
              Mail
            </div>
            <div className="sidebar_list_item">
              <Timeline className="sidebar_icon" />
              Feedback
            </div>
            <div className="sidebar_list_item">
              <TrendingUp className="sidebar_icon" />
              Messages
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
