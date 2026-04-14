import React from 'react'
import './projects.css'


const projects = () => {
  return (
    <div class="album py-5 px-4" id='proj'>
        <h2 class="pb-2 border-bottom" id='project-title reveal'>Meus Projetos</h2>
      <div class="container" >
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

           {/*PRIMEIRO PROJETO*/}
          <div class="col reveal">
            <div class="card shadow-sm">
              <img 
                src="/port-img.png" 
                className="card-img-top images" 
                height="225" 
                style={{ objectFit: "cover" }} 
              />
                <div class="card-body">
                  <h4>PORTFOLIO</h4>
                  <p class="card-text">My personal portfolio, designed to showcase myself, 
                    my projects, and technical skills. This project highlights my ability 
                    to build dynamic, well-structured web applications.</p>
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
          <div class="col reveal">
            <div className="card shadow-sm">
               <img 
                src="/db-dash.webp" 
                className="card-img-top images" 
                height="225" 
                style={{ objectFit: "cover" }} 
              />
              <div class="card-body">
                <h4>DRAGON-BALL DASHBOARD</h4>
                <p class="card-text">A Dragon Ball dashboard where users can search for 
                  characters and instantly view their power level, a short description, 
                  and an image through a clean and interactive interface.</p>
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
          <div class="col reveal">
            <div class="card shadow-sm">
               <img 
                src="/mb.png" 
                className="card-img-top images" 
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
          <div class="col reveal">
            <div class="card shadow-sm">
               <img 
                id='greece'
                src="/grecia-game.jpeg" 
                className="card-img-top images" 
                height="225" 
                style={{ objectFit: "cover" }} 
              />
              <div class="card-body">
                <h4>GAMIFICANDO-GRECIA</h4>
                <p class="card-text">Industrial Fair 2024 game project. Built using .NET MAUI and Java Spring, this project is a 
                  choice-based game that focuses on interactive storytelling and user decisions.</p>
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
          <div class="col reveal">
            <div class="card shadow-sm">
               <img 
                src="/ds.png" 
                className="card-img-top images" 
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