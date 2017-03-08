import React from 'react';
import { Link } from 'react-router';
import MapContainer from '../map/map_container';

class Restaurant extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="restaurant">
        <MapContainer />
      </div>
    );
  }
}

export default Restaurant;
