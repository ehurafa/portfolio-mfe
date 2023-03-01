import React, { useState, useEffect } from "react";

import classNames from 'classnames'

import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'
import Project from './components/pages/Project'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'


import Parcel from 'single-spa-react/parcel'

export default function App({ name }) {

  return (
     <div className="costs_root">
      <Router>
        <Navbar />
        <Container customClass="min-height">
          <Routes>
            
              <Route path="/lab/costs/" element={<Home/>}/>
              <Route path="/lab/costs/company" element={<Company/>}/>
              <Route path="/lab/costs/contact" element={<Contact/>}/>
              <Route path="/lab/costs/newproject" element={<NewProject/>}/>
              <Route path="/lab/costs/projects" element={<Projects/>}/>
              <Route path="/lab/costs/project/:id" element={<Project/>}/>
            
          </Routes>
        </Container>
        <Footer />
      </Router>
      <Parcel 
          config={() => System.import('@rg/react-notification-bar-parcel')}
          notification={{
              message: 'Aplicação React',
              background: 'bar--bg-blue1',
              icon: 'fab fa-react',
              iconAnimation: 'bar--animation-rotate'
            }}
        />
     </div>
   
  );
}
