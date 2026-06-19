import React, { Component } from "react";
import Slider from "react-slick";
import img0 from './chefs/0.jpg'
import img1 from './chefs/1.jpg'
import img2 from './chefs/2.jpg'
import img3 from './chefs/3.jpg'
import img4 from './chefs/4.jpg'
import img5 from './chefs/5.jpg'
import img6 from './chefs/6.jpg'
import img7 from './chefs/7.jpg'
import img8 from './chefs/8.jpg'
import img00 from './vice-chefs/0.jpg'
import img11 from './vice-chefs/1.jpg'
import img22 from './vice-chefs/2.jpg'
import img33 from './vice-chefs/3.jpg'
import img44 from './vice-chefs/4.jpg'
import img55 from './vice-chefs/5.jpg'
import img66 from './vice-chefs/6.jpg'
import img77 from './vice-chefs/7.jpg'
import img99 from './design.png'

import './Chefs.css'
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

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }
  

  render() {
    const data = [
        {
            id:1,
            name:'Soukaina Abourezq',
            vice_name:'Hajar Zerouali',
            Text:"Chef Comité Social",
            vice_Text:"Vice-Chef Comité Social",
            Image:img0,
            Image_1:img00,
            link : 'https://web.facebook.com/profile.php?id=100010719703796' ,
            link2 : 'https://www.instagram.com/lilooooouch/?hl=fr' ,
            
        },
        {
            id:2,
            name:'Mouad Boudouma',
            vice_name:'Anas sabir',
            Text:"Chef Comité Logistique",
            vice_Text:"Vice-Chef Comité Logistique",
            Image:img2,
            Image_1:img22,
            link : 'https://web.facebook.com/walid.bachraniferification',
            link2 : 'https://www.instagram.com/walid_bachrani/?hl=fr' ,
            

        },
        {
            id:3,
            name:'Amine Chaddak',
            vice_name:'Mohamed Chawki ayach',
            Text:"Chef Comité Parascolaire",
            vice_Text:"Vice-Chef Comité Parascolaire",
            Image:img4,
            Image_1:img44,
            link : 'https://web.facebook.com/hiba.aitmadi' ,
            link2 : 'https://www.instagram.com/hibaaitmadi/?hl=fr' ,
        
        },
        {
            id:4,
            name:'Sanae Kerzazi',
            vice_name:'Hamza Sbai',
            Text:"Chef Comité Design",
            vice_Text:"Vice-Chef Comité Design",
            Image:img5,
            Image_1:img55,
            link : 'https://web.facebook.com/marwa.karaaoui' ,
            link2 : 'https://www.instagram.com/marwakaraaoui/?hl=fr' ,



        },
        {
            id:5,
            name:'Mehdi Choulli',
            vice_name:'Hafsa Nbabat',
            Text:"Chef Comité Formation",
            vice_Text:"Vice-Chef Comité Formation",
            Image:img1,
            Image_1:img11,
            link : 'https://web.facebook.com/midou.didou.9480' ,
            link2 : 'https://www.instagram.com/meehdii2/?hl=fr' ,


        },
        {
            id:6,
            name:'Farah halim',
            vice_name:'Meriem Mhaide',
            Text:"Chef Comité Projects",
            vice_Text:"Vice-Chef Comité Projects",
            Image:img6,
            Image_1:img66,
            link : 'https://web.facebook.com/groups/347756342984140/user/100006103217756/' ,
            link2 : '#' ,


        },
        {
            id:7,
            name:'Iman Barouki',
            vice_name:'Halima Saadia Khadim',
            Text:"Chef Comité Médiatisation",
            vice_Text:"Vice-Chef Comité Médiatisation",
            Image:img7,
            Image_1:img77,
            link : 'https://web.facebook.com/groups/347756342984140/user/100006103217756/' ,
            link2 : '#' ,


        },
        {
            id:8,
            name:'Doha Ouhmido',
            vice_name:'Ali Ouazzano',
            Text:"Chef Comité Forum",
            vice_Text:"Vice-Chef Comité Forum",
            Image:img6,
            Image_1:img77,
            link : 'https://web.facebook.com/groups/347756342984140/user/100006103217756/' ,
            link2 : '#' ,


        },
    ]
    var settings = {
     focusOnSelect:true,
    
       pauseOnHover: true,
       autoplay:false,
      dots : true,
      speed: 500,
      infinite: true,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            autoplay:true,
            autoplaySpeed: 2000,

          }
        },
        {
          breakpoint: 600,
          settings: {
            autoplaySpeed: 2000,

            autoplay:true,
            nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
          }
        },
        {
          breakpoint: 480,
          settings: {
            autoplay:true,
            nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      autoplaySpeed: 2000,

            
          }
        }
      ]
    };

    return (
      <div className="container chefs-sct" id="chefs">
        {/* <h4>Second Slider</h4> */}
        <Slider
          slidesToShow={2}
          swipeToSlide={true}
          focusOnSelect={true}
          pauseOnHover= {true}
          adaptiveHeight={true}
          className="none"
          slidesToScroll={2}
          initialSlide={0}
        >
        {data.map((item,index)=>(
          <div className=' card-membre'>

          <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                <div class="card-x">
                    <div class="image">
                      <img src={item.Image}/>
                    </div>
                    <div class="details">
                      <div class="center">
                        <h1>{item.name}</h1>
                        <p>{item.Text}</p>
                        <ul>
                          <li><a href={item.link} target="_blank" rel="noreferrer"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                          
                          <li><a href={item.link2}  target="_blank" rel="noreferrer"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                        </ul>
                      </div>
                    </div>
            </div>
          
            
          
          </div>
          
        </div>
        ))}
      
        
        
        
         
        

        </Slider>
      </div>
    );
  }
}
