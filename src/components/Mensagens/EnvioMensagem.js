import React, { useState } from 'react';
import styled from 'styled-components';
import iconeEnviar from '../../assets/iconeEnviar.png';

const EnvioMensagemContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 16px;
  background-color: #fff;
  z-index: 1000;
  display: flex;
  align-items: center;
  margin-left: 74px;
  background-color: ${props => props.theme.headerColor};
`;

const InputRemetente = styled.input`
  flex: 1;
  max-width: 15%;
  margin-right: 10px;
  padding: 8px;
`;

const InputConteudo = styled.input`
  flex: 3;
  max-width: 50%;
  padding: 8px;
`;

const EnviarIcone = styled.img`
  flex: 0.2;
  width: 24px;
  height: 24px;
`;

const BotaoEnviar = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #bb86fc;
  border: none;
  cursor: pointer;
  position: relative;
  margin-left: 10px;
`;

const EnvioMensagem = ({ onEnviarMensagem }) => {
  const [remetente, setRemetente] = useState('');
  const [conteudo, setConteudo] = useState('');

  const handleEnviar = () => {
    if (remetente.trim() !== '' && conteudo.trim() !== '') {
      const dataHora = new Date();
      onEnviarMensagem(remetente, conteudo, dataHora);
      setRemetente('');
      setConteudo('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleEnviar();
    }
  };


  return (
    <EnvioMensagemContainer>
      <InputRemetente
        type="text"
        placeholder="Remetente"
        value={remetente}
        onChange={(e) => setRemetente(e.target.value)}
      />

      <InputConteudo
        type="text"
        placeholder="Conteúdo"
        value={conteudo}
        onChange={(e) => setConteudo(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <BotaoEnviar onClick={handleEnviar}>
        <EnviarIcone src={iconeEnviar} alt="Enviar" />
      </BotaoEnviar>

    </EnvioMensagemContainer>
  );
};

export default EnvioMensagem;
