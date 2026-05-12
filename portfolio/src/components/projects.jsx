import React from 'react'
import './projects.css'

const projects = () => {
  return (
    <div className="album py-5 px-4" id='proj'>
      <h2 className="pb-2 border-bottom" id='project-title reveal'>Meus Projetos</h2>

      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

          {/* PRIMEIRO PROJETO */}
          <div className="col reveal">
            <div className="card shadow-sm">
              <img
                src="port-img.png"
                className="card-img-top images"
                height="225"
                style={{ objectFit: "cover" }}
              />

              <div className="card-body">
                <h4>PORTFOLIO</h4>

                <p className="card-text">
                  My personal portfolio, designed to showcase myself,
                  my projects, and technical skills. This project highlights my ability
                  to build dynamic, well-structured web applications.
                </p>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a
                      href="https://github.com/Arthur-Batista016/Portfolio.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SEGUNDO PROJETO */}
          <div className="col reveal">
            <div className="card shadow-sm">
              <img
                src="db-dash.webp"
                className="card-img-top images"
                height="225"
                style={{ objectFit: "cover" }}
              />

              <div className="card-body">
                <h4>DRAGON-BALL DASHBOARD</h4>

                <p className="card-text">
                  A Dragon Ball dashboard where users can search for
                  characters and instantly view their power level, a short description,
                  and an image through a clean and interactive interface.
                </p>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a
                      href="https://seu-link-aqui.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TERCEIRO PROJETO */}
          <div className="col reveal">
            <div className="card shadow-sm">
              <img
                src="mb.png"
                className="card-img-top images"
                height="225"
                style={{ objectFit: "cover" }}
              />

              <div className="card-body" id='mb'>
                <h4>MAJOR BEAT</h4>

                <p className="card-text">
                  “My Final Project (TCC) of my Technical course, Major Beat, is an app designed to help musicians find
                  new career opportunities and grow in the music industry.”
                </p>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a
                      href="https://github.com/Arthur-Batista016/MajorBeat.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* QUARTO PROJETO */}
          <div className="col reveal">
            <div className="card shadow-sm">
              <img
                id='greece'
                src="grecia-game.jpeg"
                className="card-img-top images"
                height="225"
                style={{ objectFit: "cover" }}
              />

              <div className="card-body">
                <h4>GAMIFICANDO-GRECIA</h4>

                <p className="card-text">
                  Industrial Fair 2024 game project. Built using .NET MAUI and Java Spring, this project is a
                  choice-based game that focuses on interactive storytelling and user decisions.
                </p>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a
                      href="https://github.com/Arthur-Batista016/Gamificando-Grecia.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* QUINTO PROJETO */}
          <div className="col reveal">
            <div className="card shadow-sm">
              <img
                src="ds.png"
                className="card-img-top images"
                height="225"
                style={{ objectFit: "cover" }}
              />

              <div className="card-body">
                <h4>DS-LIST</h4>

                <p className="card-text">
                  About DSList is a backend application built with Java Spring that provides
                  a RESTful API to manage and organize a personalized list of games.
                </p>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a
                      href="https://github.com/Arthur-Batista016/dslist.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div id='next-talk' className='reveal'>
        <a href="#proj">
          <img src="down-arrow.png" alt="" />
        </a>
      </div>
    </div>
  )
}

export default projects