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
      personas: ["Rodrigo", "Juan", "Luisa", "Luis", "Eduardo"],
      carros: [],
      marcasZapatos: []
    }
  }

  render(){
    return (
      <Container maxWidth="lg">
        <Header />
        <PanelContainer />
        <CardContainer personas={this.state.personas} />
      </Container>
    )
  }
}