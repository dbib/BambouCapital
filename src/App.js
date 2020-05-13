import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Nav from './components/NavBar/Nav';
import Home from './components/Home/Home';
import Footer from './components/Fotter/Footer';
import Gallery from './components/Gallery/Gallery';
import Design from './components/Design/Design';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route exact path='/' render ={props => (
          <React.Fragment>
            <Home />
          </React.Fragment>
        )} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/design" component={Design} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
