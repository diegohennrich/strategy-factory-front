import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;

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

  table,
  td {
    padding: 5px;
    width: 800px;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 21px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
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

export const SwotImg = styled.img`
  width: 800px;
  margin: auto;
`;
