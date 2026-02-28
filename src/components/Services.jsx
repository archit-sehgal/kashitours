import React from "react";
import logo from "../assets/logo.png";
import namelogo from "../assets/namelogo.png";
import srvimg1 from "../assets/services/1.jpeg";
import srvimg3 from "../assets/services/3.jpeg";
import srvimg4 from "../assets/services/4.jpeg";
import srvimg5 from "../assets/services/5.jpeg";
import srvimg7 from "../assets/services/11.jpeg";
import srvimg8 from "../assets/services/8.jpeg";
import srvimg9 from "../assets/services/9.jpeg";
import srvimg10 from "../assets/services/10.jpeg";
import srvimg11 from "../assets/services/11.jpeg";
import srvimg12 from "../assets/services/12.jpeg";
import cabservice from "../assets/services/cabservice.webp";
import qr from "../assets/services/qr.jpeg";

import othserv1 from "../assets/otherservices/corporateBooking.webp";
import othserv2 from "../assets/otherservices/weddingbooking.webp";
import othserv3 from "../assets/otherservices/mice.webp";
import othserv4 from "../assets/otherservices/coupleTour.webp";

const Services = () => {
  return (
    <div className="servmain">
      <div className="nav flex">
        <div className="leftnav flex">
          <div className="logo flex">
            <div className="circlelogo">
              <img src={logo} alt="" />
            </div>
            <img src={namelogo} className="namelogo" alt="" />
          </div>
        </div>
        <div className="rightnav flex">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="tel:+918881537945">Contact Now</a>
        </div>
      </div>
      <div className="servhero flex">
        <div className="servhero-black flex">
          <div className="hero-black-content flex">
            <h2>🏨 Explore Our Comfortable & Luxurious Stays</h2>
            <p>
              Experience the perfect blend of comfort and elegance with our
              well-furnished hotel rooms. Whether you're on a business trip or a
              relaxing vacation, our spacious and beautifully designed rooms
              ensure a memorable stay. <br />
              🌟Book now for a delightful hospitality experience!✨
            </p>
          </div>
        </div>
      </div>
      <div className="servphotos flex">
        <div className="servph1 srph">
          <img src={srvimg1} alt="" />
        </div>
        <div className="servph1 srph">
          <img src={srvimg3} alt="" />
        </div>
        <div className="servph1 srph">
          <img src={srvimg4} alt="" />
        </div>
        <div className="servph1 srph">
          <img src={srvimg7} alt="" />
        </div>
        <div className="servph1 srph">
          <img src={srvimg5} alt="" />
        </div>
        <div className="servph1 srph">
          <img src={srvimg8} alt="" />
        </div>
        <div className="servph1 srph">
          <img src={srvimg9} alt="" />
        </div>
        <div className="servph1 srph">
          <img src={srvimg10} alt="" />
        </div>
        <div className="servph1 srph">
          <img src={srvimg11} alt="" />
        </div>
        <div className="servph1 srph">
          <img src={srvimg12} alt="" />
        </div>
      </div>
      <div className="qrsec flex">
        <div className="qr_img flex">
          <img src={qr} />
        </div>
        <div className="qr_desc flex">
          <h3>📲 Secure Your Booking with Easy Payment</h3>
          <p>To confirm your stay, please follow our payment terms:</p>
          <ul>
            <li>✅ 50% payment required at the time of booking</li>
            <li>✅ Full payment to be made one week before travel</li>
            <li>
              ✅ Cancellation policy: Free cancellation up to 30 days before
              check-in
            </li>
          </ul>
        </div>
      </div>
      <div className="cabservice flex">
        <div className="cabphoto flex">
          <img src={cabservice} alt="" />
        </div>
        <div className="cabdesc flex">
          <h3>Cab Service: Varanasi - Prayagraj - Ayodhya 🚖</h3>
          <p>
            Travel comfortably between Varanasi, Prayagraj, and Ayodhya with our
            reliable cab service. Safe, affordable, and hassle-free rides with
            experienced drivers.
          </p>
          <button onClick={() => window.location.href=("tel:+918881537945")}>
            Book Now for a Smooth Journey! 🚕✨
          </button>
        </div>
      </div>
      <div className="Otherservices flex">
        <div className="othserv oths1 flex">
          <div className="othserv_img flex"onClick={() => window.location.href=("tel:+918881537945")}>
            <img src={othserv1} alt="" />
          </div>
          <div className="othserv_desc flex">
            <h3>Corporate Booking</h3>
          </div>
        </div>
        <div className="othserv oths1 flex">
          <div className="othserv_img flex" onClick={() => window.location.href=("tel:+918881537945")}>
            <img src={othserv2} alt="" />
          </div>
          <div className="othserv_desc flex">
            <h3>Wedding Booking</h3>
          </div>
        </div>
        <div className="othserv oths1 flex">
          <div
            className="othserv_img flex"
            onClick={() => window.location.href=("tel:+918881537945")}
          >
            <img src={othserv3} alt="" />
          </div>
          <div className="othserv_desc flex">
            <h3>MICE Booking</h3>
          </div>
        </div>
        <div className="othserv oths1 flex">
          <div className="othserv_img flex"onClick={() => window.location.href=("tel:+918881537945")}>
            <img src={othserv4} alt="" />
          </div>
          <div className="othserv_desc flex">
            <h3>Couple Tour</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
