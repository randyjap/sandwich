import React from 'react';
import { Link } from 'react-router';
import Slider from 'react-slick';
import {getArticles} from './../../util/article_api_util';
import Instafeed from 'instafeed.js';

var userFeed = new Instafeed({
    get: 'user',
    userId: '1570804557',
    accessToken: '1570804557.1677ed0.8dde9b4c29c64d3582444840b6677bc6',
    clientId: '7aa873bfe6a74a1ea4b4783d395bbfb7',
    sortBy: 'most-recent',
    limit: 16,
    resolution: 'thumbnail',
    template: '<li><a href="{{link}}"><img class="instafeed" src="{{image}}" alt=""/><span class="hover"></span></a></li>'
});

class Splash extends React.Component{
  constructor(props){
    super(props);
    this.redirect = this.redirect.bind(this);
    this.state = {
      featured: {},
      popular: {} ,
      articles: {}
    };
  }

  redirect(route){
    this.props.router.replace(route);
  }

  componentDidMount(){
    getArticles({category: "featured"}).then(articles => this.setState({featured: articles}));
    // getArticles("popular")
    //   .then(popular => this.setState({popular}));
    // getArticles("articles")
    //   .then(articles => this.setState({articles}));
    console.log(this.state);

    userFeed.run();

    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    (function() { // DON'T EDIT BELOW THIS LINE
      var d = document, s = d.createElement('script');
      s.src = 'https://http-sandwich1-herokuapp-com.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    })();
  }

  render(){
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

      		<div id="content" className="sidebar_right">
      			<div className="inner">
      				<div className="block_slider_type_2 general_not_loaded">
      					<div id="slider" className="slider flexslider">
      						<ul className="slides">
      							<li>
      								<div className="caption type_1">
      									<img src="http://res.cloudinary.com/dkympkwdz/image/upload/c_scale,h_381,w_635/v1489010716/example_pqoqsl.jpg" alt=""/>
      									<div className="text_1_1">Travel, PHOTOGRAPHY</div>
      									<div className="text_1_2">Mountains in Switzerland</div>
      									<div className="text_1_3"><a href="#" className="general_button_type_1">Read More</a></div>
      								</div>
      							</li>

      							<li>
      								<div className="caption type_1">
      									<img src="http://res.cloudinary.com/dkympkwdz/image/upload/c_scale,h_381,w_635/v1489010716/example_pqoqsl.jpg" alt=""/>
      									<div className="text_1_1">Life, PHOTOGRAPHY</div>
      									<div className="text_1_2">Flying over the mountains</div>
      									<div className="text_1_3"><a href="#" className="general_button_type_1">Read More</a></div>
      								</div>
      							</li>
      						</ul>
      					</div>

      				</div>

      				<div className="block_general_title_1 w_margin_1">
      					<h1>FEATURED POSTS</h1>
      					<h2>YOUR EXCLUSIVE TICKET TO TASTE</h2>
      				</div>

      				<div className="block_posts type_2">
      					<article className="post_type_4">
      						<div className="feature">
      							<div className="image">
      								<a href="blog_post.html"><img src="http://res.cloudinary.com/dkympkwdz/image/upload/c_scale,h_384,w_601/v1489010716/example_pqoqsl.jpg" alt=""/><span className="hover"></span></a>
      							</div>
      						</div>

      						<div className="content">
      							<div className="info">
      								<div className="date">March 27, 2017</div>
      								<div className="stats">
      									<div className="views">15</div>
      									<div className="comments">7</div>
      								</div>
      							</div>

      							<div className="title">
      								<a href="blog_post.html">Sed ut perspiciatis unde omnis iste natus sit volup.</a>
      							</div>
      						</div>
      					</article>

      					<article className="post_type_4">
      						<div className="feature">
      							<div className="image">
      								<a href="blog_post.html"><img src="http://res.cloudinary.com/dkympkwdz/image/upload/c_scale,h_384,w_601/v1489010716/example_pqoqsl.jpg" alt=""/><span className="hover"></span></a>
      							</div>
      						</div>

      						<div className="content">
      							<div className="info">
      								<div className="date">March 27, 2017</div>
      								<div className="stats">
      									<div className="views">15</div>
      									<div className="comments">7</div>
      								</div>
      							</div>

      							<div className="title">
      								<a href="blog_post.html">Red ut perspiciatis unde omnis iste.</a>
      							</div>
      						</div>
      					</article>

      					<article className="post_type_4">
      						<div className="feature">
      							<div className="image">
      								<a href="blog_post.html"><img src="http://res.cloudinary.com/dkympkwdz/image/upload/c_scale,h_384,w_601/v1489010716/example_pqoqsl.jpg" alt=""/><span className="hover"></span></a>
      							</div>
      						</div>

      						<div className="content">
      							<div className="info">
      								<div className="date">March 27, 2017</div>
      								<div className="stats">
      									<div className="views">15</div>
      									<div className="comments">7</div>
      								</div>
      							</div>

      							<div className="title">
      								<a href="blog_post.html">Totam rem aperiam, eaque ipsa quae ab illo inventore.</a>
      							</div>
      						</div>
      					</article>

      					<div className="clearboth"></div>
      					<div className="line_1"></div>
      				</div>

      				<div className="block_general_title_1 w_margin_1">
      					<h1>LATEST ARTICLES</h1>
      					<h2>OUR LATEST BITES</h2>
      				</div>

      				<div className="main_content">
      					<div className="block_posts type_3">
      						<article className="post_type_4">
      							<div className="feature">
      								<div className="image">
      									<a href="blog_post.html"><img src="http://res.cloudinary.com/dkympkwdz/image/upload/c_scale,h_384,w_601/v1489010716/example_pqoqsl.jpg" alt=""/><span className="hover"></span></a>
      								</div>
      							</div>

      							<div className="content">
      								<div className="info">
      									<div className="date">March 27, 2017</div>
      									<div className="stats">
      										<div className="views">15</div>
      										<div className="comments">7</div>
      									</div>
      								</div>

      								<div className="title">
      									<a href="blog_post.html">Quae ab illo inventore veritatis et quasi architecto beatae.</a>
      								</div>

      								<div className="line_1"></div>
      							</div>
      						</article>

      						<article className="post_type_4">
      							<div className="feature">
      								<div className="image">
      									<a href="blog_post.html"><img src="http://res.cloudinary.com/dkympkwdz/image/upload/c_scale,h_384,w_601/v1489010716/example_pqoqsl.jpg" alt=""/><span className="hover"></span></a>
      								</div>
      							</div>

      							<div className="content">
      								<div className="info">
      									<div className="date">March 27, 2017</div>
      									<div className="stats">
      										<div className="views">15</div>
      										<div className="comments">7</div>
      									</div>
      								</div>

      								<div className="title">
      									<a href="blog_post.html">Totam rem aperiam, eaque ipsa quae ab illo inventore verit.</a>
      								</div>

      								<div className="line_1"></div>
      							</div>
      						</article>

      						<article className="post_type_4">
      							<div className="feature">
      								<div className="image">
      									<a href="blog_post.html"><img src="http://res.cloudinary.com/dkympkwdz/image/upload/c_scale,h_384,w_601/v1489010716/example_pqoqsl.jpg" alt=""/><span className="hover"></span></a>
      								</div>
      							</div>

      							<div className="content">
      								<div className="info">
      									<div className="date">March 27, 2017</div>
      									<div className="stats">
      										<div className="views">15</div>
      										<div className="comments">7</div>
      									</div>
      								</div>

      								<div className="title">
      									<a href="blog_post.html">Rem aperiam, eaque ipsa quae ab illo inven.</a>
      								</div>

      								<div className="line_1"></div>
      							</div>
      						</article>

      						<article className="post_type_4">
      							<div className="feature">
      								<div className="image">
      									<a href="blog_post.html"><img src="http://res.cloudinary.com/dkympkwdz/image/upload/c_scale,h_384,w_601/v1489010716/example_pqoqsl.jpg" alt=""/><span className="hover"></span></a>
      								</div>
      							</div>

      							<div className="content">
      								<div className="info">
      									<div className="date">March 27, 2017</div>
      									<div className="stats">
      										<div className="views">15</div>
      										<div className="comments">7</div>
      									</div>
      								</div>

      								<div className="title">
      									<a href="blog_post.html">Red ut perspiciatis unde omnis iste.</a>
      								</div>

      								<div className="line_1"></div>
      							</div>
      						</article>

      						<article className="post_type_4">
      							<div className="feature">
      								<div className="image">
      									<a href="blog_post.html"><img src="http://res.cloudinary.com/dkympkwdz/image/upload/c_scale,h_384,w_601/v1489010716/example_pqoqsl.jpg" alt=""/><span className="hover"></span></a>
      								</div>
      							</div>

      							<div className="content">
      								<div className="info">
      									<div className="date">March 27, 2017</div>
      									<div className="stats">
      										<div className="views">15</div>
      										<div className="comments">7</div>
      									</div>
      								</div>

      								<div className="title">
      									<a href="blog_post.html">Qumquam eius modi tempora.</a>
      								</div>

      								<div className="line_1"></div>
      							</div>
      						</article>

      						<article className="post_type_4">
      							<div className="feature">
      								<div className="image">
      									<a href="blog_post.html"><img src="http://res.cloudinary.com/dkympkwdz/image/upload/c_scale,h_384,w_601/v1489010716/example_pqoqsl.jpg" alt=""/><span className="hover"></span></a>
      								</div>
      							</div>

      							<div className="content">
      								<div className="info">
      									<div className="date">March 27, 2017</div>
      									<div className="stats">
      										<div className="views">15</div>
      										<div className="comments">7</div>
      									</div>
      								</div>

      								<div className="title">
      									<a href="blog_post.html">Qumquam eius modi tempora.</a>
      								</div>

      								<div className="line_1"></div>
      							</div>
      						</article>

      					</div>

      					<div className="separator_2"></div>

      					<div className="block_pager_1">
      						<ul>
      							<li className="current"><a href="#">1</a></li>
      							<li><a href="#">2</a></li>
      							<li><a href="#">3</a></li>
      							<li className="skip">...</li>
      							<li><a href="#">7</a></li>
      							<li><a href="#" className="next">Next</a></li>
      						</ul>

      						<div className="info">Page 1 of 7</div>
                  <a href="sandwich1.herokuapp.com/#/#disqus_thread">Test Count</a>

      						<div className="clearboth"></div>
      					</div>

                <div id="disqus_thread"></div>

      				</div>

      				<div className="sidebar">
      					<aside>
      						<div className="sidebar_title_1">Social</div>

      						<div className="block_sidebar_social">
                    <div className="row tw">
                      <div className="text">16,321 Followers</div>

                      <div className="button"><a href="#">Follow</a></div>
                    </div>

      							<div className="row fb">
      								<div className="text">25,750 Fans</div>

      								<div className="button"><a href="#">Like</a></div>
      							</div>

      							<div className="row ig">
      								<div className="text">25,750 Followers</div>

      								<div className="button"><a href="#">Follow</a></div>
      							</div>

      							<div className="row rss">
      								<div className="text">56,124 Subscribers</div>

      								<div className="button"><a href="#">Subscribers</a></div>
      							</div>
      						</div>
      					</aside>

      					<aside>
                  Advertisement
      						<div className="block_banner_1"><a href="#"><img src="http://www.randyjap.com/sandwich_assets/images/banner_1.jpg" alt=""/></a></div>
      					</aside>

      					<aside>
                  Advertisement
      						<div className="block_banner_1"><a href="#"><img src="http://www.randyjap.com/sandwich_assets/images/banner_1.jpg" alt=""/></a></div>
      					</aside>

      					<aside>
      						<div className="sidebar_title_1">Popular posts</div>

      						<div className="block_sidebar_popular_posts">
      							<article>
      								<div className="image"><a href="#"><img src="http://res.cloudinary.com/dkympkwdz/image/upload/c_scale,h_66,w_86/v1489010716/example_pqoqsl.jpg" alt=""/></a></div>

      								<div className="content">
      									<div className="title">
      										<a href="blog_post.html">Quae ab illo inventore veritatis et quasi.</a>
      									</div>

      									<div className="info">
      										<div className="date">March 27, 2017</div>
      									</div>
      								</div>
      							</article>

      							<article>
      								<div className="image"><a href="#"><img src="http://res.cloudinary.com/dkympkwdz/image/upload/c_scale,h_66,w_86/v1489010716/example_pqoqsl.jpg" alt=""/></a></div>

      								<div className="content">
      									<div className="title">
      										<a href="blog_post.html">Nemo enim ipsam voluptatem quia voluptas.</a>
      									</div>

      									<div className="info">
      										<div className="date">March 27, 2017</div>
      									</div>
      								</div>
      							</article>

      							<article>
      								<div className="image"><a href="#"><img src="http://res.cloudinary.com/dkympkwdz/image/upload/c_scale,h_66,w_86/v1489010716/example_pqoqsl.jpg" alt=""/></a></div>

      								<div className="content">
      									<div className="title">
      										<a href="blog_post.html">Sit aspernatur aut odit aut fugit, sed quia.</a>
      									</div>

      									<div className="info">
      										<div className="date">March 27, 2017</div>
      									</div>
      								</div>
      							</article>
      						</div>
      					</aside>

      				</div>

      				<div className="clearboth"></div>

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

export default Splash;
