// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/Kds logo 1 (4).png";
import camera from "../../assets/camera.png";
import prist from "../../assets/print.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import linkdien from "../../assets/linkdien.png";

const Footer = () => {
  return (
    <>
      <section className={styles.FooterSection}>
        <div className={styles.FooterMainDiv}>
          <div className={styles.footerLogo}>
            <div>
              <img src={logo} alt="Logo" />
            </div>
            <p>Revolutionizing Your Business Through Technology</p>
          </div>
          {/* Services */}
          <div className={styles.footerDiv}>
            <p>Services</p>
            <ul>
              <li>Mobile App development</li>
              <li>E-Commerce Development</li>
              <li>Website Development</li>
              <li>Digital Marketing</li>
              <li>UI/UX Designer</li>
              <li>Graphics Design</li>
              <li>Staff Augmentation</li>
              <li>Multi-Level Marketing</li>
              <li>Software Development</li>
            </ul>
          </div>
          {/* Company */}
          <div className={styles.footerDiv}>
            <p>Company</p>
            <ul>
              <li>About Us</li>
              <li>Career</li>
              <li>Hiring</li>
              <li>Privacy Policy</li>
              <li>Cookies Policy</li>
              <li>Terms of Services</li>
              <li>FAQs</li>
            </ul>
          </div>
          {/* Contact Us */}
          <div className={styles.footerDiv}>
            <p>Contact us</p>
            <ul>
              <li>
                Sales: <br /> <b>Info@Kusheldigi.com</b>
              </li>
              <li>
                Mobile: <br /> <b>+919045301704</b>
              </li>
            </ul>
          </div>
        </div>
        <section className={styles.footSection}>
          <div className={styles.footDivv}>
            <div>
              <p>
                <b>India Office Address</b> G-9, First Floor, Sector-63,
                Noida-201301
              </p>
            </div>
            <div>
              <p>
                <b>USA Office Address</b> G-9, First Floor, Sector-63,
                Noida-201301
              </p>
            </div>
          </div>
          <div className={styles.iframeDiv}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.024544018201!2d77.3815284109692!3d28.629026484138528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce49f5d8cdc4b%3A0xedb207949cd07d2b!2sKushel%20Digi%20Solutions%20%7C%20E-commerce%20Web%20Development%20%7C%20Web%20Design%20%26%20App%20Development%20Company!5e0!3m2!1sen!2sin!4v1737011213629!5m2!1sen!2sin"
              width="450"
              height="320"
              loading="lazy"
              title="Google Map Location"
            ></iframe>
          </div>
        </section>
      </section>
      <section>
        <div className={styles.lastFooter}>
          <div>
            <img src={camera} alt="Camera" />
            <img src={prist} alt="Print" />
            <img src={linkdien} alt="LinkedIn" />
            <img src={facebook} alt="Facebook" />
            <img src={twitter} alt="Twitter" />
          </div>
          <div>
            <button className={styles.footButton1}>
              Back to Top <i className="ri-arrow-up-s-line"></i>
            </button>
          </div>
          <div>
            <p>@2023 Kushel Digi. All Rights Reserved</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
