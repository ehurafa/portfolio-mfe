import React, { useState, useEffect } from "react";

import classNames from 'classnames'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './App.css'

import Parcel from 'single-spa-react/parcel'

export default function App({ name }) {
  const [certificates, setCertificates] = useState([])

  useEffect(() => {

    const url = "https://gist.githubusercontent.com/ehurafa/eb6f6aa229d113dfe761f44ecca31274/raw/583a2daf4469fd339f4ef09dcea4341207294fca/mfe-certificates";
    async function fetchData() {
      const res = await fetch(url)
      const data = await res.json()
      setCertificates(data)
    }
    fetchData()

  }, [])

  return (
    <>
    <div className="certificates">
      <h2 className="main-title">Certificados</h2>
        <div className="wrapper">
          {certificates && certificates.map((certificate) => (
            <div key={certificate.title} className="card">
                <a href={certificate.url} target="_blank" className="icon">
                  <i className={ 
                    classNames(
                      { "fab": !certificate.prefix },
                      { [certificate.prefix]: certificate.prefix },
                      { [certificate.icon]: true }) 
                  }></i>
                </a>
                <h3><a href={certificate.url} target="_blank">{ certificate.title }</a></h3>

                <div className="about">
                  {certificate.start && <p>Iniciado em: { certificate.start }</p>}
                  {certificate.end && <p>Finalizado em: { certificate.end }</p>}
                  {certificate.school && <p>Instituição: { certificate.school }</p>}
                  {certificate.instructor && <p>Professor: { certificate.instructor }</p>}
                  {certificate.workload && <p>Carga horária: { certificate.workload }</p>}
                </div>
            </div>
          ))}
        </div>
    </div>
    <Parcel 
        config={() => System.import('@rg/react-notification-bar-parcel')}
        notification={{
            message: 'Aplicação React',
            background: 'bar--bg-blue1',
            icon: 'fab fa-react',
            iconAnimation: 'bar--animation-rotate'
          }}
        />
    </>
  );
}
