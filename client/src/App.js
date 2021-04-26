import './App.css';

import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { 
  BrowserRouter as Router,
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
import CoachApplyLanding from "./components/CoachApp/CoachApplyLanding";
import CoachEligibility from "./components/CoachEligibility/index.js";
import CoachApplication from "./components/CoachApp/CoachApplication/index.js";
import About from "./components/About";
import Contact from "./components/Contact";
import Privacy from "./components/Privacy";
import Testimonial from "./components/Testimonial";
import Safety from "./components/Safety";

import routes from "./routes/index.js"

import ProtectedRoute from './components/ProtectedRoute/index.js';

import { clearMessage } from './redux/actions/messageAction.js';

import Profile from './components/Profile/index.js'

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
              <Route exact key={page.path} path={page.path} component={page.component}/>
            ))
          }

          <Route exact path="/"> <Homepage/> </Route>
          <Route path="/home" component={ErrorPage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/coach/profile" component={CoachProfilePage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/register" component={RegisterPage}/>

          <ProtectedRoute path="/profile" auth={isLoggedin}>
              <PlaceHolderPage page="Profile"/>
          </ProtectedRoute>
          <Route path="/about" component={About} />
          <Route path="/apply" component ={CoachApplyLanding} />
          <Route path="/eligibility" component ={CoachEligibility} />
          <Route path="/application" component ={CoachApplication} />
          <Route path="/contact" component ={Contact} />
          <Route path="/privacy" component ={Privacy} />
          <Route path="/testimonial" component ={Testimonial} />
          <Route path="/safety" component ={Safety} />

          <ProtectedRoute path="/profile" component={Profile} auth={isLoggedin}/>
          <Route path="/error" component={ErrorPage} />

        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
