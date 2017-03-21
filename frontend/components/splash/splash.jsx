import React from 'react';
import { Link } from 'react-router';
import Slider from 'react-slick';
import {getArticles} from './../../util/article_api_util';
import RawHtml from "react-raw-html";

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

    slider_1();
    slider_2();
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
      								<ul>
      									<li className="current_page_item"><a href="index.html">HOMEPAGE</a>

      										<ul>
      											<li><a href="index.html">Home Style 1</a></li>
      											<li className="current_page_item"><a href="index_2.html">Home Style 2</a></li>
      											<li><a href="index_3.html">Home Style 3</a></li>
      										</ul>
      									</li>
      									<li><a href="blog_post.html">POSTS</a>

      										<ul>
      											<li><a href="blog_post.html">Blog Post</a></li>
      											<li><a href="blog_post_gallery.html">Gallery Post</a></li>
      											<li><a href="blog_post_video.html">Video Post</a></li>
      											<li><a href="blog_post_modify.html">Modify Post</a></li>
      											<li><a href="blog_post_modify_comments.html">Modify Post with Comments</a></li>
      											<li><a href="blog_post_slider.html">Post with Slider</a></li>
      											<li><a href="blog_post_review.html">Review Post</a></li>
      											<li><a href="blog_post_music.html">Music Post</a></li>
      										</ul>
      									</li>
      									<li><a href="category_photography.html">CATEGORIES</a>

      										<ul>
      											<li><a href="category_photography.html">Photography</a></li>
      											<li><a href="category_life.html">Life</a></li>
      											<li><a href="category_fashion.html">Fashion</a></li>
      											<li><a href="category_technology.html">Technology</a></li>
      											<li><a href="category_travel.html">Travel</a></li>
      											<li><a href="category_design.html">Design</a></li>
      											<li><a href="category_music.html">Music</a></li>
      											<li><a href="category_reviews.html">Reviews</a></li>
      										</ul>
      									</li>
      									<li><a href="full_width.html">PAGES</a>

      										<ul>
      											<li><a href="full_width.html">Full Width Page</a></li>
      											<li><a href="about_author.html">About Author</a></li>
      											<li><a href="search.html">Search</a></li>
      											<li><a href="archives.html">Archives</a></li>
      											<li><a href="galleries.html">Galleries</a></li>
      											<li><a href="contact.html">Contact Us</a></li>
      											<li><a href="404.html">404 Page</a></li>
      											<li><a href="rules.html">Forum Rules</a></li>
      										</ul>
      									</li>
      									<li><a href="shortcodes.html">FEATURES</a>

      										<ul>
      											<li><a href="shortcodes.html">Shortcodes</a></li>
      											<li><a href="typography.html">Typography</a></li>
      											<li><a href="columns.html">Columns</a></li>
      										</ul>
      									</li>
      								</ul>
      							</nav>
      						</div>

      						<div className="block_search">
      							<input type="text" className="w_focus_mark"/>
      						</div>

      						<div className="block_top_social">
      							<ul className="general_social_1">
      								<li><a href="#" className="social_1">Twitter</a></li>
      								<li><a href="#" className="social_2">Facebook</a></li>
      								<li><a href="#" className="social_3">Vimeo</a></li>
      								<li><a href="#" className="social_4">Pinterest</a></li>
      								<li><a href="#" className="social_5">Instagram</a></li>
      							</ul>
      						</div>

      						<div className="clearboth"></div>
      					</div>
      				</section>

      				<section className="middle">
      					<div className="inner">
      						<div id="logo_top"><a href="index.html"><img src="http://www.randyjap.com/sandwich_assets/images/logo_top.png" alt="Enterprise" title="Enterprise"/></a></div>
      					</div>
      				</section>

      				<section className="bottom">
      					<div className="inner">
      						<div className="block_secondary_menu">
      							<nav>
      								<ul>
      									<li data-content="photography"><a href="category_photography.html">PHOTOGRAPHY</a><div className="tail"></div></li>
      									<li data-content="design"><a href="category_design.html">DESIGN</a><div className="tail"></div></li>
      									<li data-content="fashion"><a href="category_fashion.html">FASHION</a></li>
      									<li data-content="reviews"><a href="category_reviews.html">REVIEWS</a></li>
      									<li data-content="music"><a href="category_music.html">MUSIC</a></li>
      									<li data-content="technology"><a href="category_technology.html">TECHNOLOGY</a></li>
      									<li data-content="life"><a href="category_life.html">LIFE</a></li>
      									<li data-content="travel"><a href="category_travel.html">TRAVEL</a></li>
      								</ul>
      							</nav>

      							<div className="dropdown" data-menu="photography">
      								<div className="image_type_1">
      									<div className="image">
      										<a href="#"><img src="http://www.randyjap.com/sandwich_assets/images/pic_drop_1_1.jpg" alt=""/><span className="hover"></span></a>
      									</div>

      									<div className="title"><a href="#">Sed ut perspiciatis unde omnis iste.</a></div>
      								</div>

      								<div className="image_type_1">
      									<div className="image">
      										<a href="#"><img src="http://www.randyjap.com/sandwich_assets/images/pic_drop_1_2.jpg" alt=""/><span className="hover"></span></a>
      									</div>

      									<div className="title"><a href="#">Unde omnis iste natus sit volup.</a></div>
      								</div>

      								<div className="menu_type_2">
      									<div className="title">Featured posts</div>

      									<ul>
      										<li><a href="#">Sed ut perspiciatis unde omnis iste natus sit volup.</a></li>
      										<li><a href="#">Omnis iste natus sit volup.</a></li>
      										<li><a href="#">Sed ut perspiciatis unde omnis iste natus sit volup.</a></li>
      									</ul>
      								</div>

      								<div className="menu_type_3">
      									<ul>
      										<li><a href="#">Standart post</a></li>
      										<li><a href="#">Gallery Post format</a></li>
      										<li><a href="#">Video Post Format</a></li>
      										<li><a href="#">Modify Post</a></li>
      									</ul>
      								</div>
      							</div>

      							<div className="dropdown" data-menu="design">
      								<div className="menu_type_1">
      									<ul>
      										<li><a href="category_life.html">Category with slider</a></li>
      										<li><a href="category_photography.html">Category masonry fullwidth</a></li>
      										<li><a href="blog_post.html">Standard blog</a></li>
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
      									<img src="http://www.randyjap.com/sandwich_assets/images/pic_slider_2_1_1.jpg" alt=""/>
      									<div className="text_1_1">Travel, PHOTOGRAPHY</div>
      									<div className="text_1_2">Mountains in Switzerland</div>
      									<div className="text_1_3"><a href="#" className="general_button_type_1">Read More</a></div>
      								</div>

      								<div className="caption type_2">
      									<img src="http://www.randyjap.com/sandwich_assets/images/pic_slider_2_1_2.jpg" alt=""/>
      									<div className="text_2_1">Travel, PHOTOGRAPHY</div>
      									<div className="text_2_2">My love - new york</div>
      									<div className="text_2_3"><a href="#" className="general_button_type_2">Read More</a></div>
      								</div>

      								<div className="caption type_3">
      									<img src="http://www.randyjap.com/sandwich_assets/images/pic_slider_2_1_3.jpg" alt=""/>
      									<div className="text_3_1">Life, PHOTOGRAPHY</div>
      									<div className="text_3_2">My Awesome workplace</div>
      									<div className="text_3_3"><a href="#" className="general_button_type_2">Read More</a></div>
      								</div>
      							</li>

      							<li>
      								<div className="caption type_1">
      									<img src="http://www.randyjap.com/sandwich_assets/images/pic_slider_2_2_1.jpg" alt=""/>
      									<div className="text_1_1">Life, PHOTOGRAPHY</div>
      									<div className="text_1_2">Flying over the mountains</div>
      									<div className="text_1_3"><a href="#" className="general_button_type_1">Read More</a></div>
      								</div>

      								<div className="caption type_2">
      									<img src="http://www.randyjap.com/sandwich_assets/images/pic_slider_2_2_2.jpg" alt=""/>
      									<div className="text_2_1">Travel, PHOTOGRAPHY</div>
      									<div className="text_2_2">Young Businessman</div>
      									<div className="text_2_3"><a href="#" className="general_button_type_2">Read More</a></div>
      								</div>

      								<div className="caption type_3">
      									<img src="http://www.randyjap.com/sandwich_assets/images/pic_slider_2_2_3.jpg" alt=""/>
      									<div className="text_3_1">People, Life</div>
      									<div className="text_3_2">The Guy on the field</div>
      									<div className="text_3_3"><a href="#" className="general_button_type_2">Read More</a></div>
      								</div>
      							</li>
      						</ul>
      					</div>

      				</div>

      				<div className="block_general_title_1 w_margin_1">
      					<h1>FEATURED POSTS</h1>
      					<h2>ENTER THE SUB TITLE FOR THIS SECTION</h2>
      				</div>

      				<div className="block_posts type_2">
      					<article className="post_type_4">
      						<div className="feature">
      							<div className="image">
      								<a href="blog_post.html"><img src="http://www.randyjap.com/sandwich_assets/images/pic_f_post_1_1.jpg" alt=""/><span className="hover"></span></a>
      							</div>
      						</div>

      						<div className="content">
      							<div className="info">
      								<div className="tags"><a href="#">TRAVEL</a>, <a href="#">LIFE</a></div>
      								<div className="date">27, 2013</div>
      								<div className="stats">
      									<div className="likes">15</div>
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
      								<a href="blog_post.html"><img src="http://www.randyjap.com/sandwich_assets/images/pic_f_post_1_2.jpg" alt=""/><span className="hover"></span></a>
      							</div>
      						</div>

      						<div className="content">
      							<div className="info">
      								<div className="tags"><a href="#">TRAVEL</a>, <a href="#">LIFE</a></div>
      								<div className="date">27, 2013</div>
      								<div className="stats">
      									<div className="likes">15</div>
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
      								<a href="blog_post.html"><img src="http://www.randyjap.com/sandwich_assets/images/pic_f_post_1_3.jpg" alt=""/><span className="hover"></span></a>
      							</div>
      						</div>

      						<div className="content">
      							<div className="info">
      								<div className="tags"><a href="#">TRAVEL</a>, <a href="#">LIFE</a></div>
      								<div className="date">27, 2013</div>
      								<div className="stats">
      									<div className="likes">15</div>
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
      					<h2>ENTER THE SUB TITLE FOR THIS SECTION</h2>
      				</div>

      				<div className="main_content">
      					<div className="block_posts type_3">
      						<article className="post_type_4">
      							<div className="feature">
      								<div className="image">
      									<a href="blog_post.html"><img src="http://www.randyjap.com/sandwich_assets/images/pic_post_2_1.jpg" alt=""/><span className="hover"></span></a>
      								</div>
      							</div>

      							<div className="content">
      								<div className="info">
      									<div className="tags"><a href="#">TRAVEL</a>, <a href="#">LIFE</a></div>
      									<div className="date">27, 2013</div>
      									<div className="stats">
      										<div className="likes">15</div>
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
      									<a href="blog_post.html"><img src="http://www.randyjap.com/sandwich_assets/images/pic_post_2_2.jpg" alt=""/><span className="hover"></span></a>
      								</div>
      							</div>

      							<div className="content">
      								<div className="info">
      									<div className="tags"><a href="#">TRAVEL</a>, <a href="#">LIFE</a></div>
      									<div className="date">27, 2013</div>
      									<div className="stats">
      										<div className="likes">15</div>
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
      									<a href="blog_post.html"><img src="http://www.randyjap.com/sandwich_assets/images/pic_post_2_3.jpg" alt=""/><span className="hover"></span></a>
      								</div>
      							</div>

      							<div className="content">
      								<div className="info">
      									<div className="tags"><a href="#">TRAVEL</a>, <a href="#">LIFE</a></div>
      									<div className="date">27, 2013</div>
      									<div className="stats">
      										<div className="likes">15</div>
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
      									<a href="blog_post.html"><img src="http://www.randyjap.com/sandwich_assets/images/pic_post_2_4.jpg" alt=""/><span className="hover"></span></a>
      								</div>
      							</div>

      							<div className="content">
      								<div className="info">
      									<div className="tags"><a href="#">TRAVEL</a>, <a href="#">LIFE</a></div>
      									<div className="date">27, 2013</div>
      									<div className="stats">
      										<div className="likes">15</div>
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
      								<div className="slider">
      									<div id="post_slider_1" className="flexslider">
      										<ul className="slides">
      											<li><img src="http://www.randyjap.com/sandwich_assets/images/pic_post_2_5.jpg" alt=""/></li>
      											<li><img src="http://www.randyjap.com/sandwich_assets/images/pic_post_2_9.jpg" alt=""/></li>
      											<li><img src="http://www.randyjap.com/sandwich_assets/images/pic_post_2_10.jpg" alt=""/></li>
      										</ul>
      									</div>


      								</div>
      							</div>

      							<div className="content">
      								<div className="info">
      									<div className="tags"><a href="#">TRAVEL</a>, <a href="#">LIFE</a></div>
      									<div className="date">27, 2013</div>
      									<div className="stats">
      										<div className="likes">15</div>
      										<div className="comments">7</div>
      									</div>
      								</div>

      								<div className="title">
      									<a href="blog_post.html">Sed ut perspiciatis unde omnis iste natus sit volup.</a>
      								</div>

      								<div className="line_1"></div>
      							</div>
      						</article>

      						<article className="post_type_4">
      							<div className="feature">
      								<div className="image">
      									<a href="blog_post_video.html"><img src="http://www.randyjap.com/sandwich_assets/images/pic_post_2_6.jpg" alt=""/><span className="hover no_icon"></span><span className="icon video"></span></a>
      								</div>
      							</div>

      							<div className="content">
      								<div className="info">
      									<div className="tags"><a href="#">TRAVEL</a>, <a href="#">LIFE</a></div>
      									<div className="date">27, 2013</div>
      									<div className="stats">
      										<div className="likes">15</div>
      										<div className="comments">7</div>
      									</div>
      								</div>

      								<div className="title">
      									<a href="blog_post_video.html">Ut perspiciatis unde omnis iste natus sit relative.</a>
      								</div>

      								<div className="line_1"></div>
      							</div>
      						</article>

      						<article className="post_type_4">
      							<div className="feature">
      								<div className="image">
      									<a href="blog_post_review.html"><img src="http://www.randyjap.com/sandwich_assets/images/pic_post_2_7.jpg" alt=""/><span className="hover"></span></a>
      								</div>

      								<div className="review">
      									<div className="num">7.5</div>
      									<div className="type">score</div>
      								</div>
      							</div>

      							<div className="content">
      								<div className="info">
      									<div className="tags"><a href="#">TRAVEL</a>, <a href="#">LIFE</a></div>
      									<div className="date">27, 2013</div>
      									<div className="stats">
      										<div className="likes">15</div>
      										<div className="comments">7</div>
      									</div>
      								</div>

      								<div className="title">
      									<a href="blog_post_review.html">Ratione voluptatem sequi nesciunt. Neque porro.</a>
      								</div>

      								<div className="line_1"></div>
      							</div>
      						</article>

      						<article className="post_type_4">
      							<div className="feature">
      								<div className="image">
      									<a href="blog_post.html"><img src="http://www.randyjap.com/sandwich_assets/images/pic_post_2_8.jpg" alt=""/><span className="hover"></span></a>
      								</div>
      							</div>

      							<div className="content">
      								<div className="info">
      									<div className="tags"><a href="#">TRAVEL</a>, <a href="#">LIFE</a></div>
      									<div className="date">27, 2013</div>
      									<div className="stats">
      										<div className="likes">15</div>
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

      						<div className="clearboth"></div>
      					</div>
      				</div>

      				<div className="sidebar">
      					<aside>
      						<div className="sidebar_title_1">Social</div>

      						<div className="block_sidebar_social">
      							<div className="row fb">
      								<div className="text">25,750 Fans</div>

      								<div className="button"><a href="#">Like</a></div>
      							</div>

      							<div className="row tw">
      								<div className="text">16,321 Followers</div>

      								<div className="button"><a href="#">Follow</a></div>
      							</div>

      							<div className="row rss">
      								<div className="text">56,124 Subscribers</div>

      								<div className="button"><a href="#">Subscribers</a></div>
      							</div>
      						</div>
      					</aside>

      					<aside>
      						<div className="block_banner_1"><a href="#"><img src="http://www.randyjap.com/sandwich_assets/images/banner_1.jpg" alt=""/></a></div>
      					</aside>

      					<aside>
      						<div className="sidebar_title_1">Popular posts</div>

      						<div className="block_sidebar_popular_posts">
      							<article>
      								<div className="image"><a href="#"><img src="http://www.randyjap.com/sandwich_assets/images/pic_popular_post_1_1.jpg" alt=""/></a></div>

      								<div className="content">
      									<div className="title">
      										<a href="blog_post.html">Quae ab illo inventore veritatis et quasi.</a>
      									</div>

      									<div className="info">
      										<div className="tags"><a href="#">TRAVEL</a>, <a href="#">LIFE</a></div>
      										<div className="date">27, 2013</div>
      									</div>
      								</div>
      							</article>

      							<article>
      								<div className="image"><a href="#"><img src="http://www.randyjap.com/sandwich_assets/images/pic_popular_post_1_2.jpg" alt=""/></a></div>

      								<div className="content">
      									<div className="title">
      										<a href="blog_post.html">Nemo enim ipsam voluptatem quia voluptas.</a>
      									</div>

      									<div className="info">
      										<div className="tags"><a href="#">TRAVEL</a>, <a href="#">LIFE</a></div>
      										<div className="date">27, 2013</div>
      									</div>
      								</div>
      							</article>

      							<article>
      								<div className="image"><a href="#"><img src="http://www.randyjap.com/sandwich_assets/images/pic_popular_post_1_3.jpg" alt=""/></a></div>

      								<div className="content">
      									<div className="title">
      										<a href="blog_post.html">Sit aspernatur aut odit aut fugit, sed quia.</a>
      									</div>

      									<div className="info">
      										<div className="tags"><a href="#">TRAVEL</a>, <a href="#">LIFE</a></div>
      										<div className="date">27, 2013</div>
      									</div>
      								</div>
      							</article>
      						</div>
      					</aside>

      					<aside>
      						<div className="sidebar_title_1">Most commented</div>

      						<div className="block_sidebar_most_commented">
      							<article>
      								<a href="#">
      									<span className="num">12<span className="tail"></span></span>
      									<span className="title">Quae ab illo inventore veritatis et quasi.</span>
      								</a>
      							</article>

      							<article>
      								<a href="#">
      									<span className="num">8<span className="tail"></span></span>
      									<span className="title">Fugit, sed quia consequuntur.</span>
      								</a>
      							</article>

      							<article>
      								<a href="#">
      									<span className="num">7<span className="tail"></span></span>
      									<span className="title">Sed quia consequuntur magni dolores eos qui.</span>
      								</a>
      							</article>
      						</div>
      					</aside>

      					<aside>
      						<div className="sidebar_title_1">Latest Comments</div>

      						<div className="block_sidebar_latest_comments">
      							<article>
      								<div className="num">1</div>
      								<div className="content">
      									<div className="author"><span>Mark Summers</span> says:</div>
      									<div className="comment">Aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.</div>
      								</div>
      							</article>

      							<article>
      								<div className="num">2</div>
      								<div className="content">
      									<div className="author"><span>Sara hornet</span> says:</div>
      									<div className="comment">Magni dolores eos qui ratione voluptatem sequi nesciunt.</div>
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
      									<h3>Posts Categories</h3>

      									<ul>
      										<li><a href="category_photography.html">PHOTOGRAPHY</a></li>
      										<li><a href="category_design.html">DESIGN</a></li>
      										<li><a href="category_fashion.html">FASHION</a></li>
      										<li><a href="category_reviews.html">REVIEWS</a></li>
      										<li><a href="category_music.html">MUSIC</a></li>
      										<li><a href="category_technology.html">TECHNOLOGY</a></li>
      										<li><a href="category_life.html">LIFE</a></li>
      										<li><a href="category_travel.html">TRAVEL</a></li>
      									</ul>
      								</div>
      							</div>

      							<div className="column">
      								<div className="block_footer_tags">
      									<h3>Tags cloud</h3>

      									<ul>
      										<li><a href="#">Peoples</a></li>
      										<li><a href="#">Design</a></li>
      										<li><a href="#">Technology</a></li>
      										<li><a href="#">Travel</a></li>
      										<li><a href="#">Music</a></li>
      										<li><a href="#">Photography</a></li>
      										<li><a href="#">Fashion</a></li>
      										<li><a href="#">Creative</a></li>
      										<li><a href="#">Apple</a></li>
      										<li><a href="#">News</a></li>
      										<li><a href="#">Development</a></li>
      									</ul>
      								</div>

      								<div className="block_footer_twitter">
      									<h3>Twitter Widget</h3>

      									<div id="tweets"></div>

      								</div>
      							</div>

      							<div className="column">
      								<div className="block_footer_pics">
      									<h3>Instagram</h3>

      									<ul>
      										<li><a href="#"><img src="http://www.randyjap.com/sandwich_assets/images/pic_footer_1.jpg" alt=""/><span className="hover"></span></a></li>
      										<li><a href="#"><img src="http://www.randyjap.com/sandwich_assets/images/pic_footer_2.jpg" alt=""/><span className="hover"></span></a></li>
      										<li><a href="#"><img src="http://www.randyjap.com/sandwich_assets/images/pic_footer_3.jpg" alt=""/><span className="hover"></span></a></li>
      										<li><a href="#"><img src="http://www.randyjap.com/sandwich_assets/images/pic_footer_4.jpg" alt=""/><span className="hover"></span></a></li>
      										<li><a href="#"><img src="http://www.randyjap.com/sandwich_assets/images/pic_footer_5.jpg" alt=""/><span className="hover"></span></a></li>
      										<li><a href="#"><img src="http://www.randyjap.com/sandwich_assets/images/pic_footer_6.jpg" alt=""/><span className="hover"></span></a></li>
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
      									<li><a href="index.html">HOMEPAGE</a></li>
      									<li><a href="blog_post.html">POSTS</a></li>
      									<li><a href="category_photography.html">CATEGORIES</a></li>
      									<li><a href="full_width.html">PAGES</a></li>
      									<li><a href="shortcodes.html">FEATURES</a></li>
      								</ul>
      							</nav>
      						</div>
      					</div>
      				</section>

      				<section className="bottom">
      					<div className="inner">
      						<div className="block_copyrights"><p>&copy; Copyright 2013 by WebLionMedia. All Rights Reserved.</p></div>
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
