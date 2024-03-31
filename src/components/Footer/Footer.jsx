import './style.css'
import { BsFacebook } from "react-icons/bs";


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
                        <span><BsFacebook /></span>
                        <span><BsFacebook /></span>
                        <span><BsFacebook /></span>
                        <span><BsFacebook /></span>
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