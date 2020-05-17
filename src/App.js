import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Nav from './components/NavBar/Nav';
import Home from './components/Home/Home';
import Footer from './components/Fotter/Footer';
import Gallery from './components/Gallery/Gallery';
import Design from './components/Design/Design';
import './App.css';

export default class App extends Component {
  state = {
    articles: [
      {
        id: 1,
        name: 'Bambou 1',
        description: 'Made in DRC',
        materials: ['bambou', 'colle', 'cloue']
      },
      {
        id: 2,
        name: 'Bambou 2',
        description: 'Made in DRC',
        materials: ['bambou', 'colle', 'cloue']
      },
      {
        id: 3,
        name: 'Bambou 3',
        description: 'Made in DRC',
        materials: ['bambou', 'colle', 'cloue']
      }
    ]
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route exact path='/' render ={props => (
            <React.Fragment>
              <Home />
            </React.Fragment>
          )} />
          <Route path="/gallery" render ={props => (
            <React.Fragment>
              <Gallery articles={this.state.articles} />
            </React.Fragment>
          )} />
          <Route path="/design" component={Design} />
          <Footer />
        </div>
      </Router>
    )
  }
}


//export default App;
