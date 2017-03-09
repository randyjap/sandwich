import React from 'react';
import { Link } from 'react-router';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import Slider from 'react-slick';

class Splash extends React.Component{
  constructor(props){
    super(props);
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
          <div className="article main-article">
            {SliderComponent}
            <div className="main-carousel-bottom">
              <div className="article-text">
                <p className="article-title">Si Chuan Restaurant</p>
                <p className="article-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                  non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <img src="http://res.cloudinary.com/dkympkwdz/image/upload/v1488928247/example_pkzok0.png" />
            </div>
          </div>
          <div className="article two-column-article">
            {SliderComponent}
            <div className="main-carousel-bottom">
              <div className="article-text">
                <p className="article-title">Si Chuan Restaurant</p>
                <p className="article-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                  non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
          <div className="article two-column-article">
            {SliderComponent}
            <div className="main-carousel-bottom">
              <div className="article-text">
                <p className="article-title">Si Chuan Restaurant</p>
                <p className="article-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                  non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
          <div className="article two-column-article">
            {SliderComponent}
            <div className="main-carousel-bottom">
              <div className="article-text">
                <p className="article-title">Si Chuan Restaurant</p>
                <p className="article-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                  non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">

        </footer>
      </div>
    );
  }
}

export default Splash;
