import React from 'react';
import Line from '../components/charts/Line';
import Dropdown from '../components/dropdown';
import { Api } from '../lib/Api';
import Country from './Country';

export default class Fetch extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      countries: [],
      selectedCountry: '',
      selectedCountryData: undefined,
    }
  }

  onCountriesFetch = (countries) => {
    const sortedCountries = countries.sort((a, b) => a.Country.localeCompare(b.Country))
    console.log({ sortedCountries })
    this.setState({ countries })
  }

  onChangeDropdown = ({ target: { value } }) => this.fetchDataByCountry(value)

  fetchDataByCountry = async (countrySlug) => {
    const { data } = await Api.getCountryDataBySlug(countrySlug);
    console.log({ data })
    this.setState({ 
      selectedCountryData: data,
      selectedCountry: countrySlug,
    });
  }

  render(){
    const { countries, selectedCountry, selectedCountryData } = this.state;
    console.log({ selectedCountryData })
    return(
      <div>
        <Country onCall={this.onCountriesFetch} />
        <Dropdown selected={selectedCountry} onChange={this.onChangeDropdown} countries={countries} />
        <Line data={selectedCountryData}/>
      </div>
    )
  }
}