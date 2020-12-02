import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from 'components/pages/auth/login/Login';
import Profile from 'components/pages/dashboard/profile/Profile';
import AddClient from 'components/pages/dashboard/client/AddClient';
import Client from 'components/pages/dashboard/client/Client';
import Index from 'components/pages/project/Index';
import AddEmployee from 'components/pages/employees/AddEmployee';
import Employee from 'components/pages/employees/Index';
import CreateProject from 'components/pages/project/CreateProject';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard" component={Index} exact></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/dashboard/clients" component={Client}></Route>
        <Route path="/dashboard/profile" component={Profile}></Route>
        <Route path="/dashboard/addclients" component={AddClient}></Route>
        <Route path='/dashboard/employee/add' component={AddEmployee}></Route>
        <Route path='/dashboard/employee' component={Employee}></Route>
        <Route path='/dashboard/project/createProject' component={CreateProject}></Route>
        <Route path='/dashboard/project' exact component={Index}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
