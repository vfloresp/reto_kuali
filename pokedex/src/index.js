//imports de react
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//imports bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//imagen
import logo from './Pokedex.png';

class Pokemon extends React.Component {
  

  render() {
    return (
      <h1></h1>
    );
  }
}

ReactDOM.render(
  <Container style={{maxWidth:'100%'}}>
    <Row style={{backgroundColor: "#3B4CCA",justifyContent:"center"}} >
        <img style={{width:318,height:167}}
        src={logo}
        /> 
    </Row>
    <Row style={{ height: '100%', width:'100%', position: "absolute"}}>
      <Col md={1} style={{backgroundColor: "#FF0000"}}></Col>
      <Col  style={{textAlign:"center"}}>
        <Pokemon></Pokemon>
      </Col>
      <Col md={1} style={{backgroundColor: "#FF0000"}}></Col>
    </Row>
  </Container>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
