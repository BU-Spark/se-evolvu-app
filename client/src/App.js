import './App.css';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { createBrowserHistory } from "history";

import Navbar from "./components/Navbar/index.js";
import UserNavbar from "./components/Navbar/UserNavbar/index.js"
import ErrorPage from "./components/ErrorPage/index.js";
import PlaceHolderPage from "./components/PlaceHolderPage/index.js";
import Footer from "./components/Footer";

import ProtectedRoute from './components/ProtectedRoute/index.js';
import routes from "./routes/index.js";

import { clearMessage } from './redux/actions/messageAction.js';

const App = () => {

  let isLoggedin = useSelector(state => state.authReducer.isLoggedin);

  const history = createBrowserHistory();
  const dispatch = useDispatch();

  useEffect( () => {
    history.listen( (location) => {
      dispatch(clearMessage());
    })
  }, [dispatch, history])

  return (
    
    <Router history={history}>
      <div className="App">
        { isLoggedin ? <UserNavbar/> : <Navbar/> }
        <Switch>
          {/* Mapping unprotected components and routes */}
          {
            routes.unprotected.map( (page) => (
              <Route exact key={page.path} path={page.path} component={page.component}/>
            ))
          }
          {/* Mapping protected components and routes */}
          {
            routes.protected.map( (page) => (
              <ProtectedRoute auth={isLoggedin} exact key={page.path} path={page.path} component={page.component}/>
            ))
          }

          <Route path="/apply">
              <PlaceHolderPage page="Coach Application"/>
          </Route>
          <Route path="tos-and-policy">
            <PlaceHolderPage page="Terms of Service and Policy Placeholder"/>
          </Route>
          <Route path="/*" component={ErrorPage} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
