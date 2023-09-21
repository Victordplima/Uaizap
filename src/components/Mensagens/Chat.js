import React from 'react';
import styled from 'styled-components';
import EnvioMensagem from './EnvioMensagem';
import ListaMensagens from './ListaMensagens';
const ChatContainer = styled.div`
`;

const Chat = ({ mensagens, onEnviarMensagem, onDelete }) => {
  return (
    <ChatContainer>
      <ListaMensagens mensagens={mensagens} onDelete={onDelete} />
      <EnvioMensagem onEnviarMensagem={onEnviarMensagem} />
    </ChatContainer>
  );
};

export default Chat;