import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from './Header';
import Feed from './Feed';
import NewsDetail from './NewsDetail'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      articles: [],
    }
    this.getCategory = this.getCategory.bind(this);
  }

  componentDidMount(){
    const urlFetch = fetch('https://newsapi.org/v2/top-headlines?country=id&apiKey=8b8fa4f1febe4559866b4b58d1711586')
    urlFetch.then(res =>{
      if(res.status === 200){
        return res.json()
      }
    }).then(resJson => {
      this.setState({
        articles: resJson.articles
      })
    })
  }

  getCategory(cat){
    const category = '&category=' + cat
    const url = 'https://newsapi.org/v2/top-headlines?country=id&apiKey=8b8fa4f1febe4559866b4b58d1711586' + category;
    const urlFetch = fetch(url)
    urlFetch.then(res => {
      if (res.status === 200){
        return res.json()
      }
    }).then(resJson => {
      this.setState = ({articles: resJson.articles})
    })
  }

  render() {
    return (
      <div className="container">
        <Header/>
        <Switch>
          <Route exact path="/" render={ (props) => <Feed articles= {this.state.articles} />}/>
          <Route path="/:handle" render={(props) => <NewsDetail {...props} articles= {this.state.articles} />}/>
        </Switch>
      </div>
    );
  }
}

export default App;
