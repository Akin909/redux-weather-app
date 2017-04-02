import React from 'react';
import styled from 'styled-components';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const graphContainer = styled.div`
border: 1px solid green;
`;
export default ({ data, color }) => {
  return (
        <graphContainer>
          <Sparklines height={120} width={180} data={data}>
            <SparklinesLine color={ color }/>
          </Sparklines>
        </graphContainer>
 );
};
