import React from 'react';
import { Card } from 'react-bootstrap';
import _ from 'lodash';
import music from '../images/music.jpeg';
import StarRating from "./StarRating"
const ArtistsList = ({ artists }) => {
  return (
    console.log('artists',artists),
    <React.Fragment>
      {Object.keys(artists).length > 0 && (
        <div className="artists">
          
          {artists.items.map((artist, index) => {
            return (
              <React.Fragment key={index}>
                <Card style={{ width: '18rem' }}>
                  <a
                    target="_blank"
                    href={artist.external_urls.spotify}
                    rel="noopener noreferrer"
                    className="card-image-link"
                  >
                    {!_.isEmpty(artist.images) ? (
                      <Card.Img
                        variant="top"
                        src={artist.images[0].url}
                        alt=""
                      />
                    ) : (
                      <img src={music} alt="" />
                    )}
                  </a>
                  <Card.Body>
                  <Card.Title>{artist.name}</Card.Title>
                    <Card>{artist.followers.total} followers</Card>
                    <StarRating totalStars={5}/>

                  </Card.Body>
                </Card>
              </React.Fragment>
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
};

export default ArtistsList;
