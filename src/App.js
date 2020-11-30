import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from 'components/pages/auth/login/Login';
import Profile from 'components/pages/dashboard/profile/Profile';
import AddClient from 'components/pages/dashboard/client/AddClient';
import Client from 'components/pages/dashboard/client/Client';
import Index from 'components/pages/dashboard/Index';
import AddEmployee from 'components/pages/employees/AddEmployee';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard" component={Index} exact></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/dashboard/clients" component={Client}></Route>
        <Route path="/dashboard/profile" component={Profile}></Route>
        <Route path="/dashboard/addclients" component={AddClient}></Route>
        <Route path='/employees/addemployee' component={AddEmployee}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
