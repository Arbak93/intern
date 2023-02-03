import React from "react";
import './stayle_1.scss';
import './media1.scss';
import frame from './images/Frame.png';
import frame2 from './images/Frame (2).png';
import frame1 from './images/Frame (1).png';
import frame3 from './images/Frame (3).png';
import frame4 from './images/Frame (4).png';
import frame5 from './images/Frame (5).png';
export const Section = () => {

    return <div className="container1">

       <div className="box1">
        
        <div className="box">
        <img src={frame} alt="" />
        </div>
        <div className="box">
        <img src={frame1} alt="" />
        </div> 
        <div className="box">
        <img src={frame3} alt="" />
        </div>
        </div>

     <div className="box2">
        
     
        <div className="box">
        <img src={frame2} alt="" />
        </div>
        <div className="box">
        <img src={frame4} alt="" />
        </div>
        <div className="box">
        <img src={frame5} alt="" />
       
        </div>
    </div>

    </div>

     
}