import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import MarkerManager from '../../util/marker_manager';
import merge from 'lodash/merge';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const _getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

let style = [
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }
];

let _mapOptions = {
  center: {lat: 25.049766, lng: 121.5452643}, // San Francisco coords
  zoom: 13,
  scrollwheel: false,
  disableDefaultUI: true,
  styles: style,
  zoomControl: true
};

let restaurantDummies = [
  { id: 1, name: "Happy Restaurant", lat: 25.044866, lng: 121.5442743 },
  { id: 2, name: "Good Luck Restaurant", lat: 25.041146, lng: 121.5421783 }
];

class Map extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const map = this.refs.map;
    this.map = new google.maps.Map(map, _mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this._handleMarkerClick.bind(this));
    this._registerListeners();
    this.MarkerManager.updateMarkers(restaurantDummies);
    this.redirect = this.redirect.bind(this);
  }

  componentDidUpdate(){
    this.MarkerManager.updateMarkers(restaurantDummies);
  }

  componentWillReceiveProps(nextProps){
  }

  _registerListeners(){
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west }
      };
    });

    google.maps.event.addListener(this.map, 'click', event => {
      const coords = _getCoordsObj(event.latLng);
      this._handleClick(coords);
    });
  }

  _handleMarkerClick(restaurant){
    // this.props.router.push(`restaurants/${restaurant.id}`);
    this.redirect(`restaurants/${restaurant.id}`);
    // $( "div#change-me" ).replaceWith( `<div id="change-me">${restaurant.name}</div>` );
  }

  _handleClick(coords){
    // this.props.router.push({
    //   pathname: "restaurants/new",
    //   query: coords
    // });
    console.log(coords);
  }

  redirect(route){
    this.props.router.replace(route);
  }

  render(){
    return (
      <div className="map-container">
        <div className="map" id="map-container" ref="map">Map</div>
      </div>
    );
  }
}

export default withRouter(Map);
