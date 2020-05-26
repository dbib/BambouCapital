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
import './App.css';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {articles: []}
  }

  componentDidMount() {
    axios.get('http://localhost:5000/articles/')
      .then(response => {
        this.setState({articles: response.data });
      })
      .catch( (error) => {
        console.log(error);
      })
  }

  //Delete Item
  deleteItem = (id) => {
    axios.delete('http://localhost:5000/articles/'+id)
      .then(res => console.log(res.data));
    this.setState({
      articles: this.state.articles.filter(el => el._id !== id)
    })
    console.log(`product deleted`)
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
          <Route path="/admingallery" render ={props => (
            <React.Fragment>
              <AdminGallery articles={this.state.articles} deleteItem ={this.deleteItem} />
            </React.Fragment>
          )} />
          <Route path="/design" component={Design} />
          <Route path="/article/add" component={CreateItem} />
          <Route path="/article/edit/:id" component={EditItem} />
          <Footer />
        </div>
      </Router>
    )
  }
}


//export default App;
