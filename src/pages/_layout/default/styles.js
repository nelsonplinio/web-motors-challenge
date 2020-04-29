import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 933px;
  margin: 16px auto;
  overflow: hidden;
  @media (max-width: 600px) {
    align-items: center;
  }
`;

export const Logo = styled.img`
  width: 280px;
`;

export const Header = styled.div`
  margin-top: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  div {
    display: flex;
    align-items: center;
    @media (max-width: 600px) {
      width: 100%;
    }
  }

  button {
    background: transparent;
    color: #f57c00;
    border: solid 2px #f57c00;
    border-radius: 4px;
    padding: 10px 26px;
    font-size: 18px;
    font-weight: bold;

    transition: color 0.4s, border-color 0.4s;
    &:hover {
      color: ${darken(0.05, '#F57C00')};
      border-color: ${darken(0.05, '#F57C00')};
    }

    @media (max-width: 600px) {
      display: none;
    }
  }
`;

export const NavTab = styled(NavLink).attrs({
  activeStyle: {
    color: '#f51344',
    borderBottomColor: '#f51344',
  },
})`
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 8px 26px;
  border-bottom: solid 2px #aaa;
  color: #666;
  transition: 0.2s;

  svg {
    font-size: 28px;
    margin-right: 16px;
  }

  span {
    font-size: 28px;
    @media (max-width: 400px) {
      font-size: 20px;
    }

    @media (max-width: 330px) {
      font-size: 16px;
      p {
        font-size: 10px;
      }
    }

    p {
      font-weight: 600;
      font-size: 12px;
      color: #666 !important;

      @media (max-width: 330px) {
        font-size: 10px;
      }
    }
  }

  &:hover {
    color: #f51344;
    border-bottom-color: #f51344;
  }

  @media (max-width: 600px) {
    flex: 1;
    align-content: center;
    justify-content: center;
  }
`;
