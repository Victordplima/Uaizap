import React from 'react';

const Mensagem = ({ remetente, conteudo }) => {
  return <div>{remetente}: {conteudo}</div>;
};

export default Mensagem;
