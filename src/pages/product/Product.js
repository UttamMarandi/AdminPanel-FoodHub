import React from "react";
import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import "./Product.css";
import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";

const Product = () => {
  return (
    <div className="product_page">
      <div className="product_title_container">
        <h1 className="product_title">Product</h1>
        <Link to="/newProduct">
          <button className="product_add_button">Create</button>
        </Link>
      </div>
      <div className="produt_top">
        <div className="product_top_left">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="product_top_right">
          <div className="product_info_top">
            <img
              src="https://images.pexels.com/photos/3945697/pexels-photo-3945697.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              alt=""
              className="product_info_img"
            />
            <span className="product_name">Apple Airpods</span>
          </div>
          <div className="product_info_bottom">
            <div className="product_info_item">
              <div className="product_info_key">id:</div>
              <div className="product_info_value">123</div>
            </div>
            <div className="product_info_item">
              <div className="product_info_key">sales:</div>
              <div className="product_info_value">5123</div>
            </div>
            <div className="product_info_item">
              <div className="product_info_key">active:</div>
              <div className="product_info_value">yes</div>
            </div>
            <div className="product_info_item">
              <div className="product_info_key">in stock</div>
              <div className="product_info_value">No</div>
            </div>
          </div>
        </div>
      </div>
      <div className="product_bottom">
        <form className="product_form">
          <div className="product_form_left">
            <label htmlFor="">Product Name</label>
            <input type="text" placeholder="Apple Airpod" />
            <label htmlFor=""> In stock</label>
            <select name="inStock" id="idStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label htmlFor="">Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="product_form_right">
            <div className="product_upload">
              <img
                src="https://images.pexels.com/photos/3945697/pexels-photo-3945697.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                alt=""
                className="product_upload_img"
              />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="product_button">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
