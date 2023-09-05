import React, { useState } from 'react';
import styled from 'styled-components';

const EnvioMensagemContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 16px; /* Adicione algum espaço ao redor do componente */
  background-color: #fff; /* Adicione uma cor de fundo, se desejar */
  z-index: 1000; /* Garanta que ele esteja sobreposto a outras partes da página */
`;

const EnvioMensagem = ({ onEnviarMensagem }) => {
  const [remetente, setRemetente] = useState('');
  const [conteudo, setConteudo] = useState('');

  const handleEnviar = () => {
    if (remetente.trim() !== '' && conteudo.trim() !== '') {
      onEnviarMensagem(remetente, conteudo); // Passa remetente e conteudo como strings
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
      <input
        type="text"
        placeholder="Remetente"
        value={remetente}
        onChange={(e) => setRemetente(e.target.value)}
        style={{ width: '30%' }}
      />
      <input
        type="text"
        placeholder="Conteúdo"
        value={conteudo}
        onChange={(e) => setConteudo(e.target.value)}
        onKeyDown={handleKeyDown}
        style={{ width: '70%' }}
      />
      <button onClick={handleEnviar}>Enviar</button>
    </EnvioMensagemContainer>
  );
};

export default EnvioMensagem;
