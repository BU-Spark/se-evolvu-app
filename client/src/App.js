import './App.css';

import { useSelector } from 'react-redux';
import { 
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

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

import ProtectedRoute from './components/ProtectedRoute/index.js'

function App() {

  let isLoggedin = useSelector(state => state.authReducer.isLoggedin);

  return (
    
    <BrowserRouter>
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
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
