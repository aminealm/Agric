import React from "react";
import "./Sponsors.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img0 from "./Sponsors/img0.png";
import img1 from "./Sponsors/img1.png";
import img2 from "./Sponsors/img2.png";
import img3 from "./Sponsors/img3.png";
import img4 from "./Sponsors/img4.png";
import img5 from "./Sponsors/img5.png";
import img6 from "./Sponsors/img6.png";
import img7 from "./Sponsors/img7.png";
import img8 from "./Sponsors/img8.png";
import img9 from "./Sponsors/img9.png";
import img10 from "./Sponsors/img10.png";
import img11 from "./Sponsors/img11.png";
import img12 from "./Sponsors/img12.png";
import img13 from "./Sponsors/img13.png";
import img14 from "./Sponsors/img14.png";
import img16 from "./Sponsors/img16.png";
import img17 from "./Sponsors/img17.png";
import img18 from "./Sponsors/img18.png";
import img19 from "./Sponsors/img19.png";
import img20 from "./Sponsors/img20.png";
import img21 from "./Sponsors/img21.png";
import img22 from "./Sponsors/img22.png";
import img23 from "./Sponsors/img23.png";

function Sponsors() {
  const data = [
    img0,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2200,
    pauseOnHover: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="section section--white partners-section" id="sponsors">
      <div className="section-container">
        <div className="section-header partners-header">
          <span className="section-eyebrow">Partenaires</span>
          <h2>Ils nous font confiance</h2>
        </div>

        <div className="partners-slider">
          <Slider {...settings}>
            {data.map((logo, index) => (
              <div className="partners-slide" key={`${logo}-${index}`}>
                <div className="partners-logo ui-card">
                  <img src={logo} alt={`Partenaire ${index + 1}`} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
