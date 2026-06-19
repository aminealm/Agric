import React from 'react'
import img4 from "./image/caravane2021.jpg"
import './evnmt.css'

import img2 from './image/forum-20eme.jpg'
function Evnmt() {
  return (
    <div id=''>
      <section id="home-articles" className="py-2">
    <div className="container1">
        <div className="page-container">
            <article className="card1">
                <div className="articles-container">
                    <article className="card2 test0">
                      <img src={img4} alt="" className="img1 img-about"/>
                      <div>
                        <div className="category category-social">Social</div>
                        <h3>
                          <a >Caravane Hayat Afdal</a>
                        </h3>
                        <p>L'Association Marocaine des Elèves Ingénieurs en Génie Rural organise une caravane dans sa 4éme Edition ... </p>
                      </div>
                    </article>
                    <article className="card2 bg-dark">
                      <div className="category category-forum">Forum</div>
                      <h3>
                        <a >Forum 21éme Edition</a>
                      </h3>
                      <p>En toile de fond des risques de manque d’eau extrême, dont plusieurs pays autour du monde font face ...</p>
                    </article>
                
                    
                   
                    <article className="card2 bg-primary">
                      <div className="category category-forum">FORUM</div>
                      <h3>
                        <a >Forum 19éme Edition</a>
                      </h3>
                      <p>Retour sur la 19ème édition du forum GR-Entreprises ayant eu lieu le 30 mars 2019 à l'Institut Agronomique et Vétérinaire Hassan II, ...</p>
                    </article>
                    <article className="card2 test1">
                      <div>
                        <div className="category category-forum">Forum</div>
                        <h3>
                          <a >Forum 20éme Edition</a>
                        </h3>
                        <p>L’Association Marocaine des Elèves Ingénieurs en Génie Rural –AMEIGR- a le plaisir de vous inviter à sa 20ème édition du forum GR-Entreprise qui sera présenté...</p>
                      </div>
                      <img src={img2} alt="" className="img1 img-about"/>
                    </article>
                  </div>
                  
    
            
            </article>
    
            <aside id="categories" className="card2">
                <h2>Categories</h2>
                <ul className="list">
                  <li><a href="#"><i className="fas fa-chevron-right"></i> Forum </a></li>
                  <li><a href="#"><i className="fas fa-chevron-right"></i> Social </a></li>
                  <li><a href="#"><i className="fas fa-chevron-right"></i> Parascolaire</a></li>
                  
                </ul>
            </aside>
            {/* <aside className="card2 bg-secondary">
              <h2>faire une donation -CIH- :</h2>
              <h3 className="btn btn-dark btn-block">230 810 2849797211011400 34</h3>
            </aside> */}

        </div>
        
        
    </div>
  </section>
    </div>
  )
}

export default Evnmt
