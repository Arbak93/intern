import React from "react";
import '../Section3/css/stayle_3.css';
import img from './images1/IMAGE (1).png';
import img1 from './images1/Frame (2).png';
import img2 from './images1/Frame.png';
import '../Section3/css/media3.css';

export const Section3 = () => {

  return <div className="container4">

    <div className="s3boximgs">


      <div className="s3boximg">
        <div className="s3boximg1hr">
          <div className="aboutp"><p>about medium</p></div> <div className="lin"></div>
        
        </div>
        <div className="s3boximg1h">
          <p>Creating ideas & building brands that truly matter</p>
        </div>
        <div className="s3boximg1p" >
          <p>Why investment portfolio is important to your career Allora can help you get your work noticed whether you are a graphic designer, product designer, web developer, writer, illustrator.</p>
        </div>
        <div className="s3box3_span">
          <p> How we work</p>
        </div>
      </div>
      <div className="s3boximg1">
        <div className="s3img">
           <img src={img} alt="nkar"/>
        </div>
        <div className="s3img1">
          <img src={img1} alt="nkars"/>
        </div>
        <div className="s3img2">
          <img src={img2} alt="nkars"/>
        </div>
      </div>
    </div>
  </div>






}