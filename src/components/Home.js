import React from 'react';
import { Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import Header from './Header';
import { Redirect } from 'react-router-dom';
import "./Login.css";
import logo from '../images/SpotifyLogo.png';
const Home = (props) => {
  
  const  REACT_APP_CLIENT_ID='61bd44747df24addaa20be17994d5b1b'
const REACT_APP_AUTHORIZE_URL= 'https://accounts.spotify.com/authorize'
const REACT_APP_REDIRECT_URL= 'http://localhost:3000/redirect'
  

  const handleLogin = () => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
  };

  const { isValidSession, location } = props;
  const { state } = location;
  const sessionExpired = state && state.session_expired;

  return (
    <React.Fragment>
      {/* {isValidSession() ? (
        <Redirect to="/dashboard" />
      ) : ( */}
       <div className="Login" >
          <Header />
          {sessionExpired && (
            <Alert variant="info" style={{backgroundColor:'grey',color:'white'}}>Time is out! Please login again.</Alert>
          )}
   
           <Button style={{height:50,width:'75%',backgroundColor:'black',}} variant="info" type="submit" onClick={handleLogin}> 
         Login
         <img style={{height:40,width:40,position:'relative',bottom:0,left:'35%'}} src={logo} alt="" />
            </Button>
      
            </div>
      
    
         
       {/* ) }; */}
      
    </React.Fragment>
  );
          }

export default connect()(Home);
