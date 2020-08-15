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

export const Lista = styled.ul`
  width: 90%;
  margin: auto;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: auto;

  h1 {
    font-size: 20px;
  }
`;

export const Logo = styled.img`
  width: 250px;
`;

export const Separator = styled.div`
  display: flex;
  margin-top: 40px;
  width: 80%;
  text-align: left;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    font-size: 18px;
    margin: 0;
  }
`;

export const List = styled.ul`
  padding-left: 20px;
`;

export const Item = styled.li`
  font-size: 18px;
`;

export const Tabela = styled.table`
  width: 700px;
  margin-top: 50px;
  tr {
    border: 0;
  }
  td {
    border: solid 1px black;
    padding: 10px 20px;
  }

  .nothing {
    border-top: solid 1px #ffffff;
    border-left: solid 1px #ffffff;
  }

  h2 {
    font-size: 20px;
    margin: 0;
    text-align: center;
  }

  h1 {
    font-size: 30px;
    text-transform: uppercase;
    text-align: center;
  }
`;
