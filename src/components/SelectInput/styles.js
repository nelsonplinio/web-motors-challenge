import styled from 'styled-components';
import Async from 'react-select/async';
import ReactSelect from 'react-select';
import { darken } from 'polished';

export const Container = styled.label`
  border: solid 2px #f0f0f0;
  border-radius: 4px;
  padding: 8px;
  display: flex;
  flex: 1;
  margin-top: 16px;
  align-items: center;
  justify-content: flex-start;
  transition: border-color 0.2s;

  span {
    color: #888;
    font-size: 18px;
    margin-left: 8px;
    width: fit-content;
  }

  &:hover,
  &:focus-within {
    border-color: ${darken(0.1, '#f0f0f0')};
  }
`;

export const IconContainer = styled.div`
  margin-left: 8px;
  font-size: 20px;
  color: #f51344;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AsyncSelect = styled(Async)`
  background: transparent;
  border: none;

  font-size: 18px;
  color: #333;
  font-weight: bold;

  width: 100%;
  align-self: stretch;
`;

export const Select = styled(ReactSelect)`
  background: transparent;
  border: none;
  flex: 1;
  font-size: 18px;
  color: #333;
  font-weight: bold;
  width: 100%;
  align-self: stretch;
`;
