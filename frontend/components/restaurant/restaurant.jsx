import React from 'react';
import { Link } from 'react-router';
import MapContainer from '../map/map_container';

class Restaurant extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="main">
        <div className="main-header">
          <ul className="main-header-nav">
            <li><a href="#">Restaurants</a></li>
            <li><a href="#">Guides</a></li>
            <li><a href="#">Style</a></li>
            <li><a href="#">Galleries</a></li>
            <li><a href="#">Lifestyle</a></li>
            <li><a href="#">Videos</a></li>
          </ul>
        </div>
        <div className="main-body">
          <MapContainer />
        </div>
        <footer className="footer">

        </footer>
      </div>
    );
  }
}

export default Restaurant;
