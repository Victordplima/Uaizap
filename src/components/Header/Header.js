import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/uaizap.png';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.headerBackground};
  color: ${props => props.theme.headerText};
  padding: 16px;
  width: 100%; /* Faz o Header ocupar toda a largura da tela */
  position: fixed; /* Fixa o Header no topo da tela */
  top: 0; /* Coloca o Header no topo da tela */
  left: 0; /* Alinha o Header à esquerda */
  z-index: 999; /* Define uma camada superior para o Header (pode ser ajustada) */
`;

const Logo = styled.img`
  height: 40px; /* Defina a altura desejada para a logo */
`;

const ToggleButton = styled.button`
  background-color: transparent;
  color: ${props => props.theme.toggleButtonText};
  border: none;
  cursor: pointer;
  font-size: 16px; /* Defina o tamanho de fonte desejado */
  padding: 8px 16px; /* Defina o preenchimento desejado */
  border-radius: 5px; /* Adicione um pouco de arredondamento às bordas */
`;

const Header = ({ toggleTheme }) => {
    return (
        <HeaderContainer>
            <Logo src={logo} alt="Logo" />

            <ToggleButton onClick={toggleTheme}>Alternar Tema</ToggleButton>
        </HeaderContainer>
    );
};

export default Header;
