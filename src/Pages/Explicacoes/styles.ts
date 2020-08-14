import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  table,
  td {
    border: solid 1px black;
    padding: 5px;
    width: 400px;
    text-align: center;
  }

  button {
    background: #29166f;
    border: 0;
    border-radius: 5px;
    width: 350px;

    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    padding: 20px 34px;
    font-size: 18px;

    &:hover {
      background: ${shade(0.6, '#FFFFFF')};
    }
  }
`;

export const Title = styled.h1`
  font-size: 21px;
`;

export const SubTitle = styled.span`
  font-size: 18px;
`;

export const SwotImg = styled.img`
  width: 800px;
  margin: auto;
`;

export const Lista = styled.ul`
  width: 90%;
  margin: auto;
`;
