import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../assets/uaizap.png';
import ligado from '../../assets/ligado.png';
import desligado from '../../assets/desligado.png';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.headerColor};
  color: ${props => props.theme.headerText};
  padding: 16px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;

const Logo = styled.img`
  height: 40px;
`;

const ToggleButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 8px;
  border-radius: 20px;
  position: relative;
  width: 60px;
  height: 30px;
  margin-right: 20px;

  .track {
    position: absolute;
    top: 50%;
    left: 0;
    width: 60px;
    height: 30px; /* Aumente a altura para cobrir o botão */
    background-color: ${props => (props.switchOn ? '#ccc' : '#4CAF50')};
    transform: translateY(-50%);
    transition: background-color 0.3s;
    border-radius: 20px; /* Adicione bordas arredondadas */
  }

  .slider {
    position: absolute;
    top: 2px;
    left: ${props => (props.switchOn ? '32px' : '2px')};
    width: 26px;
    height: 26px;
    border-radius: 50%;
    transition: 0.3s;
    background-image: url(${props => (props.switchOn ? ligado : desligado)});
    background-size: cover;
  }
`;






const Header = ({ toggleTheme }) => {
  const [switchOn, setSwitchOn] = useState(false);

  const toggleSwitch = () => {
    setSwitchOn(!switchOn);
    toggleTheme(); // Chame a função para alternar o tema
  };

  return (
    <HeaderContainer>
      {/* Use a imagem da logo importada */}
      <Logo src={logo} alt="Logo" />
      <ToggleButton
        onClick={toggleSwitch}
        switchOn={switchOn}
      >
        <span className="track"></span> {/* Adicione esta linha */}
        <span className="slider"></span>
      </ToggleButton>
    </HeaderContainer>
  );
};

export default Header;
