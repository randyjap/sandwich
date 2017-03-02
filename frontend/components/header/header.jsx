import React from 'react';
import { Link } from 'react-router';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TimeAgo from 'react-timeago';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

class Header extends React.Component{
  constructor(props){
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  redirect(route){
    this.props.router.replace(route);
  }

  render(){
    return (
      <header className="header">
        <ul className="navigation">
          <li><a className="nav-links" href="#">HOME</a></li>
          <li><a className="nav-links" href="#">ABOUT</a></li>
          <li><a className="nav-links" href="#">PRODUCTS</a></li>
          <li><a className="nav-links" href="#">CONTACT</a></li>
        </ul>
      </header>
    );
  }
}

export default Header;
