import React, { Component } from "react";
import "./Chefs.css";
import Slider from "react-slick";
import img0 from "./chefs/0.jpg";
import img1 from "./chefs/1.jpg";
import img2 from "./chefs/2.jpg";
import img3 from "./chefs/3.jpg";
import img4 from "./chefs/4.jpg";
import img5 from "./chefs/5.jpg";
import img6 from "./chefs/6.jpg";
import img7 from "./chefs/7.jpg";
import img00 from "./vice-chefs/0.jpg";
import img11 from "./vice-chefs/1.jpg";
import img22 from "./vice-chefs/2.jpg";
import img44 from "./vice-chefs/4.jpg";
import img55 from "./vice-chefs/5.jpg";
import img66 from "./vice-chefs/6.jpg";
import img77 from "./vice-chefs/7.jpg";
import img000 from "./comite/comitesocial.png";
import img111 from "./comite/comitelogistique.png";
import img222 from "./comite/comitepara.png";
import img333 from "./comite/comitedesign.png";
import img444 from "./comite/comiteformation.png";
import img555 from "./comite/comiteprojets.png";
import img666 from "./comite/comitemediatisation.png";
import img777 from "./comite/comiteforum.png";

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

export default class AsNavFor extends Component {
  render() {
    const data = [
      {
        id: 1,
        name: "Soukaina Abourezq",
        vice_name: "Hajar Zerouali",
        Text: "Chef Comité Social",
        vice_Text: "Vice-Chef Comité Social",
        Image: img0,
        Image_1: img00,
        Image_2: img000,

        link0: "https://www.facebook.com/soukaina.abourezq.9?mibextid=ZbWKwL",
        link1:
          "https://www.instagram.com/invites/contact/?i=1jijectav767v&utm_content=3vfubum",
        link2: "https://www.facebook.com/malak.hajaritta?mibextid=ZbWKwL",
        link3: "https://instagram.com/hajar10zerouali?igshid=NTA5ZTk1NTc=",
      },
      {
        id: 2,
        name: "Mouad Boudouma",
        vice_name: "Anas sabir",
        Text: "Chef Comité Logistique",
        vice_Text: "Vice-Chef Comité Logistique",
        Image: img5,
        Image_1: img22,
        Image_2: img111,

        link0: "#",
        link1: "#",
        link2: "https://www.facebook.com/anas.sabir.963?mibextid=ZbWKwL",
        link3: "https://instagram.com/anaaas.sa?igshid=NTA5ZTk1NTc=",
      },
      {
        id: 3,
        name: "Amine Chaddak",
        vice_name: "Mohamed Chawki ayach",
        Text: "Chef Comité Parascolaire",
        vice_Text: "Vice-Chef Comité Parascolaire",
        Image: img2,
        Image_1: img44,
        Image_2: img222,

        link0:
          "https://www.facebook.com/profile.php?id=100012251642150&mibextid=ZbWKwL",
        link1: "https://instagram.com/amine_chaddak?igshid=NTA5ZTk1NTc=",
        link2: "https://www.facebook.com/chawki17ayach2?mibextid=ZbWKwL",
        link3: "https://instagram.com/chawki_ayach?igshid=ZDdkNTZiNTM=",
      },
      {
        id: 4,
        name: "Sanae Kerzazi",
        vice_name: "Hamza Sbai",
        Text: "Chef Comité Design",
        vice_Text: "Vice-Chef Comité Design",
        Image: img3,
        Image_1: img55,
        Image_2: img333,

        link0: "https://www.facebook.com/Kerzazi.Sanae15?mibextid=ZbWKwL",
        link1: "https://instagram.com/sanae_kerzazi?igshid=NTA5ZTk1NTc=",
        link2:
          "https://www.facebook.com/profile.php?id=100010266967718&mibextid=ZbWKwL",
        link3: "https://www.instagram.com/_itssbai_/",
      },
      {
        id: 5,
        name: "Mehdi Choulli",
        vice_name: "Hafsa Nbabat",
        Text: "Chef Comité Formation",
        vice_Text: "Vice-Chef Comité Formation",
        Image: img4,
        Image_1: img11,
        Image_2: img444,
        link0: "https://www.facebook.com/mehdi.ch.01",
        link1: "https://www.instagram.com/mehdi_ch_01/?hl=fr",
        link2: "https://www.facebook.com/hafsa.nbabat?mibextid=ZbWKwL",
        link3: "https://www.instagram.com/hafsaa_nb/",
      },
      {
        id: 6,
        name: "Farah halim",
        vice_name: "Meriem Mhaide",
        Text: "Chef Comité Projects",
        vice_Text: "Vice-Chef Comité Projects",
        Image: img1,
        Image_1: img66,
        Image_2: img555,

        link0: "https://www.facebook.com/farah.halim.1848?mibextid=ZbWKwL",
        link1: "https://instagram.com/farah_halim_?igshid=NTA5ZTk1NTc=",
        link2: "https://m.facebook.com/100054277097564/",
        link3: "https://instagram.com/m.merriii?igshid=YmMyMTA2M2Y=",
      },
      {
        id: 7,
        name: "Iman Barouki",
        vice_name: "Halima Saadia Khadim",
        Text: "Chef Comité Médiatisation",
        vice_Text: "Vice-Chef Comité Médiatisation",
        Image: img7,
        Image_1: img77,
        Image_2: img666,

        link0: "https://www.facebook.com/imanbarouki?mibextid=ZbWKwL",
        link1: "https://instagram.com/imvnbrk?igshid=NTA5ZTk1NTc=",
        link2: "https://www.facebook.com/halima.khadim.10",
        link3: "https://www.instagram.com/khadimhalima/?hl=fr",
      },
      {
        id: 8,
        name: "Doha Ouhmido",
        vice_name: "Ali Ouazzani",
        Text: "Chef Comité Forum",
        vice_Text: "Vice-Chef Comité Forum",
        Image: img6,
        Image_1: img77,
        Image_2: img777,

        link0: "https://www.facebook.com/doha.ouh?mibextid=LQQJ4d",
        link1: "https://www.instagram.com/doha_ouh?utm_source=qr",
        link2:
          "https://www.facebook.com/profile.php?id=100085299377313&mibextid=ZbWKwL",
        link3: "https://instagram.com/alie.l20?igshid=ZDdkNTZiNTM=",
      },
    ];
    var settings = {
      focusOnSelect: true,

      pauseOnHover: true,
      autoplay: false,
      dots: false,

      speed: 500,
      infinite: true,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            autoplay: true,
            autoplaySpeed: 2000,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            autoplaySpeed: 2000,
            dots: true,

            autoplay: true,

            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
          },
        },
        {
          breakpoint: 480,
          settings: {
            autoplay: true,
            dots: true,

            autoplaySpeed: 2000,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
          },
        },
      ],
    };
    return (
      <div className="container chefs-sct " id="chefs">
        <div className="service-title ">
          <h2>Chefs et vice-chefs</h2>
          <span className="line"></span>
        </div>

        <Slider {...settings}>
          {data.map((item, index) => (
            <div >
              <div className="row px-3">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                  <div className="card-x-1">
                    <div className="image">
                      <img src={item.Image} alt="" />
                    </div>
                    <div className="details">
                      <div className="center">
                        <h1>{item.name}</h1>
                        <p>{item.Text}</p>
                        <ul>
                          <li>
                            <a
                              href={item.link0}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="fa fa-facebook" aria-hidden="true"></i>
                            </a>
                          </li>

                          <li>
                            <a
                              href={item.link1}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="fa fa-instagram" aria-hidden="true"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 none-1">
                  <div className="card-x-2">
                    <div className="image">
                      <img src={item.Image_2} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                  <div className=" card-membre">
                    <div className="card-x-1">
                      <div className="image">
                        <img src={item.Image_1} alt="" />
                      </div>
                      <div className="details">
                        <div className="center">
                          <h1>{item.vice_name}</h1>
                          <p>{item.vice_Text}</p>
                          <ul>
                            <li>
                              <a
                                href={item.link2}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <i
                                  className="fa fa-facebook"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>

                            <li>
                              <a
                                href={item.link3}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <i
                                  className="fa fa-instagram"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
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
