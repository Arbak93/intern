import React from "react";
import './logo.scss';
import img1 from '../Section7/images/Frame (1).png'
import img2 from '../Section7/images/Frame.png';
import img3 from '../Section7/images/Frame (2).png';
import img4 from '../Section7/images/Frame (3).png';
import img5 from '../Section7/images/Frame (4).png';
import img6 from '../Section7/images/Frame (5).png';
import img7 from '../Section7/images/Frame (6).png';
import img8 from '../Section7/images/Frame (7).png';
import img9 from '../Section7/images/Frame (8).png';
import img10 from '../Section7/images/IMAGE.png'


export const Logos = () => {
   
    return <div className="container7">
        <div className="s8box1">
            <div className="s8boxtitle">
                <div className="s8boxtitlehr">
                    <div className="aboutp"><p>about medium</p></div> <div className="lin"></div>

                </div>
                <div className="s8boxtitleh">
                    <p>Creating ideas & building brands that truly matter</p>
                </div>
                <div className="s8boxtitletext" >
                    <p>Why investment portfolio is important to your career Allora can help you get your work noticed whether you are a graphic designer, product designer, web developer, writer, illustrator.</p>
                </div>
                <div className="s8boxtitlep">
                    <p> How we work</p>
                </div>
            </div>
            <div className="s8box1images">
                <div> <img src={img1} alt="nkars" /></div>
                <div> <img src={img2} alt="nkars" /></div>
                <div> <img src={img3} alt="nkars" /></div>
                <div> <img src={img4} alt="nkars" /></div>
                <div> <img src={img5} alt="nkars" /></div>
                <div> <img src={img6} alt="nkars" /></div>
                <div> <img src={img7} alt="nkars" /></div>
                <div> <img src={img8} alt="nkars" /></div>
                <div> <img src={img9} alt="nkars" /></div>
                <div className="s8box1imagesp"><p>Why investment portfolio is important
                    to your career Allora can help you get your work
                    noticed whether you are a graphic designer, product
                    designer, web developer, writer, illustrator.</p></div>
            </div>
        </div>
        <div className="s8box2">
            <img src={img10} alt='sel' />
        </div>
 
        
    </div>


}