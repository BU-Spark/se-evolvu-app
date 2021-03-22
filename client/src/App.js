import './App.css';

import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { 
  Router,
  Switch,
  Route
} from 'react-router-dom';
import { createBrowserHistory } from "history";

import Homepage from "./components/Homepage/index.js";
import Navbar from "./components/Navbar/index.js";
import UserNavbar from "./components/Navbar/UserNavbar/index.js"
import LoginPage from "./components/LoginPage/index.js";
import RegisterPage from './components/RegisterPage/index.js';
import ErrorPage from "./components/ErrorPage/index.js";
import SearchPage from "./components/SearchPage/index.js";
import PlaceHolderPage from "./components/PlaceHolderPage/index.js";
import Footer from "./components/Footer";
import CoachProfilePage from './components/CoachProfilePage';

import ProtectedRoute from './components/ProtectedRoute/index.js';

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
          <Route exact path="/"> <Homepage/> </Route>
          <Route path="/home" component={ErrorPage} />
          <Route path="/about" component={ErrorPage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/apply">
              <PlaceHolderPage page="Coach Application"/>
          </Route>
          <Route path="tos-and-policy">
            <PlaceHolderPage page="Terms of Service and Policy Placeholder"/>
          </Route>
          <Route path="/coach/profile" component={CoachProfilePage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/register" component={RegisterPage}/>
          <ProtectedRoute path="/profile" auth={isLoggedin}>
              <PlaceHolderPage page="Profile"/>
          </ProtectedRoute>
          <Route path="/error" component={ErrorPage} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;