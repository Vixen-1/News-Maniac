import './App.css';
import Navbar from './components/Navbar'
import News from './components/News'
import React, { Component } from 'react'
import{BrowserRouter, Routes, Route} from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          {/* <News country='in' category='general' /> */}
          <Routes>
            <Route exact path="/" element = {<News key='general' country='in' category='general' />}  />
            <Route exact path="/General" element = {<News key='general' country='in' category='general' heading='general updates' />} />
            <Route exact path="/Business" element = {<News key='business' country='in' category='business' heading='Business updates' />} />
            <Route exact path="/Entertainment" element = {<News key='entertainment' country='in' category='entertainment' heading='Entertainment updates' />} />
            <Route exact path="/Health" element = {<News key='health' country='in' category='health' heading='Health updates' />} />
            <Route exact path="/Science" element = {<News key='science' country='in' category='science' heading='Science updates' />} />
            <Route exact path="/Sports" element = {<News key='sports' country='in' category='sports' heading='Sports updates' />} />
            <Route exact path="/Technology" element = {<News key='technology' country='in' category='technology' heading='Technology updates' />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}
