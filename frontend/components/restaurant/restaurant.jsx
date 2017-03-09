import React from 'react';
import { Link } from 'react-router';
import MapContainer from '../map/map_container';
import {getArticle} from './../../util/article_api_util';
import RawHtml from "react-raw-html";

class Restaurant extends React.Component{
  constructor(props){
    super(props);
    this.state = { article: {} };
  }

  componentDidMount(){
    let that = this;
    getArticle(this.props.params.id).then(data => that.setState({article: data}));
  }

  componentWillReceiveProps(){
    let that = this;
    getArticle(this.props.params.id).then(data => that.setState({article: data}));
  }

  render(){
    RawHtml.addTag("mycooltag");
    return (
      <div className="main">
        <div className="main-header">
          <ul className="main-header-nav">
            <li><a href="#">Taipei</a></li>
            <li><a href="#">Downtown Los Angeles</a></li>
          </ul>
        </div>
        <div className="main-body">
          <MapContainer />
          <div className="article-text">
            <p className="article-title">{this.state.article.title}</p>
            <div className="article-body">
              <RawHtml.mycooltag>{this.state.article.article}</RawHtml.mycooltag>
            </div>
          </div>
        </div>
        <footer className="footer">

        </footer>
      </div>
    );
  }
}

export default Restaurant;
