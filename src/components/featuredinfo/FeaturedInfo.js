import React from "react";
import "./FeaturedInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

const FeaturedInfo = () => {
  return (
    <div className="featured_info">
      <div className="featured_item">
        <span className="featured_title">Revenue</span>
        <div className="featured_money_container">
          <span className="featured_money">$2,415</span>
          <span className="featured_money_rate">
            -11.4 <ArrowDownward className="featured_icon negative" />
          </span>
        </div>
        <span className="featured_sub">Compared to last month</span>
      </div>
      <div className="featured_item">
        <span className="featured_title">Sales</span>
        <div className="featured_money_container">
          <span className="featured_money">$2,315</span>
          <span className="featured_money_rate">
            -11.4 <ArrowDownward className="featured_icon negative" />
          </span>
        </div>
        <span className="featured_sub">Compared to last month</span>
      </div>
      <div className="featured_item">
        <span className="featured_title">Cost</span>
        <div className="featured_money_container">
          <span className="featured_money">$2,415</span>
          <span className="featured_money_rate">
            +2 <ArrowUpward className="featured_icon positive" />
          </span>
        </div>
        <span className="featured_sub">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
