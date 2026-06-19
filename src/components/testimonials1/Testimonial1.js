import React, { Component } from "react";
import Slider from "react-slick";
import "./testimonial1.css";
import img0 from '../Sponsors/Sponsors/img0.png'
import img1 from '../Sponsors/Sponsors/img1.png'
import img2 from '../Sponsors/Sponsors/img2.png'
import img3 from '../Sponsors/Sponsors/img3.png'
import img4 from '../Sponsors/Sponsors/img4.png'
import img5 from '../Sponsors/Sponsors/img5.png'
import img6 from '../Sponsors/Sponsors/img6.png'
import img7 from '../Sponsors/Sponsors/img7.png'
import img8 from '../Sponsors/Sponsors/img8.png'
import img9 from '../Sponsors/Sponsors/img9.png'
import img10 from '../Sponsors/Sponsors/img10.png'
import img11 from '../Sponsors/Sponsors/img11.png'
import img12 from '../Sponsors/Sponsors/img12.png'
import img13 from '../Sponsors/Sponsors/img13.png'
import img14 from '../Sponsors/Sponsors/img14.png'
// import img15 from '../Sponsors/Sponsors/img15.png'
import img16 from '../Sponsors/Sponsors/img16.png'
import img17 from '../Sponsors/Sponsors/img17.png'
import img18 from '../Sponsors/Sponsors/img18.png'
import img19 from '../Sponsors/Sponsors/img19.png'
import img20 from '../Sponsors/Sponsors/img20.png'
import img21 from '../Sponsors/Sponsors/img21.png'
import img22 from '../Sponsors/Sponsors/img22.png'
import img23 from '../Sponsors/Sponsors/img23.png'



function SampleNextArrow(props) {
   const { className, style, onClick } = props;
   return (
     <div
       className={className}
       style={{ ...style, display: "none" }}
       onClick={onClick}
     />
   );
 }
 
 function SamplePrevArrow(props) {
   const { className, style, onClick } = props;
   return (
     <div
       className={className}
       style={{ ...style, display: "none" , visibility:"hidden"}}
       onClick={onClick}
     />
   );
 }
    
export default class Responsive extends Component {
  render() {
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
    var settings = {
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      autoplay:true,
      autoplaySpeed: 1500,
      infinite: true,
      speed: 800,
      slidesToShow: 6,
      slidesToScroll: 4,
      initialSlide: 0,
      
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            
          }
        },
        {
         breakpoint: 600,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2,
           initialSlide: 2,
           dots: false
         }
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2,
           dots: false
         }
       }
      ]
    };
    return (
      <div className='fluid-container sponsor' id='sponsors'> 
   
        <div className='row'>
        <Slider {...settings}>
            {data.map((item,index)=>( 
                <div className='col-xl-12 col-lg-12col-md-12 col-sm-12' key={index}>
                    <div className='sponsor-event-card'>
                        <img src={item.img} alt='image' className='center-image' />
                    </div>
                </div>
            ))}

            

</Slider>




        </div>
    </div>
    )
  }
}