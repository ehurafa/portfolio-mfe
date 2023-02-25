import React from 'react'
import classNames from 'classnames'
import './Card.css'

const Card = ({ certificate }) => {
  return (
    <div key={certificate.title} className="block">
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
  )
}

export default Card