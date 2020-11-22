//import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Aboutme from './components/Aboutme';
import Contactme from './components/Contactme';
import Porfolio from './components/Porfolio';



class App extends Component{
  
  render(){
  return (
    <>
    <Navbar></Navbar>
    <Aboutme></Aboutme>
    <Contactme></Contactme>
    <Porfolio></Porfolio>
    <Footer></Footer>
   </>    
  );
}
}

export default App;
