import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 0 40px;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 40px;

  > div {
    width: 100%;
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

  button {
    background: #29166f;
    border: 0;
    border-radius: 5px;
    width: 350px;

    &:hover {
      background: ${shade(0.6, '#FFFFFF')};
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      padding: 20px 34px;
      font-size: 18px;
    }
  }

  table,
  td {
    padding: 5px;
    align-self: stretch;
    width: 700px;
    text-align: center;
  }

  table {
    margin-right: 50px;
  }
`;

export const Title = styled.h1`
  font-size: 21px;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
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

export const Tabela = styled.div`
  padding: 10px 20px;
  border: solid 1px #000000;
  width: 450px;
  margin-bottom: 20px;
`;

export const ListItems = styled.ul`
  padding-left: 30px;
`;

export const Item = styled.li``;

export const Separator = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const Left = styled.div``;

export const Right = styled.div``;
