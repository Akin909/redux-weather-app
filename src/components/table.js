import styled from 'styled-components';

  // border: 1px solid grey;
const Table = styled.table`
  margin: 1rem 0;
  width: 80%;
  &hover:
    background: grey;
`;
const Thead = styled.thead`
  border-bottom: 1px solid grey;
  color: white;
`;
const Tr = styled.tr`
  border-bottom: 1px solid grey;
  background-color: #00599D;
`;

const Tbody = styled.tbody`
  border-bottom: 1px solid grey;
  background-color: yellow;
`;
const Td = styled.td`
  background-color: white;
  color: skyBlue;
  `;

export { Td, Tbody, Tr, Thead, Table };
