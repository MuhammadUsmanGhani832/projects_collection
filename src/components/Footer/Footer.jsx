import './style.css'
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer_container'>
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
                        <span><BsFacebook /></span>
                        <span><FaInstagram /></span>
                        <span><FaTwitterSquare /></span>
                        <span><FaLinkedin /></span>
                        <span><FaGithub /></span>
                    </div>
                </div>
            </div>
            <div className="footer_sub_container2">
                <p>© Copyright 2022. Made by Elias</p>
            </div>
        </div>
    )
}

export default Footer