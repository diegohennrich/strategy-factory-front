import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;

  table,
  td {
    border: solid 1px black;
    padding: 5px;
    width: 400px;
    text-align: center;
  }
  > div {
    margin-top: 40px;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      background: #29166f;
      border: 0;
      border-radius: 5px;

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
  }
`;

export const Title = styled.h1`
  font-size: 21px;
`;

export const Lista = styled.ul`
  width: 90%;
  margin: auto;
`;
