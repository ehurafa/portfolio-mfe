import React, { useState, useEffect } from "react";

import classNames from 'classnames'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



export default function App({ name }) {
  const [certificates, setCertificates] = useState([])

  useEffect(() => {

    const url = "https://gist.githubusercontent.com/ehurafa/eb6f6aa229d113dfe761f44ecca31274/raw/cf73231b02ccb4b2b39c4b79671c9c7daa5ce5d8/mfe-certificates";

    let ignore = false

    // const fetchData = async () => {
    //   try {
    //     const response = await fetch(url);
    //     const json = await response.json();
    //     console.log(json);
    //     setCertificates(json)
    //   } catch (error) {
    //     console.log("error", error);
    //   }
    // };

    async function fetchData() {
      const res = await fetch(url)
      const data = await res.json()
      setCertificates(data)
    }
    fetchData()

  }, [])

  return (
    <div>
      <ul>
        {certificates && certificates.map((certificate) => (
          <li key={certificate.title}>{ certificate.title }
          
          
            <a href="#"><i className={ classNames('fab', { [certificate.icon]: true }) }></i></a>
          </li>
        ))}
      </ul>
    </div>
  );
}
