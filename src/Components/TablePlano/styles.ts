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

    table,
    td {
      padding: 5px;
      align-self: stretch;
      text-align: center;
      border: solid 1px black;
    }

    td {
      width: 250px;
    }
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
`;

export const ListItems = styled.ul`
  list-style: none;
`;

export const Item = styled.li``;
