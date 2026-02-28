import React from "react";
import logo from "../assets/logo.png";
import namelogo from "../assets/namelogo.png";
import chardham from "../assets/chardham.jpeg";
import Jaipur from "../assets/jaipurtour.jpeg";
import ujjain from "../assets/ujjain.jpeg";
import vaishno from "../assets/vaishnodevi.jpeg";
import Varanasi from "../assets/varanasi.jpg";
import certificate from "../assets/certificate.png";
import Ayodhya from "../assets/Ayodhya.webp";
import pryagraj from "../assets/pryagraj.webp";
import b2b from "../assets/b2b.jpeg"
import Slider from "./Slider.jsx";
const Home = () => {
  return (
    <div className="homemain flex">
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
      <div className="hero flex">
        <div className="hero-black flex">
          <div className="hero-black-content flex">
            <h1>KASHI TOURS</h1>
            <p>by LHT</p>
            <p>🔱 Spirituality redefined 🔱</p>
          </div>
          <button onClick={() => window.scrollBy(0, 500)}>Explore 👇🏻</button>
        </div>
      </div>
      <div className="tours flex">
        <div className="shrivaishnomata  tr flex">
          <div className="ch-img">
            <img src={Varanasi} alt="Vaishno Devi Tour" />
          </div>
          <div className="ch-desc flex">
            <h2>Varanasi Tour</h2>
            <p>
              Embark on a spiritual journey to the sacred city of Varanasi,
              where the Ganga Aarti, ancient temples, and vibrant ghats create a
              mesmerizing experience. Discover the divine essence of Kashi
              Vishwanath Temple, take a serene boat ride on the Ganges, and
              immerse yourself in the rich cultural heritage of this timeless
              city.
            </p>
            <button
              onClick={() => (window.location.href = "tel:+918881537945")}
            >
              Book Now
            </button>
          </div>
        </div>
        <div className="shrivaishnomata  tr flex">
          <div className="ch-img">
            <img src={b2b} alt="Vaishno Devi Tour" />
          </div>
          <div className="ch-desc flex">
            <h2>B2B bulk room packages</h2>
            <p>
              We provide cost-effective bulk room packages for businesses,
              travel agencies, and corporate clients with seamless booking
              solutions worldwide.
            </p>
            <button
              onClick={() => (window.location.href = "tel:+918881537945")}
            >
              Book Now
            </button>
          </div>
        </div>
        {/* Ayodhya Tour */}
        <div className="ayodhya tr flex">
          <div className="ch-img">
            <img src={Ayodhya} alt="Ayodhya Tour" />
          </div>
          <div className="ch-desc flex">
            <h2>Ayodhya Tour</h2>
            <p>
              Explore the birthplace of Lord Rama, Ayodhya, a city rich in
              mythology, culture, and sacred temples that echo the Ramayana's
              timeless legacy.
            </p>
            <button
              onClick={() => (window.location.href = "tel:+918881537945")}
            >
              Book Now
            </button>
          </div>
        </div>

        {/* Prayagraj Tour */}
        <div className="prayagraj tr flex">
          <div className="ch-img">
            <img src={pryagraj} alt="Prayagraj Tour" />
          </div>
          <div className="ch-desc flex">
            <h2>Prayagraj Tour</h2>
            <p>
              Visit Prayagraj, the sacred confluence of Ganga, Yamuna, and the
              mythical Saraswati. Witness the grandeur of the Kumbh Mela and
              immerse in the spiritual ambiance.
            </p>
            <button
              onClick={() => (window.location.href = "tel:+918881537945")}
            >
              Book Now
            </button>
          </div>
        </div>
        <div className="chardham  tr  flex">
          <div className="ch-img">
            <img src={chardham} alt="Chardham Tour" />
          </div>
          <div className="ch-desc flex">
            <h2>Chardham Tour</h2>
            <p>
              Embark on a sacred journey to the four revered shrines—Yamunotri,
              Gangotri, Kedarnath, and Badrinath—nestled in the Himalayas,
              offering spiritual bliss and breathtaking landscapes.
            </p>
            <button
              onClick={() => (window.location.href = "tel:+918881537945")}
            >
              Book Now
            </button>
          </div>
        </div>

        <div className="jaipurTour  tr flex">
          <div className="ch-img">
            <img src={Jaipur} alt="Jaipur Tour" />
          </div>
          <div className="ch-desc flex">
            <h2>Jaipur Tour</h2>
            <p>
              Explore the royal heritage of Jaipur, the Pink City, with its
              magnificent forts, vibrant bazaars, and iconic landmarks like
              Amber Fort, Hawa Mahal, and City Palace.
            </p>
            <button
              onClick={() => (window.location.href = "tel:+918881537945")}
            >
              Book Now
            </button>
          </div>
        </div>

        <div className="Ujjaintour tr flex">
          <div className="ch-img">
            <img src={ujjain} alt="Ujjain Tour" />
          </div>
          <div className="ch-desc flex">
            <h2>Ujjain Tour</h2>
            <p>
              Visit the ancient city of Ujjain, home to the revered
              Mahakaleshwar Jyotirlinga, the Kumbh Mela, and serene ghats along
              the sacred Shipra River.
            </p>
            <button
              onClick={() => (window.location.href = "tel:+918881537945")}
            >
              Book Now
            </button>
          </div>
        </div>

        <div className="shrivaishnomata  tr flex">
          <div className="ch-img">
            <img src={vaishno} alt="Vaishno Devi Tour" />
          </div>
          <div className="ch-desc flex">
            <h2>Vaishno Devi Tour</h2>
            <p>
              A divine pilgrimage to the holy Vaishno Devi shrine in the Trikuta
              Hills, where devotees undertake a spiritually enriching trek to
              seek the goddess’s blessings.
            </p>
            <button
              onClick={() => (window.location.href = "tel:+918881537945")}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
      <div className="services flex">
        <div className="servicesimg flex">
          <h3>Explore our Services</h3>
          <button
            onClick={() => {
              window.location.href = "/services";
            }}
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="certificate flex">
        <div className="cert_img flex">
          <img src={certificate} />
        </div>
        <div className="cert_desc flex">
          <h3>🏆 Certificate of Appreciation from BHU</h3>
          <p>
            Kashi Tours is honored to receive the{" "}
            <b>Certificate of Appreciation</b> from the Faculty of Commerce,
            BHU, for sponsoring <b>UDBHAVA 2024</b>. This recognition reflects
            our commitment to supporting meaningful events and creating lasting
            impacts. 🚀✨
          </p>
        </div>
      </div>
      <div className="sliderhome">
        <Slider />
      </div>
      <div className="footer flex">
        <div className="contact_sec flex">
          <a href="mailto:kaashitour333@gmail.com">
            📩 kaashitour333@gmail.com
          </a>
          <a href="mailto:kaashitour333@gmail.com">
            📩 kaashitour333@gmail.com
          </a>
        </div>
        <div className="lastline">
          Copyright 2025 || kashi tours by LHT || Devloped by{" "}
          <a href="https://www.digitaleditz.com/" target="_blank">
            DigitalEditz
          </a>
          <br />
          <div className="smlinksFooter flex">
            <a
              className="SmLink"
              href="https://www.facebook.com/share/1Dx7hxqUHC/"
              target="_blank"
            >
              <i className="fa-brands fa-square-facebook"></i> Facebook
            </a>
            <a
              className="SmLink"
              href="https://www.instagram.com/kashi_tour_by_lht?igsh=MTB0bHNqaGU2MmU1bA=="
              target="_blank"
            >
              <i className="fa-brands fa-square-instagram"></i> Instagram
            </a>
            <a
              className="SmLink smwb"
              href="https://wa.me/918881537945"
              target="_blank"
            >
              <i className="fa-brands fa-square-instagram"></i> Whatsapp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
