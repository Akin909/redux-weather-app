import styled from 'styled-components';

const Table = styled.table`
  margin: 1rem 0;
  padding: 0;
  width: 80%;
  height: auto;
  &hover:
    background: grey;
`;
const Thead = styled.thead`
  border-bottom: 1px solid grey;
  color: white;
  margin: 0.3rem;
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
  height: 100%;
  width: 8rem;
  background-color: white;
  padding: 0.2rem;
  color: skyBlue;
  vertical-align: middle !important;
  text-align: center !important;
  `;
const TdMap = styled.td`
  height: 200px;
  width: 250;
  padding: 0.2rem;
  `;

const Th = styled.th`
  padding: 0.2rem;
  vertical-align: middle !important;
  text-align: center !important;
`;

export { Td, TdMap, Th, Tbody, Tr, Thead, Table };
