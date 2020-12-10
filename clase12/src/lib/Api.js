import Axios from 'axios'

const BaseApi = Axios.create({ baseURL: 'https://api.covid19api.com'})

export const Api = {
  getCountries: () => BaseApi({
    method: 'GET',
    url: '/countries'
  }),
  getCountryDataBySlug: (slug) =>
    BaseApi({
      method: 'GET',
      url: `/country/${slug}`
    })
}