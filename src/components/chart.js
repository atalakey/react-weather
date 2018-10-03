import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

const average = (data) => {  
  return _.round(_.sum(data)/data.length);
};

const Chart = ({ data, color, units }) => {
  return (
    <div>
      <Sparklines data={data} width={180} height={120}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(data)} {units}</div>
    </div>
  );
};

export default Chart;
