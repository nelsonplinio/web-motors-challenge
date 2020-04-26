import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  width: 100%;
  max-width: 1550px;
  margin: 16px auto;
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

    p {
      font-weight: 600;
      font-size: 12px;
      color: #666 !important;
    }
  }

  &:hover {
    color: #f51344;
    border-bottom-color: #f51344;
  }
`;

export const Content = styled.div`
  background: #fff;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 4px rgba(200, 200, 200, 0.8);
`;
