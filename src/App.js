import React, {Component} from 'react';
import './App.css';
import {Card} from './components/card/card-component';

class App extends Component{
  constructor(){
    super();
    this.state = {
      personas: [
        {
          name: "Oscar Islas",
          email: "oislasreyes@gmail.com"
        },
        {
          name: "Eduardo",
          email: "eduardo@gmail.com"
        }
      ],
      nombre: "Mi primera app"
    }
    let {personas, nombre} = this.state;
    console.log(nombre);
  }

  render(){
    return(
      <div className="App">
        <Card />
        {this.state.personas.map( persona => <h1>{persona.name}</h1>)}        
      </div>
      
    );
  } 
}

export default App;
