import React from 'react';
import styled from 'styled-components';

const MensagemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isMe ? 'flex-end' : 'flex-start')};
  margin-bottom: 16px;
`;

const MensagemTexto = styled.div`
  background-color: ${(props) => (props.isMe ? '#007bff' : '#e5e5ea')};
  color: ${(props) => (props.isMe ? '#fff' : '#333')};
  padding: 8px;
  border-radius: 8px;
  max-width: 70%;
  word-wrap: break-word;
`;

const ListaMensagens = ({ mensagens }) => {
  return (
    <div>
      {mensagens.map((mensagem, index) => (
        <MensagemContainer key={index} isMe={mensagem.remetente === 'eu'}>
          <MensagemTexto isMe={mensagem.remetente === 'eu'}>
            {mensagem.remetente !== 'eu' && `${mensagem.remetente}:`} {mensagem.conteudo}
          </MensagemTexto>
        </MensagemContainer>
      ))}
    </div>
  );
};

export default ListaMensagens;
