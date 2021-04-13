import React from 'react';


import { Card } from 'react-bootstrap';
import _ from 'lodash';
import music from '../images/music.jpeg';


const AlbumsList = ({ albums }) => {
  return (
    <React.Fragment>
      {Object.keys(albums).length > 0 && (
        <div className="albums">
          {albums.items.map((album, index) => {
            return (
              <React.Fragment key={index}>
                <Card style={{ width: '18rem' }}>
                  <a
                    target="_blank"
                    href={album.external_urls.spotify}
                    rel="noopener noreferrer"
                    className="card-image-link"
                  >
                    {!_.isEmpty(album.images) ? (
                      <Card.Img
                        variant="top"
                        src={album.images[0].url}
                        alt=""
                      />
                    ) : (
                      <img src={music} alt="" />
                    )}
                  </a>
                  <Card.Body>
                    <Card.Title>{album.name}</Card.Title>
                    <Card.Text>
                      <small>
                        {album.artists.map((artist) => artist.name).join(', ')}
                        </small> 
                    </Card.Text></Card.Body>
                    <Card.Text>
                    
                    </Card.Text>
                    <Card.Text>
                      {album.release_date}
                    </Card.Text>
                    <Card.Text>
                 {album.total_tracks} tracks
                    </Card.Text>
                     
                         
                  
                       <a
                    style={{flex:1, textDecoration: 'none', color: 'black' ,padding:20,top:0,backgroundColor:'#FFF8DC',textAlign:'center'}}
                      href={album.uri} >
                      Preview Spotify
                       </a>
                </Card>
              </React.Fragment>
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
};

export default AlbumsList;
