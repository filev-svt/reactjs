import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Series } from '../../containers/Series/series';
import { SingleSeries} from '../../containers/SingleSeries/singleSeries';

const Main = props => (
    <Switch>
        <Route exact path="/" component={ Series }></Route>
        <Route path="/series/:id" component={ SingleSeries }></Route>
    </Switch>
)

export default Main;