import React from 'react';
import styled from 'styled-components';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const graphContainer = styled.div`
  border: 1px solid green;
`;


  // border: 1px solid blue;
const Avg = styled.div`
  background: skyBlue;
  color: white;
  margin: 0;
  text-align: center;
  box-shadow: inset 0px -1px 2px grey;
`;
export default ({ data, color, units }) => {
  function average(data) {
   const sum = data.reduce( (datum, nextDatum) => {
     return datum + nextDatum;
   }); 
   return Math.floor(sum/data.length);
  }
  return (
    <graphContainer>
      <Sparklines height={120} width={180} data={data}>
        <SparklinesLine color={ color }/>
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <Avg>{average(data)} {units}</Avg>
    </graphContainer>
    );
};
