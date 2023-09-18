import React, { useState } from 'react';
import styled from 'styled-components';
import Picker from '@emoji-mart/react';

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
  width: 15%;
  margin-right: 10px;
  padding: 8px;
`;

const InputConteudo = styled.input`
  width: 40%;
  padding: 8px;
`;

const BotaoEnviar = styled.button`
  width: 5%;
  background-color: #bb86fc;
  color: #fff;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
`;

const BotaoEmoji = styled.button`
  //background-color: #28a745;
  color: #fff;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
`;

const EnvioMensagem = ({ onEnviarMensagem }) => {
  const [remetente, setRemetente] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [mostrarSeletorEmoji, setMostrarSeletorEmoji] = useState(false);

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

  const handleAbrirSeletorEmoji = () => {
    setMostrarSeletorEmoji(true);
  };

  const handleFecharSeletorEmoji = () => {
    setMostrarSeletorEmoji(false);
  };

  const handleSelectEmoji = (emoji) => {
    setConteudo(conteudo + emoji.native);
    handleFecharSeletorEmoji();
  };

  const SeletorEmoji = styled(Picker)`
  //position: absolute;
  //top: -200px; /* Ajuste essa margem superior conforme necessário para posicionar o seletor acima do campo "Remetente" */
  //left: 0;
  //right: 10px;
`;

  return (
    <EnvioMensagemContainer>
      <InputRemetente
        type="text"
        placeholder="Remetente"
        value={remetente}
        onChange={(e) => setRemetente(e.target.value)}
      />
      <BotaoEmoji onClick={handleAbrirSeletorEmoji}>😊</BotaoEmoji>
      <InputConteudo
        type="text"
        placeholder="Conteúdo"
        value={conteudo}
        onChange={(e) => setConteudo(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <BotaoEnviar onClick={handleEnviar}>Enviar</BotaoEnviar>
      {mostrarSeletorEmoji && (
        <SeletorEmoji
          set="apple"
          onSelect={handleSelectEmoji}
          style={{ position: 'absolute', top: '1000px', right: '10px' }}
        />
      )}
    </EnvioMensagemContainer>
  );
};

export default EnvioMensagem;
