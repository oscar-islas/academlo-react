import React from 'react';
import './App.css';
import Header from './components/header/header-component';
import PanelContainer from './components/panel/panel-container-component';
import CardContainer from './components/card-container/card-container-component';
import Container from '@material-ui/core/Container';

export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      //Clave:Valor
      personas: [],
      nombre: "Oscar",
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(arregloPersonas => this.setState({personas : arregloPersonas}))
  }

  //Al utilizar las funciones de flecha el contexto será el mismo en el que se declaró
  agregarTarjeta = () => {
    let personasModificadas = this.state.personas;
    personasModificadas.push({
      "id": 1,
      "name": this.state.nombre,
      "username": "Bret",
      "email": "Sincere@april.biz",    
    });
    this.setState({personas: personasModificadas});
  }

  // saludo(){
  //   Recuerda colocar el bind(this) dentro del constructor
  //   this.saludo = this.saludo.bind(this)
  //   console.log(this.state.nombre);
  // }

  obtenerPersona = (event) => {
    this.setState({nombre: event.target.value});
  }

  render(){
    return (
      <Container maxWidth="lg">
        <Header />
        <PanelContainer 
          funcionAgregar={this.agregarTarjeta} 
          funcionObtenerPersona={this.obtenerPersona} 
        />
        <CardContainer personas={this.state.personas} />
        {/* <button onClick={ this.saludo }>Boton ejemplo</button> */}
      </Container>
    )
  }
}