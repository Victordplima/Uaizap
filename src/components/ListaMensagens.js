import React from 'react';
import MensagemItem from './MensagemItem';

const ListaMensagens = ({ mensagens, onDelete }) => {
  return (
    <div>
      {mensagens.map((mensagem, index) => (
        <MensagemItem key={index} mensagem={mensagem} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ListaMensagens;
