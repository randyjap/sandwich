import React from 'react';

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
        <div className="header-title">
          Sandwich
        </div>
      </header>
    );
  }
}

export default Header;
