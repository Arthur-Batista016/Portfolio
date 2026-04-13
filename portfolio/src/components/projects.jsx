import React from 'react'
import './projects.css'


const projects = () => {
  return (
    <div class="album py-5 px-4" id='proj'>
        <h2 class="pb-2 border-bottom" id='project-title'>Meus Projetos</h2>
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

           {/*PRIMEIRO PROJETO*/}
          <div class="col">
            <div class="card shadow-sm">
              <img 
                src="/port-img.png" 
                class="card-img-top" 
                height="225" 
                style={{ objectFit: "cover" }} 
              />
                <div class="card-body">
                  <h4>PORTFOLIO</h4>
                  <p class="card-text">My personal portfolio, designed to showcase myself, my projects 
                    and technical skills. This project reflects my ability to build dynamic and well-structured web applications 
                    while maintaining a strong focus on design and usability.</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
 {/*--------------------------------------------------------------------------------------------------------------------*/}
            {/*SEGUNDO PROJETO*/}
          <div class="col">
            <div class="card shadow-sm">
              <svg aria-label="Placeholder: Thumbnail" class="bd-placeholder-img card-img-top" 
              height="225" preserveAspectRatio="xMidYMid slice" role="img" width="100%" 
              xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="#55595c"></rect>
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
              </svg>
              <div class="card-body">
                <h4>DRAGON-BALL DASHBOARD</h4>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in 
                  to additional content. This content is a little bit longer.</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
{/*--------------------------------------------------------------------------------------------------------------------*/}




          {/*PRIMEIRO PROJETO*/}
          <div class="col">
            <div class="card shadow-sm">
               <img 
                src="/mb.png" 
                class="card-img-top" 
                height="225" 
                style={{ objectFit: "cover" }} 
              />
              <div class="card-body">
                <h4>MAJOR BEAT</h4>
                <p class="card-text">“My Final Project (TCC), Major Beat, is an app designed to help musicians find
                   new career opportunities and grow in the music industry.”</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
 {/*--------------------------------------------------------------------------------------------------------------------*/}
            {/*SEGUNDO PROJETO*/}
          <div class="col">
            <div class="card shadow-sm">
              <svg aria-label="Placeholder: Thumbnail" class="bd-placeholder-img card-img-top" 
              height="225" preserveAspectRatio="xMidYMid slice" role="img" width="100%" 
              xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="#55595c"></rect>
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
              </svg>
              <div class="card-body">
                <h4>GAMIFICANDO-GRECIA</h4>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in 
                  to additional content. This content is a little bit longer.</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
{/*--------------------------------------------------------------------------------------------------------------------*/}



            {/*TERCEIRO PROJETO*/}
          <div class="col">
            <div class="card shadow-sm">
               <img 
                src="/ds.png" 
                class="card-img-top" 
                height="225" 
                style={{ objectFit: "cover" }} 
              />
              <div class="card-body">
                <h4>DS-LIST</h4>
                <p class="card-text">About DSList is a backend application built with Java Spring that provides 
                  a RESTful API to manage and organize a personalized list of games. </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
{/*--------------------------------------------------------------------------------------------------------------------*/}

        

        </div>
      </div>
    </div>
  )
}

export default projects