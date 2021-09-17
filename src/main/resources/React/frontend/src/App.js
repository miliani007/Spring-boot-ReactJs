import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import { Route, Router, Switch } from 'react-router';
import { createBrowserHistory } from 'history'
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {

  const newHistory = createBrowserHistory();

  return (
    <div>
      <HeaderComponent />
      <Router history={newHistory}>
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListEmployeeComponent}></Route>
            <Route path="/employees" component={ListEmployeeComponent}></Route>
            <Route path="/add-employee/:id" component={CreateEmployeeComponent}></Route>
            <Route path="/view-employee/:id" component={ViewEmployeeComponent}></Route>
            {/* <Route path="/update-employee/:id" component={UpdateEmployeeComponent}></Route> */}
          </Switch>
        </div>
      </Router>
      <FooterComponent />
    </div>
  );
}

export default App;
