import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { Api } from '../lib/Api';

export default class Country extends Component {

  constructor(props) {
    super(props)

    this.state = {
      countries: []
    }
  }

  callback = () => {
    const { onCall } = this.props;
    const { countries } = this.state;

    if(typeof onCall === 'function'){
      onCall(countries)
    }
  }

  fetchCountries = async () => {
    const { data: countries } = await Api.getCountries();
    this.setState({ countries }, this.callback)
  }

  render() {
    const { countries } = this.state;
    
    const found = countries.length
    ? <div>Países encontrados con data de Coronavirus {countries.length}</div>
    : null

    return (
      <div>
        <Button
          onClick={this.fetchCountries}
          variant="contained" color="primary">
          Buscar Países
        </Button>
        {found}
      </div>
    )
  }
}