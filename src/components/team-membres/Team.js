import React from "react";
import "./team.css";
import img0 from "./bureau/img0.jpg";
import img1 from "./bureau/img1.jpg";
import img2 from "./bureau/img2.jpg";
import img3 from "./bureau/img3.jpg";
import img4 from "./bureau/img4.jpg";
import img5 from "./bureau/img5.jpg";
import img6 from "./bureau/img6.jpg";
import Slider from "react-slick";

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
      style={{ ...style, display: "none", visibility: "hidden" }}
      onClick={onClick}
    />
  );
}

function Team() {
  const data = [
    {
      id: 1,
      name: "Laila Hssaina",
      Text: "Présidente",
      Image: img0,
      link: "https://web.facebook.com/profile.php?id=100010719703796",
      link2: "https://www.instagram.com/lilooooouch/?hl=fr",
    },
    {
      id: 2,
      name: "Walid Bachrani ",
      Text: "Vice-Présidente",
      Image: img5,
      link: "https://web.facebook.com/walid.bachraniferification",
      link2: "https://www.instagram.com/walid_bachrani/?hl=fr",
    },
    {
      id: 3,
      name: "Hiba Ait Madi",
      Text: "Secrétaire Générale",
      Image: img2,
      link: "https://web.facebook.com/hiba.aitmadi",
      link2: "https://www.instagram.com/hibaaitmadi/?hl=fr",
    },
    {
      id: 4,
      name: "Zineb Oudadsse",
      Text: "Vice-Secrétaire Générale",
      Image: img6,
      link: "https://www.facebook.com/zineub.25?mibextid=LQQJ4d",
      link2: "https://instagram.com/6ineb?igshid=YmMyMTA2M2Y=",
    },
    {
      id: 5,
      name: "Marwa Karaaoui",
      Text: "Trésorier",
      Image: img3,
      link: "https://web.facebook.com/marwa.karaaoui",
      link2: "https://www.instagram.com/marwakaraaoui/?hl=fr",
    },
    {
      id: 6,
      name: "Ghlana Merdi",
      Text: "Vice-Trésorier",
      Image: img1,
      link: "https://www.facebook.com/profile.php?id=100006103217756&mibextid=LQQJ4d",
      link2: "https://instagram.com/g.h.m.z?igshid=YmMyMTA2M2Y=",
    },
    
    {
      id: 7,
      name: "Mehdi El Ayoubi",
      Text: "Conseillér",
      Image: img4,
      link: "https://web.facebook.com/midou.didou.9480",
      link2: "https://www.instagram.com/meehdii2/?hl=fr",
    },
    
    
    
  ];

  var settings = {
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
    ],
  };

  return (
    <div className="container team-members" id="team-mmbre">
      <div className="service-title">
        <h2>Bureau</h2>
        <span className="line"></span>
      </div>
      <div className="row card-membre">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 px-3">
              <div class="card-x-0">
                <div class="image">
                  <img src={item.Image} alt=''/>
                </div>
                <div class="details">
                  <div class="center">
                    <h1>{item.name}</h1>
                    <p>{item.Text}</p>
                    <ul>
                      <li>
                        <a href={item.link} target="_blank" rel="noreferrer">
                          <i class="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                      </li>

                      <li>
                        <a href={item.link2} target="_blank" rel="noreferrer">
                          <i class="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Team;
