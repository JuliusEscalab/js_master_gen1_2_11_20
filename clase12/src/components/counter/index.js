import { Button, Paper } from '@material-ui/core'
import React, { Component } from 'react'
import './style.css'

export default class Contador extends Component {
  constructor(props){
    super(props)

    this.state = {
      contador: props.value || 0,
    }

    this.restarContador = this.restarContador.bind(this)
  }

  componentDidMount(){} // se llama después de levantado el UI

  callback = () => {
    const { onChange } = this.props;
    const { contador } = this.state;

    if(typeof onChange === 'function'){
      onChange(contador)
    }
  }

  sumarContador = () => {
    const { contador } = this.state;
    this.setState({ contador: contador + 1 }, this.callback)
  }

  restarContador(){ // sin el bind, una función normal pierde el contexto this
    const { contador } = this.state;
    this.setState({ contador: contador - 1 }, this.callback)
  }

  render(){
    const { contador } = this.state;
    return(
      <Paper className="contador">
        <Button onClick={this.sumarContador} variant="contained" color="primary">
          +
        </Button>
        <div className="contador-text">{contador}</div>
        <Button onClick={this.restarContador} variant="contained" color="secondary">
          -
        </Button>
      </Paper>
    )
  }
}