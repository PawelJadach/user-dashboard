import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import AddUser from './views/AddUser';
import UsersPage from './views/Users';

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route path="/" exact component={UsersPage} />
          <Route path="/add" exact component={AddUser} />
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
