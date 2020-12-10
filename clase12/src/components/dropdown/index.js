import { FormControl, InputLabel, Select } from '@material-ui/core'
import './style.css'

const Dropdown = ({ selected = '', countries = [], onChange = () => {} }) => countries.length 
  ? (
    <div className="dropdown">
      <FormControl variant="filled">
        <InputLabel htmlFor="filled-age-native-simple">Países</InputLabel>
        <Select
          native
          value={selected}
          onChange={onChange}
        >
          <option aria-label="None" value=""></option>
          {
            countries.map(({ Country, Slug}, index) => (
              <option key={`${Slug}-${index}`} value={Slug}>{Country}</option>
            ))
          }
        </Select>
      </FormControl>
    </div>
  )
  : null

export default Dropdown;
