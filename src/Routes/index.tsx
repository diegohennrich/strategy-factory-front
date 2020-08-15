import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import Tela1 from '../Pages/Tela1';
import Explicacoes from '../Pages/Explicacoes';
import Cadastro from '../Pages/Cadastro';
import Missao from '../Pages/Missao';
import SwotInterno from '../Pages/SwotInterno';
import SwotExterno from '../Pages/SwotExterno';
import Estrategia from '../Pages/Estrategia';
import Objetivos from '../Pages/Objetivos';
import Plano from '../Pages/Plano';
import Relatorio from '../Pages/Relatorio';

const Routes: FC = () => (
  <Switch>
    <Route path="/" exact component={Tela1} />
    <Route path="/explicacoes" exact component={Explicacoes} />
    <Route path="/cadastro" exact component={Cadastro} />
    <Route path="/missao" exact component={Missao} />
    <Route path="/swot-interno" exact component={SwotInterno} />
    <Route path="/swot-externo" exact component={SwotExterno} />
    <Route path="/estrategia" exact component={Estrategia} />
    <Route path="/objetivos" exact component={Objetivos} />
    <Route path="/plano" exact component={Plano} />
    <Route path="/relatorio" exact component={Relatorio} />
  </Switch>
);

export default Routes;
