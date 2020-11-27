import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/auth/login/Login';
import Profile from './components/pages/dashboard/Profile';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/dashboard/profile" component={Profile}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
