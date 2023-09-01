import React from 'react';

const MensagemItem = ({ mensagem, onDelete }) => {
  const handleDoubleClick = () => {
    onDelete(mensagem);
  };

  return (
    <div onDoubleClick={handleDoubleClick}>
      <strong>{mensagem.remetente}</strong>: {mensagem.conteudo}
    </div>
  );
};

export default MensagemItem;
