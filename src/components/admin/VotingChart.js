import React, { useState } from 'react';
import { PieChart} from 'react-minimal-pie-chart';

function FullOption(props) {
  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState(undefined);

  const data = props.data.map((entry, i) => {
    if (hovered === i) {
      return {
        ...entry,
        color: 'grey',
      };
    }
    return entry;
  });

  const lineWidth = 60;

  return (
    <PieChart
      style={{
        fontSize: '10px'
      }}
      radius={40}
      segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
      segmentsShift={(index) => (index === selected ? 2 : 0.5)}
      animate
      onClick={(_, index) => {
        setSelected(index === selected ? undefined : index);
      }}
      label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
      labelPosition={100 - lineWidth / 2}
      labelStyle={{
        fill: '#fff',
        opacity: 0.75,
        pointerEvents: 'none',
      }}
      lineWidth={60}
      onMouseOver={(_, index) => {
        setHovered(index);
      }}
      onMouseOut={() => {
        setHovered(undefined);
      }}
      data={data}
    />
    
  );
}

export default FullOption;