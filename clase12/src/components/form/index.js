import { FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, TextField } from '@material-ui/core';
import React, { Component } from 'react';
import './style.css';

export default class Form extends Component {
  constructor(props){
    super(props)

    this.state = {
      nombre: props.nombre || '',
      apellido: props.apellido || '',
      radioButton: null,
    }
  }

  callback = () => {
    const { onChange } = this.props;
    if(typeof onChange === 'function'){
      onChange({...this.state})
    }
  }

  handlerCambioInput = (tipo, valor) => this.setState({ [tipo]: valor}, this.callback)

  handlerRadioButton = (_, valor) => this.setState({ radioButton: valor }, this.callback)

  render(){
    const { nombre, apellido, radioButton } = this.state;
    return(
      <Paper className="textInputs" elevation={2}>
        <div className="row">
          <TextField
            onChange={(evento) => this.handlerCambioInput('nombre', evento.target.value)}
            placeholder="Agrega un nombre"
            label="Nombre"
            variant="standard"
            value={nombre}
          />
          &nbsp;
          <TextField
            onChange={(evento) => this.handlerCambioInput('apellido', evento.target.value)}
            placeholder="Agrega un apellido"
            label="Apellido"
            variant="standard"
            value={apellido}
          />
        </div>
        <div className="row">
          <FormControl component="fieldset">
            <FormLabel component="legend">Activo</FormLabel>
            <RadioGroup 
              aria-label="activo"
              name="activo" 
              value={radioButton}
              onChange={this.handlerRadioButton}
            >
              <FormControlLabel value="Si" control={<Radio />} label="Si" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </div>
      </Paper>
    )
  }
}