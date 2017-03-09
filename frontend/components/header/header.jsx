import React from 'react';
import { Link } from 'react-router';

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
        <div onClick={() => this.redirect('')} className="header-title">
          Sandwich
        </div>
      </header>
    );
  }
}

export default Header;
