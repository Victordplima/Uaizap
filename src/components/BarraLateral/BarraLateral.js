import React from 'react';
import styled from 'styled-components';
import Grupo from '../Mensagens/Grupo';
import fotoGrupo from '../../assets/fotoGrupo.jpg'

const SearchBar = styled.input`
  width: 80%;
  margin: 10px 0;
  padding: 8px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
`;

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 290px;
  background-color: ${props => props.theme.barraLateralColor};
  color: ${props => props.theme.textColor};
  height: 100%;
  position: fixed;
  left: 0;
  top: 60px;
  bottom: 0;
`;

const BarraLateral = ({ theme }) => {
  return (
    <SidebarContainer theme={theme}>
      <h2>Grupos</h2>
      <SearchBar type="text" placeholder="Pesquisar" />
      <Grupo
        foto= {fotoGrupo}
        nome="Uaizap"
        ultimaMensagem="Última mensagem enviada"
      />
    </SidebarContainer>
  );
};

export default BarraLateral;
