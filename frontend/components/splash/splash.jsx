import React from 'react';
import { Link } from 'react-router';
import Slider from 'react-slick';
import {getArticles} from './../../util/article_api_util';
import Instafeed from 'instafeed.js';

function slider_1() {
  jQuery(function() {
    init_post_slider_1('#post_slider_1');
  });
}

function slider_2() {
  jQuery(function() {
    init_slider_2('#slider');
  });
}

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
    this.nextPage = this.nextPage.bind(this);
    this.state = {
      featured: {},
      popular: {},
      articles: {},
      offset: 1
    };
  }

  redirect(route){
    this.props.router.replace(route);
  }

  nextPage(){
    let count = Math.ceil(Object.keys(this.state.articles).length / 8);
    if (this.state.offset < count) {
      this.setState({offset: this.state.offset + 1});
    }
  }

  componentDidMount(){
    getArticles({featured: true}).then(articles => this.setState({featured: articles}));
    getArticles({popular: true}).then(articles => this.setState({popular: articles}));
    getArticles().then(articles => this.setState({articles: articles}));

    slider_1();
    slider_2();
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

  renderFeatured(){
    let articles = this.state.featured;
    let index = 0;
    articles = Object.keys(articles).map(key => {
      let article = articles[key];
      return (
        <article key={key} className="post_type_4">
          <div className="feature">
            <div className="image">
              <Link to={`restaurants/${key}`}><img src={`http://res.cloudinary.com/dkympkwdz/image/upload/c_scale,h_384,w_601/${article.media[0].url}`} alt=""/><span className="hover"></span></Link>
            </div>
          </div>

          <div className="content">
            <div className="info">
              <div className="date">{article.date}</div>
              <div className="stats">
                <div className="views">{article.views}</div>
                <div className="comments">7</div>
              </div>
            </div>

            <div className="title">
              <Link to={`restaurants/${key}`}>{article.title}</Link>
            </div>
          </div>
        </article>
      );
    });

    return (
      <div className="block_posts type_2">
        {articles}
        <div className="clearboth"></div>
        <div className="line_1"></div>
      </div>
    );
  }

  renderArticles(){
    let articles = this.state.articles;
    let index = 0;
    articles = Object.keys(articles).map(key => {
      let article = articles[key];
      index++;
      if (index <= this.state.offset * 8 && index >= this.state.offset * 8 - 7) {
        return (
          <article key={key} className="post_type_4">
            <div className="feature">
              <div className="image">
                <Link to={`restaurants/${key}`}><img src={`http://res.cloudinary.com/dkympkwdz/image/upload/c_scale,h_384,w_601/${article.media[0].url}`} alt=""/><span className="hover"></span></Link>
              </div>
            </div>

            <div className="content">
              <div className="info">
                <div className="date">{article.date}</div>
                <div className="stats">
                  <div className="views">{article.views}</div>
                  <div className="comments">7</div>
                </div>
              </div>

              <div className="title">
                <Link to={`restaurants/${key}`}>{article.title}</Link>
              </div>

              <div className="line_1"></div>
            </div>
          </article>
        );
      }
    });

    let pageCount = Math.ceil(Object.keys(this.state.articles).length / 8);
    let paginations = [];
    for (let i = 1; i <= pageCount; i++) {
      paginations.push(i);
    }
    paginations = paginations.map(key => {
        return (
          <li key={key}
              className={this.state.offset === key ? "current" : ""}
              onClick={() => this.setState({offset: key})}>
            <Link to="" >{key}</Link>
          </li>
        );
      }
    );

    return (
      <div className="main_content">
        <div className="block_posts type_3">
          {articles}
        </div>

        <div className="separator_2"></div>

        <div className="block_pager_1">
          <ul>
            {paginations}
            <li><Link to=""
              className="next"
              onClick={this.nextPage}>Next</Link></li>
          </ul>

          <div className="info">Page 1 of {pageCount}</div>

          <div className="clearboth"></div>
        </div>

        <div id="disqus_thread"></div>

      </div>
    );
  }

  renderPopular(){
    let articles = this.state.popular;
    articles = Object.keys(articles).map(key => {
      let article = articles[key];
      return (
        <article key={key}>
          <div className="image"><Link to={`restaurants/${key}`}><img src={`http://res.cloudinary.com/dkympkwdz/image/upload/c_scale,h_66,w_86/${article.media[0].url}`} alt=""/></Link></div>

          <div className="content">
            <div className="title">
              <Link to={`restaurants/${key}`}>{article.title}</Link>
            </div>

            <div className="info">
              <div className="date">{article.date}</div>
            </div>
          </div>
        </article>
      );
    });

    return (
      <div className="block_sidebar_popular_posts">
        {articles}
      </div>
    );
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

      				{this.renderFeatured()}

      				<div className="block_general_title_1 w_margin_1">
      					<h1>LATEST ARTICLES</h1>
      					<h2>OUR LATEST BITES</h2>
      				</div>

      				{this.renderArticles()}

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

      						{this.renderPopular()}
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
