import './App.css';
import Navbar from './components/Navbar';
import News from './components/News'
import About from './components/About'
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <News />
        <About />
      </div>
    )
  }
}
