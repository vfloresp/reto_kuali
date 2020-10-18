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
import Button from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Col'
//imagen
import logo from './Pokedex.png';


// Algortimo de ordenamiento con base en el nombre
function quickSort(array) {
  if(array.length < 2) {
    return array;
  }
  var pivot = array[0];
  var lesserArray = [];
  var greaterArray = [];
  for (var i = 1; i < array.length; i++) {
    if ( array[i].name.localeCompare(pivot.name) >= 0 ) {
      greaterArray.push(array[i]);
    } else {
      lesserArray.push(array[i]);
    }
  }
  return quickSort(lesserArray).concat(pivot, quickSort(greaterArray));
}



class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  render(){
    return(
      <h1></h1>
    )
    
  }
};

//clase para llamda al sitio web 
class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10000")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.results
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Cargando...</div>;
    } else {
      const myArrMadeFromForEach = [];
      const itemsOrdered = quickSort(items);
      itemsOrdered.forEach(function(item){
        myArrMadeFromForEach.push(<Col md={2} className="box" >{item.name}</Col>);
        <Info url={item.url}></Info>
      });
      return (
        myArrMadeFromForEach
      );
    }
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
      <Col>
        <Row>
          <Pokemon></Pokemon>
        </Row>
        
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
