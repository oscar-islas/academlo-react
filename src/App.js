import React from 'react';
import './App.css';
import Header from './components/header/header-component';
import PanelContainer from './components/panel/panel-container-component';
import CardContainer from './components/card-container/card-container-component';

export default function App(){

  return (
    <div>
      <Header />
      <PanelContainer />
      <CardContainer />
    </div>
  )
  
}