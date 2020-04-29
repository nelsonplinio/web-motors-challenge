import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  transition: 0.5s;
`;

export const CheckboxContainer = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  label {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: rgb(139, 140, 153);
  }
`;

export const Checkbox = styled.div`
  input[type='checkbox'] {
    opacity: 0;
  }

  label {
    position: relative;
    display: inline-block;

    padding-left: 22px;
  }

  label::before,
  label::after {
    position: absolute;
    content: '';

    display: inline-block;
  }

  label::before {
    height: 16px;
    width: 16px;

    border: 1px solid;
    left: 0px;

    top: 0px;
  }

  label::after {
    height: 5px;
    width: 9px;
    border-left: 2px solid;
    border-bottom: 2px solid;
    border-color: #f51344;
    transform: rotate(-45deg);
    transition: 0.4s;
    left: 4px;
    top: 4px;
  }

  input[type='checkbox'] + label::after {
    content: none;
  }

  input[type='checkbox']:checked + label::after {
    content: '';
  }
`;

export const Content = styled.div`
  background: #fff;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  padding: 22px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 4px rgba(200, 200, 200, 0.8);
  margin-bottom: 16px;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 16px;

  @media (max-width: 870px) {
    flex-direction: column;
  }
`;

export const Group = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 16px;

  & + & {
    margin-left: 16px;
  }

  & > div {
    display: flex;
    flex: 1;
    align-self: stretch;
  }

  @media (max-width: 870px) {
    & + & {
      margin-left: 0;
    }
  }
`;

export const InnerGroup = styled.div`
  & .margin-right {
    margin-right: 8px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    & .margin-right {
      margin-right: 0;
    }
  }
`;

export const AdvancedSearch = styled.button.attrs({
  type: 'button',
})`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  color: #f51344;
  font-weight: bold;
  font-size: 18px;

  @media (max-width: 870px) {
    order: 2;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 870px) {
    order: 1;
    width: 100%;
    margin-bottom: 16px;
    flex-direction: column;
  }
`;

export const CleanButton = styled.button.attrs({
  type: 'button',
})`
  color: #999;
  font-size: 16px;
  font-weight: bold;
  padding: 18px;
  background: none;
  border: none;
  margin-right: 8px;
  transition: color 0.3s;

  &:hover {
    color: ${darken(0.1, '#999')};
  }

  @media (max-width: 870px) {
    order: 2;
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'button',
})`
  background: #f51344;
  border: none;
  padding: 16px 120px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  border-radius: 4px;
  transition: background 0.3s;

  &:hover {
    background: ${darken(0.05, '#f51344')};
  }

  @media (max-width: 870px) {
    order: 1;
    width: 100%;
  }

  @media (max-width: 400px) {
    font-size: 16px;
  }
`;

export const List = styled.ul`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  align-items: center;

  @media (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
