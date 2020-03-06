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
      nombre: "",
      buscarPersona: "",
      respaldoPersonas: []
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(arregloPersonas => {        
        this.setState({personas : arregloPersonas});
        this.setState({respaldoPersonas : arregloPersonas});
      }
    )
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
    this.setState({respaldoPersonas: personasModificadas});    
  }

  // saludo(){
  //   Recuerda colocar el bind(this) dentro del constructor
  //   this.saludo = this.saludo.bind(this)
  //   console.log(this.state.nombre);
  // }

  obtenerPersona = (event) => {    
    this.setState({nombre: event.target.value});
  }

  buscarPersona = (event) => {
    //Crear una variable para guardar todas las personas que actualmente están en la aplicación
    // Y para así poder trabajar sobre ese arreglo
    let respaldoPersonas = this.state.respaldoPersonas;    
    //Voy a filtrar el arreglo para que me regresen las personas que cumplan con la expresión 
    // persona.name.includes(event.target.value)
    let arregloPersonasModificadas = respaldoPersonas.filter( 
      persona => persona.name.includes(event.target.value)
    );
    //En este punto voy a actualizar el estado por el arreglo de personas filtradas
    this.setState({personas: arregloPersonasModificadas});
  }

  borrarPersona = (event, id) => {
    console.log("Estás tratando de borrar la tarjeta no.", id);
  }

  render(){
    return (
      <Container maxWidth="lg">
        <Header />
        <PanelContainer 
          funcionAgregar={this.agregarTarjeta} 
          funcionObtenerPersona={this.obtenerPersona}
          funcionBuscarPersona={this.buscarPersona} 
        />
        <CardContainer 
          personas={this.state.personas}
          funcionBorrarPersona={this.borrarPersona}
        />      
      </Container>
    )
  }
}