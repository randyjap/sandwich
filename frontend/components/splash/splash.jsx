import React from 'react';
import { Link } from 'react-router';
import Slider from 'react-slick';
import {getArticles} from './../../util/article_api_util';
import RawHtml from "react-raw-html";

class Splash extends React.Component{
  constructor(props){
    super(props);
    this.redirect = this.redirect.bind(this);
    this.state = { articles: {} };
  }

  redirect(route){
    this.props.router.replace(route);
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

    const SliderComponent = (key) => (
      <Slider {...settings}>
        <div><img onClick={() => this.redirect(`restaurants/${key}`)} src="http://res.cloudinary.com/dkympkwdz/image/upload/v1489010716/example_pqoqsl.jpg"/></div>
        <div><img onClick={() => this.redirect(`restaurants/${key}`)} src="http://res.cloudinary.com/dkympkwdz/image/upload/v1489010716/example_pqoqsl.jpg"/></div>
        <div><img onClick={() => this.redirect(`restaurants/${key}`)} src="http://res.cloudinary.com/dkympkwdz/image/upload/v1489010716/example_pqoqsl.jpg"/></div>
        <div><img onClick={() => this.redirect(`restaurants/${key}`)} src="http://res.cloudinary.com/dkympkwdz/image/upload/v1489010716/example_pqoqsl.jpg"/></div>
        <div><img onClick={() => this.redirect(`restaurants/${key}`)} src="http://res.cloudinary.com/dkympkwdz/image/upload/v1489010716/example_pqoqsl.jpg"/></div>
        <div><img onClick={() => this.redirect(`restaurants/${key}`)} src="http://res.cloudinary.com/dkympkwdz/image/upload/v1489010716/example_pqoqsl.jpg"/></div>
      </Slider>
    );

    let mainArticle;
    let subArticles;
    let keys = Object.keys(this.state.articles);
    if (keys.length > 0) {
      mainArticle = keys.slice(0,1).map(key => {
        RawHtml.addTag("mycooltag");
        return (
          <div key={key} className="article main-article">
            {SliderComponent(key)}
            <div className="main-carousel-bottom">
              <div className="article-text">
                <p className="article-title">{this.state.articles[key].title}</p>
                <div className="article-body">
                  <RawHtml.mycooltag>{this.state.articles[key].article}</RawHtml.mycooltag>
                </div>
              </div>
              <img src="http://res.cloudinary.com/dkympkwdz/image/upload/v1488928247/example_pkzok0.png" />
            </div>
          </div>
        );
      });
    }

    if (keys.length > 1) {
      subArticles = keys.slice(1).map(key => {
        RawHtml.addTag("mycooltag");
        return (
          <div key={key} className="article two-column-article">
            {SliderComponent(key)}
            <div className="main-carousel-bottom">
              <div className="article-text">
                <p className="article-title">{this.state.articles[key].title}</p>
                <div className="article-body">
                  <RawHtml.mycooltag>{this.state.articles[key].article}</RawHtml.mycooltag>
                </div>
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
            <li><a href="#">Taipei</a></li>
            <li><a href="#">Downtown Los Angeles</a></li>
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
