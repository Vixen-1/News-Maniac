import './App.css';
import Navbar from './components/Navbar'
import News from './components/News'
import React, {useState} from 'react'
import{BrowserRouter, Routes, Route} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  // apikey = process.env.NEWS_API
  const [progress, setProgress] = useState(0);
    return (
        <div>
          <BrowserRouter>
            <Navbar />
            <LoadingBar
              color='white'
              progress={progress}
            />
            {/* <News setProgress={setProgress} setProgress={setProgress} setProgress={setProgress}country='in' category='general' /> */}
            <Routes>
              <Route exact path="/" element = {<News setProgress={setProgress} key='general' country='in' category='general' />}  />
              <Route exact path="/General" element = {<News setProgress={setProgress} key='general' country='in' category='general' />} />
              <Route exact path="/Business" element = {<News setProgress={setProgress} key='business' country='in' category='business' />} />
              <Route exact path="/Entertainment" element = {<News setProgress={setProgress} key='entertainment' country='in' category='entertainment' />} />
              <Route exact path="/Health" element = {<News setProgress={setProgress} key='health' country='in' category='health' />} />
              <Route exact path="/Science" element = {<News setProgress={setProgress} key='science' country='in' category='science' />} />
              <Route exact path="/Sports" element = {<News setProgress={setProgress} key='sports' country='in' category='sports' />} />
              <Route exact path="/Technology" element = {<News setProgress={setProgress} key='technology' country='in' category='technology' />} />
            </Routes>
          </BrowserRouter>
        </div>
    )
}
export default App;