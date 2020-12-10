import React, {Component} from 'react';
import './style.css'
import { Paper } from "@material-ui/core";
import Contador from '../counter';
import Form from '../form';

export default class EjemploProps extends Component{

  constructor(props){
    super(props)

    this.state = {
      valorContador: 5,
      formNombre: 'Julio',
      formApellido: 'Orellana',
      formRadioButton: null,
    }
  }

  onChangeValorContador = (newValue) => this.setState({ valorContador: newValue})

  onChangeForm = (form) => {
    const {
      nombre,
      apellido,
      radioButton,
    } = form;

    this.setState({
      formNombre: nombre,
      formApellido: apellido,
      formRadioButton: radioButton 
    })
  }

  render(){
    const {
      valorContador,
      formNombre,
      formApellido,
      formRadioButton,
    } = this.state;
    return(
      <>
        <Paper className="props" elevation={3}>
          Ejemplo Props 
          <div>
            <p>Prop contador: {valorContador}</p>
            <div className="form">
              <p>Prop Form Nombre: {formNombre}</p>
              <p>Prop Form Apellido: {formApellido}</p>
              <p>Prop Form RadioButton: {formRadioButton}</p>
            </div>
          </div>
        </Paper>
        <Contador value={valorContador} onChange={this.onChangeValorContador} abc="abc" />
        <Form nombre={formNombre} apellido={formApellido} onChange={this.onChangeForm}/>
      </>
    )
  }
}