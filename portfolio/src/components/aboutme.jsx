import React from 'react'
import './aboutme.css'

const aboutme = () => {
  return (
  <div>
    <section className="about-section container col-xxl-8 px-4 py-5">

  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">

    {/* FOTO */}
    <div className="col-10 col-sm-8 col-lg-6">
      <img
        src="/sua-foto.png"
        className="d-block mx-lg-auto img-fluid about-img"
        alt="Arthur Batista"
      />
    </div>

    {/* TEXTO */}
    <div className="col-lg-6">

       <h2 class="pb-2 border-bottom academic-text reveal">Sobre Mim</h2>

      <p className="lead about-description">
        Desenvolvedor Full Stack com 3 anos de experiência em estudos e desenvolvimento de projetos, com foco principal em Back-End utilizando Java (Spring Boot) e C#. Possuo experiência na criação de APIs REST, aplicações Web responsivas com Angular e aplicativos mobile utilizando .NET MAUI.

Tenho conhecimentos em SQL Server, MongoDB, Git/GitHub, Azure, autenticação JWT e boas práticas de desenvolvimento, sempre buscando criar aplicações modernas, organizadas e eficientes.

Atualmente atuo como Jovem Aprendiz de TI na Arius Sistemas, trabalhando com suporte técnico em PDVs, acesso remoto via TeamViewer, utilização de Linux e SQL para manutenção e ajustes em sistemas utilizados pelos clientes.
      </p>

      <div className="d-grid gap-2 d-md-flex justify-content-md-start">

        <a
          href="#proj"
          className="btn btn-primary btn-lg px-4 me-md-2"
        >
          Ver Projetos
        </a>

        <a
          href="#contact"
          className="btn btn-outline-light btn-lg px-4"
        >
          Contato
        </a>

      </div>

    </div>

  </div>

</section>
  </div>
  )
}

export default aboutme