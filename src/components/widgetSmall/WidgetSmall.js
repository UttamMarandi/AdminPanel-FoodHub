import { Visibility } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./WidgetSmall.css";
import { getUsers } from "../../utils/apiCalls";

const WidgetSmall = () => {
  const [users, setUsers] = useState([]);
  const getUserFn = async () => {
    const res = await getUsers();
    setUsers(res);
  };
  console.log("widgetsm", users);
  useEffect(() => {
    getUserFn();
  });
  return (
    <div className="widget_small">
      <span className="widgetSm_title">New Join Members</span>
      <ul className="widget_small_list">
        <li className="widgetSm_list_item">
          <img
            src="https://images.pexels.com/photos/9668543/pexels-photo-9668543.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=700&w=1200"
            alt=""
            className="widgetSm_image"
          />
          <div className="widgetSm_user">
            <span className="widgetSmUsername">Tommy Malero</span>
            <span className="widgetSm_user_title">Software Engineer</span>
          </div>
          <div className="widgetSm_button">
            <Visibility className="widgetSm_icon" />
            Display
          </div>
        </li>
        <li className="widgetSm_list_item">
          <img
            src="https://images.pexels.com/photos/9668543/pexels-photo-9668543.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=700&w=1200"
            alt=""
            className="widgetSm_image"
          />
          <div className="widgetSm_user">
            <span className="widgetSmUsername">Tommy Malero</span>
            <span className="widgetSm_user_title">Software Engineer</span>
          </div>
          <div className="widgetSm_button">
            <Visibility className="widgetSm_icon" />
            Display
          </div>
        </li>
        <li className="widgetSm_list_item">
          <img
            src="https://images.pexels.com/photos/9668543/pexels-photo-9668543.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=700&w=1200"
            alt=""
            className="widgetSm_image"
          />
          <div className="widgetSm_user">
            <span className="widgetSmUsername">Tommy Malero</span>
            <span className="widgetSm_user_title">Software Engineer</span>
          </div>
          <div className="widgetSm_button">
            <Visibility className="widgetSm_icon" />
            Display
          </div>
        </li>
        <li className="widgetSm_list_item">
          <img
            src="https://images.pexels.com/photos/9668543/pexels-photo-9668543.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=700&w=1200"
            alt=""
            className="widgetSm_image"
          />
          <div className="widgetSm_user">
            <span className="widgetSmUsername">Tommy Malero</span>
            <span className="widgetSm_user_title">Software Engineer</span>
          </div>
          <div className="widgetSm_button">
            <Visibility className="widgetSm_icon" />
            Display
          </div>
        </li>
        <li className="widgetSm_list_item">
          <img
            src="https://images.pexels.com/photos/9668543/pexels-photo-9668543.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=700&w=1200"
            alt=""
            className="widgetSm_image"
          />
          <div className="widgetSm_user">
            <span className="widgetSmUsername">Tommy Malero</span>
            <span className="widgetSm_user_title">Software Engineer</span>
          </div>
          <div className="widgetSm_button">
            <Visibility className="widgetSm_icon" />
            Display
          </div>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSmall;
