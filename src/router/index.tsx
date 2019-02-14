import * as React from 'react';
import * as Loadable from 'react-loadable';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../containers/App';


const loading = () => <h2>loading ...</h2>;

const RouterList:any[] = [
  {
    component: () => import('../containers/SongsContainer'),
    path:'/',
  }
];

const RouterMap = () => (
  <Router>
    <App>
      <Switch>
        {RouterList.map(item => (
          <Route
            key={item.path}
            path={item.path}
            exact={true}
            component={Loadable({loader:item.component, loading})}
          />
        ))}
      </Switch>
    </App>
  </Router>
)
export default RouterMap;