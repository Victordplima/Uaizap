import React from 'react';
import styled from 'styled-components';

const MensagemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isMe ? 'flex-end' : 'flex-start')};
  margin-bottom: 16px;
  margin-left: ${(props) => (props.isMe ? 'auto' : '0')};
  margin-right: ${(props) => (props.isMe ? '0' : 'auto')};
`;

const MensagemTexto = styled.div`
  background-color: ${(props) => (props.isMe ? props.theme.roxoColor : props.theme.containerMensagemColor)};
  color: ${(props) => (props.isMe ? props.theme.textColor : props.theme.textColor)};
  padding: 8px;
  border-radius: 8px;
  max-width: 70%;
  word-wrap: break-word;
  position: relative;
  margin-left: ${(props) => (props.isMe ? '0' : '85px')};
`;

const RemetenteNome = styled.div`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 4px;
  color: ${(props) => (props.isMe ? props.theme.roxoColor : props.theme.roxoColor)};
`;

const HorarioMensagem = styled.div`
  font-size: 12px;
  color: ${(props) => (props.isMe ? '#ccc' : '#888')};
  text-align: ${(props) => (props.isMe ? 'right' : 'right')};
`;

const ListaMensagens = ({ mensagens, onDelete }) => {
  const handleDeletarMensagem = (index) => {
    onDelete(index);
  };

  return (
    <div>
      {mensagens.map((mensagem, index) => (
        <MensagemContainer
          key={index}
          isMe={mensagem.remetente.toLowerCase().trim() === 'eu'}
          onDoubleClick={() => handleDeletarMensagem(index)}
        >
          <MensagemTexto isMe={mensagem.remetente.toLowerCase().trim() === 'eu'}>
            {mensagem.remetente.toLowerCase().trim() !== 'eu' && (
              <RemetenteNome isMe={mensagem.remetente.toLowerCase().trim() === 'eu'}>
                {mensagem.remetente}:
              </RemetenteNome>
            )}
            {mensagem.conteudo}
            <HorarioMensagem isMe={mensagem.remetente.toLowerCase().trim() === 'eu'}>
              {mensagem.horario}
            </HorarioMensagem>
          </MensagemTexto>
        </MensagemContainer>
      ))}
    </div>
  );
};

export default ListaMensagens;
