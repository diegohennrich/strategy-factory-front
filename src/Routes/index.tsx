import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import Tela1 from '../Pages/Tela1';
import Explicacoes from '../Pages/Explicacoes';

const Routes: FC = () => (
  <Switch>
    <Route path="/" exact component={Tela1} />
    <Route path="/explicacoes" exact component={Explicacoes} />
  </Switch>
);

export default Routes;
