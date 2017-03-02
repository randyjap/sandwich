import React from 'react';
import { Link } from 'react-router';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

class Splash extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const CardExampleWithAvatar = () => (
      <Card style={{marginBottom: "10px"}}>
        <CardHeader
          title="URL Avatar"
          subtitle="Subtitle"
          avatar="http://www.randyjap.com/images/avatar.jpg"
        />
        <CardMedia
          overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
        >
          <img src="http://68.media.tumblr.com/f264b862a6bf8ba5b9f06bf8bf4ea635/tumblr_na0kcnVUoi1st5lhmo1_1280.jpg" />
        </CardMedia>
        <CardTitle title="Card title" subtitle="Card subtitle" />
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions>
      </Card>
    );

    const Article = () => (
      <Paper zDepth={1} className="article">
        <div>
          <img className="article-image" src="https://media-cdn.tripadvisor.com/media/photo-s/03/c4/95/72/carne-y-vino-restaurant.jpg"/>
        </div>
        <div className="article-description">
          <p>NEWS</p>
          <p>Headline! So new news!</p>
          5 hours ago
        </div>
      </Paper>
    );

    return (
      <div className="main">
        <Article />
        <Article />
        <CardExampleWithAvatar />
        <CardExampleWithAvatar />
      </div>
    );
  }
}

export default Splash;
