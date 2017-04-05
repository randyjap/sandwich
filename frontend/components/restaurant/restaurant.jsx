import React from 'react';
import { Link } from 'react-router';
import MapContainer from '../map/map_container';
import {getArticle} from './../../util/article_api_util';
import RawHtml from "react-raw-html";
var ReactDisqusThread = require('react-disqus-thread');

class Restaurant extends React.Component{
  constructor(props){
    super(props);
    this.state = { article: {} };
    this.renderTags = this.renderTags.bind(this);
    this.loadDisqus = this.loadDisqus.bind(this);
  }

  renderTags(){
    let featured = this.state.article.featured;
    let category = this.state.article.category;
    if (featured) {
      featured = (
        <li><a href="#">Featured</a></li>
      );
    }

    if (category) {
      category = (
        <li><a href="#">{this.state.article.category}</a></li>
      );
    }

    return (
      <ul>
        {featured}
        {category}
      </ul>
    );

  }

  componentDidMount(){
    let that = this;
    getArticle(this.props.params.id).then(data => that.setState({article: data}));
    this.loadDisqus();
  }

  loadDisqus(){
    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
    /*
    */
    let PAGE_URL = "test";
    let PAGE_IDENTIFIER = "test"

    var disqus_config = function () {
      this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    (function() { // DON'T EDIT BELOW THIS LINE
      var d = document, s = d.createElement('script');
      s.src = 'https://http-sandwich1-herokuapp-com.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    })();
  }

  componentWillReceiveProps(){
    let that = this;
    getArticle(this.props.params.id).then(data => that.setState({article: data}));
  }

  render(){
    let center = {lat: this.state.article.lat, lng: this.state.article.lng};
    RawHtml.addTag("mycooltag");
    return (
      <div className="sticky_footer body">
      	<div className="wrapper">
      		<header>
      			<div id="header">
      				<section className="top">
      					<div className="inner">
      						<div className="block_top_menu">
      							<nav>
      							</nav>
      						</div>

      						<div className="block_search">
      							<input type="text" className="w_focus_mark"/>
      						</div>

      						<div className="block_top_social">
      							<ul className="general_social_1">
      								<li><a target="_blank" href="https://twitter.com/tasteterminal" className="social_1">Twitter</a></li>
      								<li><a target="_blank" href="https://www.facebook.com/tasteterminal/" className="social_2">Facebook</a></li>
      								<li><a target="_blank" href="https://vimeo.com/tasteterminal/" className="social_3">Vimeo</a></li>
      								<li><a target="_blank" href="https://www.instagram.com/secretstan/" className="social_5">Instagram</a></li>
      							</ul>
      						</div>

      						<div className="clearboth"></div>
      					</div>
      				</section>

      				<section className="middle">
      					<div className="inner">

      						<h1 className="logo">
                    <img src="http://res.cloudinary.com/dkympkwdz/image/upload/v1490186761/ad_banner_hhhwse.png"/>
                    Taste Terminal
                  </h1>
      					</div>
      				</section>

      				<section className="bottom">
      					<div className="inner">
      						<div className="block_secondary_menu">
      							<nav>
      								<ul>
      									<li data-content="los-angeles"><a href="#">DOWNTOWN LA</a><div className="tail"></div></li>
      									<li data-content="taipei"><a href="#">TAIPEI</a><div className="tail"></div></li>
      									<li data-content="sf"><a href="#">SAN FRANCISCO</a><div className="tail"></div></li>
      								</ul>
      							</nav>

      							<div className="dropdown" data-menu="los-angeles">
      								<div className="image_type_1">
      									<div className="image">
      										<a href="#"><img src="http://res.cloudinary.com/dkympkwdz/image/upload/c_scale,h_496,w_671/v1489010716/example_pqoqsl.jpg" alt=""/><span className="hover"></span></a>
      									</div>

      									<div className="title"><a href="#">Sed ut perspiciatis unde omnis iste.</a></div>
      								</div>

      								<div className="image_type_1">
      									<div className="image">
      										<a href="#"><img src="http://res.cloudinary.com/dkympkwdz/image/upload/c_scale,h_496,w_671/v1489010716/example_pqoqsl.jpg" alt=""/><span className="hover"></span></a>
      									</div>

      									<div className="title"><a href="#">Unde omnis iste natus sit volup.</a></div>
      								</div>

      								<div className="menu_type_2">
      									<div className="title">Featured posts</div>

      									<ul>
      										<li><a href="#">Sed ut perspiciatis unde omnis iste natus sit volup.</a></li>
      										<li><a href="#">Omnis iste natus sit volup.</a></li>
      										<li><a href="#">Sed ut perspiciatis unde omnis iste natus sit volup.</a></li>
      										<li><a href="#">Sed ut perspiciatis unde omnis iste natus sit volup.</a></li>
      									</ul>
      								</div>


      							</div>

      							<div className="dropdown" data-menu="taipei">
      								<div className="image_type_1">
      									<div className="image">
      										<a href="#"><img src="http://res.cloudinary.com/dkympkwdz/image/upload/c_scale,h_496,w_671/v1489010716/example_pqoqsl.jpg" alt=""/><span className="hover"></span></a>
      									</div>

      									<div className="title"><a href="#">Sed ut perspiciatis unde omnis iste.</a></div>
      								</div>

      								<div className="image_type_1">
      									<div className="image">
      										<a href="#"><img src="http://res.cloudinary.com/dkympkwdz/image/upload/c_scale,h_496,w_671/v1489010716/example_pqoqsl.jpg" alt=""/><span className="hover"></span></a>
      									</div>

      									<div className="title"><a href="#">Unde omnis iste natus sit volup.</a></div>
      								</div>

      								<div className="menu_type_2">
      									<div className="title">Featured posts</div>

      									<ul>
      										<li><a href="#">Sed ut perspiciatis unde omnis iste natus sit volup.</a></li>
      										<li><a href="#">Omnis iste natus sit volup.</a></li>
      										<li><a href="#">Sed ut perspiciatis unde omnis iste natus sit volup.</a></li>
      										<li><a href="#">Sed ut perspiciatis unde omnis iste natus sit volup.</a></li>
      									</ul>
      								</div>

      							</div>

      							<div className="dropdown" data-menu="sf">
      								<div className="image_type_1">
      									<div className="image">
      										<a href="#"><img src="http://res.cloudinary.com/dkympkwdz/image/upload/c_scale,h_496,w_671/v1489010716/example_pqoqsl.jpg" alt=""/><span className="hover"></span></a>
      									</div>

      									<div className="title"><a href="#">Sed ut perspiciatis unde omnis iste.</a></div>
      								</div>

      								<div className="image_type_1">
      									<div className="image">
      										<a href="#"><img src="http://res.cloudinary.com/dkympkwdz/image/upload/c_scale,h_496,w_671/v1489010716/example_pqoqsl.jpg" alt=""/><span className="hover"></span></a>
      									</div>

      									<div className="title"><a href="#">Unde omnis iste natus sit volup.</a></div>
      								</div>

      								<div className="menu_type_2">
      									<div className="title">Featured posts</div>

      									<ul>
      										<li><a href="#">Sed ut perspiciatis unde omnis iste natus sit volup.</a></li>
      										<li><a href="#">Omnis iste natus sit volup.</a></li>
      										<li><a href="#">Sed ut perspiciatis unde omnis iste natus sit volup.</a></li>
      										<li><a href="#">Sed ut perspiciatis unde omnis iste natus sit volup.</a></li>
      									</ul>
      								</div>

      							</div>
      						</div>
      					</div>
      				</section>
      			</div>
      		</header>

          <div id="content" className="">
            <div className="inner">
      				<div className="block_general_title_1">
      					<h1>{this.state.article.title}</h1>
      					<h2>{this.state.article.category}</h2>
      				</div>

      				<div className="block_content">

                <MapContainer center={center}/>
                <div className="">
                  <div className="">
                    <RawHtml.mycooltag>{this.state.article.article}</RawHtml.mycooltag>
                  </div>
                </div>

      					<div className="line_1"></div>

                <div id="disqus_thread"></div>

      				</div>

      				<div className="block_info_1">
      					<div className="tags">
      						<div className="title"><span>Tags Cloud</span></div>

                  { this.renderTags() }

      					</div>

      					<div className="rating">
      						<div className="title"><span>Rating</span></div>

      						<div className="text">
      							<div className="num">{this.state.article.views}</div>
      							<div className="type">views</div>
      						</div>

      						<div className="text">
      							<div className="num">26</div>
      							<div className="type">Comments</div>
      						</div>

      						<div className="line"></div>
      					</div>

      				</div>

      			</div>
      		</div>

      		<footer>
      			<div id="footer">
      				<section className="top">
      					<div className="inner">
      						<div className="block_footer_widgets">
      							<div className="column">
      								<div className="block_footer_categories">
      									<h3>Locations</h3>

      									<ul>
      										<li><a href="#">DOWNTOWN LA</a></li>
      										<li><a href="#">TAIPEI</a></li>
      										<li><a href="#">SAN FRANCISCO</a></li>
      									</ul>
      								</div>
      							</div>

      							<div className="column">

      								<div className="block_footer_twitter">
      									<h3>Twitter</h3>

      									<div id="tweets">
                          <a className="twitter-timeline" data-width="400" data-height="200" data-theme="dark" href="https://twitter.com/TasteTerminal">Tweets by TasteTerminal</a>
      									</div>

      								</div>
      							</div>

      							<div className="column">
      								<div className="block_footer_pics">
      									<h3>Instagram</h3>

      									<ul id="instafeed">
      									</ul>
      								</div>
      							</div>
      						</div>
      					</div>
      				</section>

      				<section className="middle">
      					<div className="inner">
      						<div className="block_bottom_menu">
      							<nav>
      								<ul>
      									<li><a href="#">CONTACT</a></li>
      									<li><a href="#">PRIVACY POLICY</a></li>
      									<li><a href="#">ADVERTISE</a></li>
      								</ul>
      							</nav>
      						</div>
      					</div>
      				</section>

      				<section className="bottom">
      					<div className="inner">
      						<div className="block_copyrights"><p>&copy; Copyright {new Date().getFullYear()} by Taste Terminal. All Rights Reserved.</p></div>
      					</div>
      				</section>
      			</div>
      		</footer>
      	</div>
      </div>
    );
  }
}

export default Restaurant;
