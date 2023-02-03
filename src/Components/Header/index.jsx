import React from "react";
import nkar from "./img/IMAGE (1).png";
import nkar2 from "./img/IMAGE2.png";
import nkar3 from "./img/IMAGE (3).png";
import "./style.scss";
import "./media.scss"

export const Header = () => {


    return <div className="containerh">
        <div className='logo'>
            <div className="num">
                <p>2016-22</p>
            </div>
            <div className="circles">
                <div className="circle">
                </div>
                <div className="circle1 ">
                </div>
            </div>
            <div className="logo_text">
                <p >Allora = design + thinking</p>
            </div>
        </div>
        <div className="button_line">
        </div >
        <div className="header_title">
            <h3> Award winning digital design agency based in California</h3>
        </div>
        <div className="text">
            <p>is a beautiful and simple Webflow Portfolio Template for those creatives and digital studios that want to have a powerful yet simple website where they can showcase their work and services. Allora. is the perfect fit for your business.</p>
        </div>

        <div className="buttons">
            <div className="button1">
                <button type="smbit">Start a Project</button>
            </div>
            <div className="button1 button2">
                <button type="submit">We're Hiring</button>
            </div>

        </div>
        <div className="imgs">
            <div className="img1">
                <img src={nkar} alt="" />
            </div>
            <div className="img2">
                <img src={nkar2} alt="" />
            </div>
            <div className="img3">
                <img src={nkar3} alt="" />
            </div>
        </div>
    </div>
}