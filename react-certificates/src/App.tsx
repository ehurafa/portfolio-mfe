import React, { useState, useEffect } from "react";

import classNames from 'classnames'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './App.css'

export default function App({ name }) {
  const [certificates, setCertificates] = useState([])

  useEffect(() => {

    const url = "https://gist.githubusercontent.com/ehurafa/eb6f6aa229d113dfe761f44ecca31274/raw/cf73231b02ccb4b2b39c4b79671c9c7daa5ce5d8/mfe-certificates";
    async function fetchData() {
      const res = await fetch(url)
      const data = await res.json()
      setCertificates(data)
    }
    fetchData()

  }, [])

  return (
    <div className="certificates">
      <h2 className="main-title">Certificados</h2>
        <div className="wrapper">
          {certificates && certificates.map((certificate) => (
            <div key={certificate.title} className="card">
                <a href={certificate.url} target="_blank" className="icon"><i className={ classNames('fab', { [certificate.icon]: true }) }></i></a>
                <h3><a href={certificate.url} target="_blank">{ certificate.title }</a></h3>

                <div className="about">
                  {certificate.start && <p>Iniciado em: { certificate.start }</p>}
                  
                  <p>Finalizado em: { certificate.end }</p>
                  <p>Instituição: { certificate.scholl }</p>
                  <p>Professor: { certificate.instructor }</p>
                  <p>Carga horária: { certificate.instructor }</p>
                </div>
            </div>
          ))}
        </div>
    </div>
  );
}
