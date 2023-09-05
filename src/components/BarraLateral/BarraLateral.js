// BarraLateral.js
import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 250px;
  background-color: ${props => props.theme.backgroundColor}; /* Use o tema para estilização */
  color: ${props => props.theme.textColor}; /* Use o tema para estilização */
  padding: 20px;
  height: 100%;
  position: fixed;
  left: 0;
  top: 60px;
  bottom: 0;
`;

const BarraLateral = ({ theme }) => {
  return (
    <SidebarContainer theme={theme}>
      {/* Conteúdo da barra lateral */}
      <h2>Minha Barra Lateral</h2>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </SidebarContainer>
  );
};

export default BarraLateral;
