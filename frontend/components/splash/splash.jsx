import React from 'react';
import { Link } from 'react-router';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import Carousel from 'nuka-carousel';

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
      slidesToScroll: 1
    };

    return (
      <div className="main">
        <Paper zDepth={1} className="main-carousel">
          <Carousel>
            <img onClick={() => console.log("click")} className="carousel-image" src="http://res.cloudinary.com/dkympkwdz/image/upload/v1488929343/screenshot_hctzhq.jpg"/>
            <img onClick={() => console.log("click")} className="carousel-image" src="http://res.cloudinary.com/dkympkwdz/image/upload/v1488929343/screenshot_hctzhq.jpg"/>
            <img onClick={() => console.log("click")} className="carousel-image" src="http://res.cloudinary.com/dkympkwdz/image/upload/v1488929343/screenshot_hctzhq.jpg"/>
            <img onClick={() => console.log("click")} className="carousel-image" src="http://res.cloudinary.com/dkympkwdz/image/upload/v1488929343/screenshot_hctzhq.jpg"/>
            <img onClick={() => console.log("click")} className="carousel-image" src="http://res.cloudinary.com/dkympkwdz/image/upload/v1488929343/screenshot_hctzhq.jpg"/>
            <img onClick={() => console.log("click")} className="carousel-image" src="http://res.cloudinary.com/dkympkwdz/image/upload/v1488929343/screenshot_hctzhq.jpg"/>
          </Carousel>
          <div className="main-carousel-bottom">
            <div className="article">
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
        </Paper>
        <div className="two-column">
          <div className="article-tile">
            <Paper zDepth={1} className="carousel-tile">
              <Carousel>
                <img onClick={() => console.log("click")} className="carousel-image" src="http://res.cloudinary.com/dkympkwdz/image/upload/v1488929343/screenshot_hctzhq.jpg"/>
                <img onClick={() => console.log("click")} className="carousel-image" src="http://res.cloudinary.com/dkympkwdz/image/upload/v1488929343/screenshot_hctzhq.jpg"/>
                <img onClick={() => console.log("click")} className="carousel-image" src="http://res.cloudinary.com/dkympkwdz/image/upload/v1488929343/screenshot_hctzhq.jpg"/>
                <img onClick={() => console.log("click")} className="carousel-image" src="http://res.cloudinary.com/dkympkwdz/image/upload/v1488929343/screenshot_hctzhq.jpg"/>
                <img onClick={() => console.log("click")} className="carousel-image" src="http://res.cloudinary.com/dkympkwdz/image/upload/v1488929343/screenshot_hctzhq.jpg"/>
                <img onClick={() => console.log("click")} className="carousel-image" src="http://res.cloudinary.com/dkympkwdz/image/upload/v1488929343/screenshot_hctzhq.jpg"/>
              </Carousel>
              <div className="main-carousel-bottom">
                <div className="article">
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
            </Paper>
          </div>
          <div className="article-tile">
            <Paper zDepth={1} className="carousel-tile">
              <Carousel>
                <img onClick={() => console.log("click")} className="carousel-image" src="http://res.cloudinary.com/dkympkwdz/image/upload/v1488929343/screenshot_hctzhq.jpg"/>
                <img onClick={() => console.log("click")} className="carousel-image" src="http://res.cloudinary.com/dkympkwdz/image/upload/v1488929343/screenshot_hctzhq.jpg"/>
                <img onClick={() => console.log("click")} className="carousel-image" src="http://res.cloudinary.com/dkympkwdz/image/upload/v1488929343/screenshot_hctzhq.jpg"/>
                <img onClick={() => console.log("click")} className="carousel-image" src="http://res.cloudinary.com/dkympkwdz/image/upload/v1488929343/screenshot_hctzhq.jpg"/>
                <img onClick={() => console.log("click")} className="carousel-image" src="http://res.cloudinary.com/dkympkwdz/image/upload/v1488929343/screenshot_hctzhq.jpg"/>
                <img onClick={() => console.log("click")} className="carousel-image" src="http://res.cloudinary.com/dkympkwdz/image/upload/v1488929343/screenshot_hctzhq.jpg"/>
              </Carousel>
              <div className="main-carousel-bottom">
                <div className="article">
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
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;
