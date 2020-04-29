import React from 'react';
import PropTypes from 'prop-types';
import { FaMotorcycle, FaCar } from 'react-icons/fa';
import { Container, Logo, Header, NavTab } from './styles';
// GrCar RiMotorbikeLine
export default function DefaultLayout({ children }) {
  return (
    <Container>
      <Logo src="https://www.webmotors.com.br/assets/img/webmotors.svg?t=6136" />
      <Header>
        <div>
          <NavTab to="/" exact>
            <FaCar />
            <span>
              <p>COMPRAR</p>
              CARROS
            </span>
          </NavTab>
          <NavTab to="/search-motorcycle">
            <FaMotorcycle />
            <span>
              <p>COMPRAR</p>
              MOTOS
            </span>
          </NavTab>
        </div>

        <button type="button">Vender meu carro</button>
      </Header>
      {children}
      {/* <Content></Content> */}
    </Container>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
