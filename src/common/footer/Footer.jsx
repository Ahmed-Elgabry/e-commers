import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid2">
          <div className="box">
            <h1>Boonik</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              repellat corrupti, velit quasi esse cumque possimus magnam
              reprehenderit debitis ipsam eligendi praesentium maiores nemo est
              animi, excepturi saepe. Consectetur, doloremque!
            </p>
            <div className="icon d_flex">
              <div className="img d_flex">
                <i className="fa-brands fa-google-play"></i>
                <span>Google Play</span>
              </div>
              <div className="img d_flex">
                <i className="fa-brands fa-app-store-ios"></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className="box">
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className="box">
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>

          <div className="box">
            <h2>Contact Us</h2>
            <ul>
              <li>
                70 Washington Square South, New York, NY 10012, United States{" "}
              </li>
              <li>Email: demo@exmple.com</li>
              <li>Phone: +1 1123 456 780</li>
            </ul>
          </div>
        </div>
        <div className="foot">
             <p>Copyright © 2021 All rights reserved | This template is made by Eng/ Ahmed Elgabry</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
