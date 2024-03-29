import styled from 'styled-components';

export const Container = styled.li`
  border: solid 1px #eee;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  background: #fff;
  min-width: 265px;
  max-width: 350px;
  min-height: 420px;
  overflow: hidden;
  margin: auto;
  box-shadow: 3px 3px 5px rgba(100, 100, 100, 0.1);

  transition: transform 0.3s;

  img {
    height: 140px;
    width: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.02) translateY(-5px);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  justify-content: space-between;
  flex: 1;

  h2 {
    font-size: 15px;
  }

  h3 {
    font-size: 15px;
    color: rgb(139, 140, 153);
    font-weight: 500;
  }

  span {
    color: rgb(139, 140, 153);
    font-size: 15px;
  }

  strong {
    display: block;
    white-space: nowrap;
    font-weight: 500;
    font-size: 22px;
    margin-bottom: 16px;
    margin-top: auto;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
