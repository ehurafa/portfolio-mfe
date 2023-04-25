import React, { useState, useEffect } from "react";

import classNames from 'classnames'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './App.css'

import Card from './components/Card'

import Parcel from 'single-spa-react/parcel'

export default function App({ name }) {
  const [certificates, setCertificates] = useState([])

  useEffect(() => {

    const url = "https://gist.githubusercontent.com/ehurafa/eb6f6aa229d113dfe761f44ecca31274/raw/d48b25e237706e83d8d22fd6a8711126b821bb05/mfe-certificates";
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
            <Card certificate={certificate} />
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
