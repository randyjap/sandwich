import React from 'react';
import { Link } from 'react-router';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import Slider from 'react-slick';
import {getArticles} from './../../util/article_api_util';

class Splash extends React.Component{
  constructor(props){
    super(props);
    this.state = { articles: {} };
  }

  componentDidMount(){
    let that = this;
    getArticles().then(data => that.setState({articles: data}));
  }

  render(){
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    };

    const SliderComponent = (
      <Slider {...settings}>
        <div><img src="http://res.cloudinary.com/dkympkwdz/image/upload/v1489010716/example_pqoqsl.jpg"/></div>
        <div><img src="http://res.cloudinary.com/dkympkwdz/image/upload/v1489010716/example_pqoqsl.jpg"/></div>
        <div><img src="http://res.cloudinary.com/dkympkwdz/image/upload/v1489010716/example_pqoqsl.jpg"/></div>
        <div><img src="http://res.cloudinary.com/dkympkwdz/image/upload/v1489010716/example_pqoqsl.jpg"/></div>
        <div><img src="http://res.cloudinary.com/dkympkwdz/image/upload/v1489010716/example_pqoqsl.jpg"/></div>
        <div><img src="http://res.cloudinary.com/dkympkwdz/image/upload/v1489010716/example_pqoqsl.jpg"/></div>
      </Slider>
    );

    let mainArticle;
    let subArticles;
    let keys = Object.keys(this.state.articles);
    if (keys.length > 0) {
      mainArticle = keys.slice(0,1).map(key => {
        return (
          <div className="article main-article">
            {SliderComponent}
            <div className="main-carousel-bottom">
              <div className="article-text">
                <p className="article-title">{this.state.articles[key].title}</p>
                <p className="article-body">
                  {this.state.articles[key].article}
                </p>
              </div>
              <img src="http://res.cloudinary.com/dkympkwdz/image/upload/v1488928247/example_pkzok0.png" />
            </div>
          </div>
        );
      });
    }

    if (keys.length > 1) {
      subArticles = keys.slice(1).map(key => {
        return (
          <div className="article two-column-article">
            {SliderComponent}
            <div className="main-carousel-bottom">
              <div className="article-text">
                <p className="article-title">{this.state.articles[key].title}</p>
                <p className="article-body">
                  {this.state.articles[key].article}
                </p>
              </div>
            </div>
          </div>
        );
      });
    }

    return (
      <div className="main">
        <div className="main-header">
          <ul className="main-header-nav">
            <li><a href="#">Restaurants</a></li>
            <li><a href="#">Guides</a></li>
            <li><a href="#">Style</a></li>
            <li><a href="#">Galleries</a></li>
            <li><a href="#">Lifestyle</a></li>
            <li><a href="#">Videos</a></li>
          </ul>
        </div>
        <div className="main-body">
          {mainArticle}
          {subArticles}
        </div>
        <footer className="footer">

        </footer>
      </div>
    );
  }
}

export default Splash;
