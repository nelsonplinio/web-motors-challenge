import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 16px;
`;

export const Group = styled.div`
  flex: 1;
  display: flex;
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
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
`;

export const SubmitButton = styled.button.attrs({
  type: 'button',
})`
  background: #f51344;
  border: none;
  padding: 16px 120px;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  border-radius: 4px;
  transition: background 0.3s;

  &:hover {
    background: ${darken(0.05, '#f51344')};
  }
`;
