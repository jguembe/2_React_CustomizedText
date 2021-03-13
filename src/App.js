import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ValidationComponent from './components/ValidationComponent/ValidationComponent';
import CharComponent from './components/CharComponent/CharComponent';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      longitud: 0,
      listaletras: null,
    }
  }

  recalcular = (event, id) =>{
    this.setState({
      longitud: event.target.value.length,
      listaletras: event.target.value,
    });
  }

  borrarletra = (id) => {
    let listaletrasArray = Array.from(this.state.listaletras);
    listaletrasArray.splice(id,1);
    this.setState({ listaletras: listaletrasArray.join('') });
  }

  render() {
    let listaletras = null;
    if (this.state.listaletras!=null){
      listaletras = (
        <div>
          {Array.from(this.state.listaletras).map((letra, id) => {
              return <CharComponent
                        key={id}
                        letra={letra}
                        borrar={() => this.borrarletra(id)}
                    />
          })}
        </div>
      )
    }


    return (
      <div className="App">
        <Header titulo="REACT EJERCICIO 2" />
        <input type="text" onChange={this.recalcular}></input>
        <h4> Longitud del texto: {this.state.longitud}</h4>
        <ValidationComponent
          longitud1={this.state.longitud}
        />
      {listaletras}
      </div>
    )
  }

}

export default App;
