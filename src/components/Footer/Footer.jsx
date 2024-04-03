import './style.css'
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
      <div className="footer_container">
        <div className="footer_sub_container1">
          <div className="footer_profile">
            <div className="footer_profile_title">
              <img src="/footer-logo.png" alt="" />
              <p>Muhammad Usman</p>
              <span>mug832@gmail.com</span>
            </div>
            <p>Web designer and front-end developer</p>
          </div>
          <div className="footer_media">
            <h2>Media</h2>
            <div>
              <span
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/profile.php?id=100041245301416",
                    "_blank"
                  )
                }
              >
                <BsFacebook size={24} />
              </span>
              <span
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/muhammadusman1351/",
                    "_blank"
                  )
                }
              >
                <FaInstagram size={24} />
              </span>
              <span
                onClick={() =>
                  window.open("https://twitter.com/Muhamma58869850", "_blank")
                }
              >
                <FaTwitterSquare size={24} />
              </span>
              <span
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/muhammad-usman-profile121/",
                    "_blank"
                  )
                }
              >
                <FaLinkedin size={24} />
              </span>
              <span
                onClick={() =>
                  window.open(
                    "https://github.com/MuhammadUsmanGhani832",
                    "_blank"
                  )
                }
              >
                <FaGithub size={24} />
              </span>
            </div>
          </div>
        </div>
        <div className="footer_sub_container2">
          <p>© Copyright 2022. @usman</p>
        </div>
      </div>
    );
}

export default Footer