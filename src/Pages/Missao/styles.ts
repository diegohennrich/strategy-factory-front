import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

export const Title = styled.h1`
  font-size: 21px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;

  button {
    background: #29166f;
    border: 0;
    border-radius: 5px;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    padding: 10px 20px;
    font-size: 16px;

    &:hover {
      background: ${shade(0.6, '#FFFFFF')};
    }
  }
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  > div {
    width: 150px;
    text-align: center;
  }

  span {
    font-weight: bold;
    font-size: 20px;
  }
`;
