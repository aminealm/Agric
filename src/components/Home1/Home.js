import React from 'react'
import img1 from "./backgrounds/forum21.JPG"
import img3 from "./backgrounds/orphelin2022.JPG"
import img4 from "./backgrounds/caravane2021.jpg"
import img5 from "./backgrounds/caravane2021.jpg"


function Home() {
  return (
    <div id='evnmt-home'>
      <React.Fragment>
      <div id="carouselExampleCaptions" class="carousel  carousel-evnt slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button> */}
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="5000">
      <img src={img1} class="d-block w-100 img-about" alt={img1}/>
      <div class="carousel-caption  d-md-block">
        <h4>Forum GR-ENTREPRISES 21édition</h4>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={img3} class="d-block w-100 img-about" alt={img1}/>
      <div class="carousel-caption d-md-block">
        <h4>Acceuillir Des Enfants Orphelins</h4>
      </div>
    </div>
    <div class="carousel-item">
      <img src={img4} class="d-block w-100 img-about" alt={img1}/>
      <div class="carousel-caption  d-md-block">
        <h4>Caravane Hayat Afdal - 2021</h4>
      </div>
    </div>
    {/* <div class="carousel-item">
      <img src={img4} class="d-block w-100 img-about" alt={img1}/>
      <div class="carousel-caption d-none d-md-block">
        <h4>Caravane Hayat Afdal - 2021</h4>
      </div>
    </div> */}
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</React.Fragment>

    </div>
  )
}

export default Home
