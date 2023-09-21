import React from 'react';
import styled from 'styled-components';

const GrupoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  background-color: ${props => props.theme.grupoColor};
  border-radius: 8px;
  padding: 25px;
  margin-bottom: 10px;
  cursor: pointer;
`;

const FotoGrupo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const DetalhesGrupo = styled.div`
  display: flex;
  flex-direction: column;
`;

const NomeGrupo = styled.div`
  font-weight: bold;
`;

const UltimaMensagem = styled.div`
  color: #888;
  font-size: 14px;
`;

const Grupo = ({ foto, nome, ultimaMensagem }) => {
  return (
    <GrupoContainer>
      <FotoGrupo src={foto} alt={nome} />
      <DetalhesGrupo>
        <NomeGrupo>{nome}</NomeGrupo>
        <UltimaMensagem>{ultimaMensagem}</UltimaMensagem>
      </DetalhesGrupo>
    </GrupoContainer>
  );
};

export default Grupo;
