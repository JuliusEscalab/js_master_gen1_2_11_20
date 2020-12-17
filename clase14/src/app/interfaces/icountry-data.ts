export interface ICountryData {
  CountryCode: string;
  Province?: string;
  City?: string;
  CityCode?: string;
  Lat: number;
  Lon: number;
  Confirmed: number;
  Deaths: number;
  Recovered: number;
  Active: number;
  Date: Date;
}
