import React, { useState } from 'react';

const EnvioMensagem = ({ onEnviarMensagem }) => {
  const [remetente, setRemetente] = useState('');
  const [conteudo, setConteudo] = useState('');

  const handleEnviar = () => {
    if (remetente.trim() !== '' && conteudo.trim() !== '') {
      onEnviarMensagem({ remetente, conteudo });
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
    <div>
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
    </div>
  );
};

export default EnvioMensagem;
