import React, { useRef } from 'react'
import './contactme.css'
import emailjs from '@emailjs/browser'

const Contactme = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_bxnimxs',
      'template_fyhbg5s',
      form.current,
      'nZsbmbWhcdR-MHsIS'
    )
    .then(() => {

      alert('Mensagem enviada com sucesso! 🚀')

      // limpa formulário
      form.current.reset()

    })
    .catch((error) => {

      console.log(error)

      alert('Erro ao enviar mensagem ❌')

    })
  }

  return (
    <div className="container d-flex justify-content-end" id='items-contact'>

      <div className="col-md-7 col-lg-8">

        <h1 className="mb-3 reveal">
          Vamos Conversar !
        </h1>

        <form ref={form} onSubmit={sendEmail}>

          <div className="row g-3">

            <div className="col-sm-6 reveal">

              <label className="form-label">
                Nome
              </label>

              <input
                type="text"
                name="user_name"
                className="form-control inputs"
                required
              />

            </div>

            <div className="col-sm-6 reveal">

              <label className="form-label">
                Telefone
              </label>

              <input
                type="tel"
                name="user_phone"
                className="form-control inputs"
                placeholder="Ex: (11) 99999-9999"
                required
              />

            </div>

            <div className="col-12 reveal">

              <label className="form-label">
                Email
              </label>

              <input
                type="email"
                name="user_email"
                className="form-control inputs"
                placeholder="Ex: you@example.com"
                required
              />

            </div>

            <div className="col-12 reveal">

              <label className="form-label">
                Mensagem
              </label>

              <textarea
                name="message"
                className="form-control inputs"
                id='mensagem'
                rows="1"
                onInput={(e) => {
                  e.target.style.height = "auto";
                  e.target.style.height = e.target.scrollHeight + "px";
                }}
                required
              ></textarea>

            </div>

            <div className="col-12 reveal">

              <button
                type="submit"
                className="w-100 btn btn-primary btn-lg"
              >
                Enviar
              </button>

            </div>

          </div>

        </form>

      </div>

    </div>
  )
}

export default Contactme