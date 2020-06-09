import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Nav from './components/NavBar/Nav';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Design from './components/Design/Design';
import CreateItem from './components/Admin/CreateItem';
import AdminGallery from './components/Admin/AdminGallery';
import EditItem from './components/Admin/EditItem';
import SingleItem from './components/Gallery/SingleItem';
import AdminLogin from './components/Admin/AdminLogin';
import AdminMain from './components/Admin/AdminMain';
import AdminResetPass from './components/Admin/AdminResetPass';
import AdminRootSettings from './components/Admin/AdminRootSettings';
import AdminRegister from './components/Admin/AdminRegister';

import './App.css';
import { Provider } from 'react-redux';
import store from './store';

export default class App extends Component {
  
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div className="App">
            <Nav />
            <Route exact path='/' render ={props => (
              <React.Fragment>
                <Home />
              </React.Fragment>
            )} />
            <Route path="/gallery" render ={props => (
              <React.Fragment>
                <Gallery />
              </React.Fragment>
            )} />
            <Route path="/admingallery" render ={props => (
              <React.Fragment>
                <AdminGallery />
              </React.Fragment>
            )} />
            <Route path="/design" component={Design} />
            <Route path="/article/add" component={CreateItem} />
            <Route path="/article/edit/:id" component={EditItem} />
            <Route path="article/:id" component={SingleItem} />
            <Route path="/adminlogin" component={AdminLogin} />
            <Route path="/adminmain" component={AdminMain} />
            <Route path="/adminresetpass" component={AdminResetPass} />
            <Route path="/adminrootsettings" component={AdminRootSettings}/>
            <Route path="/adminregister" component={AdminRegister} />
            <Footer />
          </div>
        </Provider>
      </Router>
    )
  }
}


//export default App;
