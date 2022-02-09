import React from "react";
import "./WidgetLarge.css";

const WidgetLarge = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLg_button " + type}>{type}</button>;
  };
  return (
    <div className="widget_large">
      <h3 className="widgetLg_title">Latest transactions</h3>
      <table className="widgetLg_table">
        <tr className="widgetLg_tr">
          <th className="widgetLg_th">Customer</th>
          <th className="widgetLg_th">Date</th>
          <th className="widgetLg_th">Amount</th>
          <th className="widgetLg_th">Status</th>
        </tr>
        <tr className="widgetLg_tr">
          <td className="widgetLg_user">
            <img
              src="https://images.pexels.com/photos/9668543/pexels-photo-9668543.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=700&w=1200"
              alt=""
            />
            <span className="widgetLg_name">Susan Carol</span>
          </td>
          <td className="widgetLg_date">2 June 2021</td>
          <td className="widgetLg_amount">$122.00</td>
          <td className="widgetLg_status">
            <Button type="approved" />
          </td>
        </tr>
        <tr className="widgetLg_tr">
          <td className="widgetLg_user">
            <img
              src="https://images.pexels.com/photos/9668543/pexels-photo-9668543.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=700&w=1200"
              alt=""
            />
            <span className="widgetLg_name">Susan Carol</span>
          </td>
          <td className="widgetLg_date">2 June 2021</td>
          <td className="widgetLg_amount">$122.00</td>
          <td className="widgetLg_status">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLg_tr">
          <td className="widgetLg_user">
            <img
              src="https://images.pexels.com/photos/9668543/pexels-photo-9668543.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=700&w=1200"
              alt=""
            />
            <span className="widgetLg_name">Susan Carol</span>
          </td>
          <td className="widgetLg_date">2 June 2021</td>
          <td className="widgetLg_amount">$122.00</td>
          <td className="widgetLg_status">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLg_tr">
          <td className="widgetLg_user">
            <img
              src="https://images.pexels.com/photos/9668543/pexels-photo-9668543.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=700&w=1200"
              alt=""
            />
            <span className="widgetLg_name">Susan Carol</span>
          </td>
          <td className="widgetLg_date">2 June 2021</td>
          <td className="widgetLg_amount">$122.00</td>
          <td className="widgetLg_status">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLarge;
