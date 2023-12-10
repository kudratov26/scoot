import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar/Navbar'
import { Footer } from './components/layout/Footer/Footer'
import { Home } from './pages/home/Home'
import { About } from './pages/about/About'
import { Careers } from './pages/careers/Careers'
import { Location } from './pages/location/Location'

export const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/careers">
          <Careers />
        </Route>
        <Route path="/location">
          <Location />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}