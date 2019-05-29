import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react';
import { Carousel } from 'react-responsive-carousel';

class ApartmentCard extends React.Component {

  render() {
    return (
      <Card className="apt-card">
        <Image>
          <Carousel showIndicators={false} showThumbs={false} infiniteLoop={true}>
            {this.props.photos.filter(imageUrl => !!imageUrl).map(imageUrl =>
              <div key={imageUrl} className="image-banner"><img className="apt-banner" src={imageUrl} /></div>
            )}
          </Carousel>
        </Image>
        <Card.Content>
          <Card.Header>{this.props.name}</Card.Header>
          <Card.Meta>
            <span className='date'>{this.props.bedrooms}</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='dollar sign' />
            {this.props.rent}
          </a>
        </Card.Content>
      </Card>
    );
  }
}

export default ApartmentCard;
