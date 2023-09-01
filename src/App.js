import React, { useState } from 'react';
import ListaMensagens from './components/ListaMensagens';
import EnvioMensagem from './components/EnvioMensagem';
import Header from './components/Header/Header';
import { ThemeProvider } from 'styled-components';
import temaClaro from './components/Temas/TemaClaro'; // Importe seu tema claro
import temaEscuro from './components/Temas/TemaEscuro'; // Importe seu tema escuro

const App = () => {
  const [mensagens, setMensagens] = useState([]);
  const [theme, setTheme] = useState(temaClaro); // Inicie com o tema claro

  const toggleTheme = () => {
    // Alterne entre os temas ao clicar no botão Alternar Tema
    setTheme(theme === temaClaro ? temaEscuro : temaClaro);
  };

  const enviarMensagem = (mensagem) => {
    setMensagens([...mensagens, mensagem]);
  };

  const deletarMensagem = (mensagem) => {
    const novasMensagens = mensagens.filter((msg) => msg !== mensagem);
    setMensagens(novasMensagens);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header toggleTheme={toggleTheme} />
        <h1>Uaizap</h1>
        <ListaMensagens mensagens={mensagens} onDelete={deletarMensagem} />
        <EnvioMensagem onEnviarMensagem={enviarMensagem} />
      </div>
    </ThemeProvider>
  );
};

export default App;
