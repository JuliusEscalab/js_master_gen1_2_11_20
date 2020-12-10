import { format} from 'date-fns'

export const getLastValue = ({
  countryData = [],
  type = '',
}) => countryData.length ? countryData.slice(-1)[0][type] : 0

export const getStatusByType = ({
  countryData = [],
  type = '',
}) => ({
    id: type,
    data: countryData.map(
      data => ({ 
        x: format(new Date(data.Date), 'yyyy-MM-dd'),
        y: data[type]
      })
    )
  })
