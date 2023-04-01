import React, { Component } from 'react'

class Equipe extends Component{
  render(){
    return(
      <Sobre username={this.props.nome} cargo={this.props.cargo} idade={this.props.idade}/>
      
    );
  }
}

class Sobre extends Component{
  render(){
    return(
      <div>
      <h2>Óla me chamo: {this.props.nome}</h2>
      <h3>Sou: {this.props.cargo}</h3>
      <h3>Tenho: {this.props.idade} anos</h3>
      <hr/>
    </div>
   
    );
  }
}



function App(){
  return(
    <div>
      <h1> Conheça nossa equipe </h1>      
      <Equipe nome="Natan" cargo="Progamador" idade="21"/>
    </div>
  );
}
export default App;