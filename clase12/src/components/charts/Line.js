import { ResponsiveLine } from '@nivo/line';
import React from 'react';
import { colors } from '../../config/colors';
import { getLastValue, getStatusByType } from '../../lib/utils'
import './style.css'

const Line = ({ data = []}) => data.length ? (
    <div className="outer">
      <div className="chart">
        <div className="lastValues">
          <div>Total Confirmados: {getLastValue({ countryData: data, type: 'Confirmed'})}</div>
          <div>Total Activos: {getLastValue({ countryData: data, type: 'Active'})}</div>
          <div>Total Fallecidos: {getLastValue({ countryData: data, type: 'Deaths'})}</div>
          <div>Total Recuperados: {getLastValue({ countryData: data, type: 'Recovered'})}</div>
        </div>

        <ResponsiveLine
          data={[
            getStatusByType({ countryData: data, type: 'Confirmed'}),
            getStatusByType({ countryData: data, type: 'Active'}),
            getStatusByType({ countryData: data, type: 'Deaths'}),
            getStatusByType({ countryData: data, type: 'Recovered'}),
          ]}

          xScale={{
            type: 'time',
            format: '%Y-%m-%d',
            precision: 'day'
          }}
          xFormat="time:%Y-%m-%d"
          yScale={{
            type: 'linear'
          }}
          margin={{
            top: 60,
            bottom: 60,
            left: 100,
            right: 100,
          }}
          curve="step"
          colors={[
            colors.blue,
            colors.yellow,
            colors.red,
            colors.green
          ]}
          axisLeft={{
            tickRotation: 20,
            tickSize: 3,
            legend: 'Casos',
            legendOffset: -60,
            legendPosition: 'middle',
          }}
          axisBottom={{
            tickRotation: 50,
            format: '%b %d',
            tickValues: 'every 1 month',
            legend: 'Fechas',
            legendOffset: 40,
            legendPosition: 'middle'
          }}
          enableGridX
          enableGridY
          enableArea
          areaOpacity={0.2}
          legends={[
            {
              anchor: 'top-left',
              translateX: 20,
              translateY: 10,
              direction: 'column',
              itemWidth: 100,
              itemHeight: 26,
              itemOpacity: 0.8,
              symbolShape: 'circle',
              onClick: (data, event) => {
                console.log(data, event.clientX, event.clientY)
              },
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemBackground: '#eeeeee',
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
          animated
          motionStiffness={150}
          motionDamping={15}
          pointBorderWidth={1}
          pointBorderColor={{
            from: 'color',
            modifiers: [['darker', 0.3]]
          }}
          useMesh
        />
      </div>
    </div>
  ) : null;

export default Line;