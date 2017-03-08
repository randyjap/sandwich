import React from 'react';

class Footer extends React.Component{
  constructor(props){
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  redirect(route){
    this.props.router.replace(route);
  }

  render(){
    return (
      <footer className="footer">

      </footer>
    );
  }
}

export default Footer;
