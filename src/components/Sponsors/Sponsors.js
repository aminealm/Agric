import React from 'react'
import "./Sponsors.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import img from "../../img/img.jpg"
import img0 from './Sponsors/img0.png'
import img1 from './Sponsors/img1.png'
import img2 from './Sponsors/img2.png'
import img3 from './Sponsors/img3.png'
import img4 from './Sponsors/img4.png'
import img5 from './Sponsors/img5.png'
import img6 from './Sponsors/img6.png'
import img7 from './Sponsors/img7.png'
import img8 from './Sponsors/img8.png'
import img9 from './Sponsors/img9.png'
import img10 from './Sponsors/img10.png'
import img11 from './Sponsors/img11.png'
import img12 from './Sponsors/img12.png'
import img13 from './Sponsors/img13.png'
import img14 from './Sponsors/img14.png'
import img15 from './Sponsors/img15.png'
import img16 from './Sponsors/img16.png'
import img17 from './Sponsors/img17.png'
import img18 from './Sponsors/img18.png'
import img19 from './Sponsors/img19.png'
import img20 from './Sponsors/img20.png'
import img21 from './Sponsors/img21.png'
import img22 from './Sponsors/img22.png'
import img23 from './Sponsors/img23.png'






function Sponsors() {
  const data = [
    {
       'img':img0,
       
    },
    {
       'img':img1,
       
    },
    {
       'img':img2,
       
    },
    {
       'img':img3,
       
    },
    {
       'img':img4,
      
    },
    {
       'img':img5,
       
    },
    {
       'img':img6,
       
    },
    {
       'img':img7,
       
    },
    {
       'img':img8,
       
    },
    {
       'img':img9,
       
    },
    {
       'img':img10,
       
    },
    {
       'img':img11,
       
    },
    {
       'img':img12,
       
    },
    {
       'img':img13,
       
    },
    {
       'img':img14,
       
    },
    
    {
       'img':img16,
       
    },
    {
       'img':img17,
       
    },
    {
       'img':img18,
       
    },
    {
       'img':img19,
       
    },
    {
       'img':img20,
       
    },
    {
       'img':img21,
       
    },
    {
       'img':img22,
       
    },
    {
       'img':img23,
       
    },
];

const settings = {
  initialSlide: 0,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  adaptiveHeight:true,
  initialSlide:0,
  autoplay:true,
  rows:1,
  slidesPerRow:1,
  pauseOnHover: true,
  focusOnSelect: true,
  // slidesToScroll: 1,
};
  return (
    <div className='container feedback-slider1' id='sponsors'>
      <div className='service-title'>
        <h2>Sponsors</h2>
        <span className='line'></span>
      </div>
    

   
      <div className='feed-slide'>
      <Slider {...settings}>
        {data.map((item,index)=>(
          <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
            <div className=' content-slider' key={index}>
                <img src={item.img} alt='slider image' className='center-image'/>
            </div>
            
          
          </div>

        ))}
        </Slider>
        {/* <div className='feed-slide'>
      <div class="logos py-1">
        <div><img src={img0} alt="Client"/></div>
        <div><img src={img1} alt="Client"/></div>
        <div><img src={img2} alt="Client"/></div>
        <div><img src={img3} alt="Client"/></div>
        <div><img src={img4} alt="Client"/></div>
        <div><img src={img5} alt="Client"/></div>
        <div><img src={img6} alt="Client"/></div>
        <div><img src={img7} alt="Client"/></div>
        <div><img src={img8} alt="Client"/></div>
        <div><img src={img9} alt="Client"/></div>
        <div><img src={img10} alt="Client"/></div>
        <div><img src={img11} alt="Client"/></div>
        <div><img src={img12} alt="Client"/></div>
        <div><img src={img13} alt="Client"/></div>
        <div><img src={img14} alt="Client"/></div>
        <div><img src={img16} alt="Client"/></div>
        <div><img src={img17} alt="Client"/></div>
        <div><img src={img18} alt="Client"/></div>
        <div><img src={img19} alt="Client"/></div>
        <div><img src={img20} alt="Client"/></div>
        <div><img src={img21} alt="Client"/></div>
       
    </div>
      </div> */}
      </div>
    


    </div>
  )
}

export default Sponsors
