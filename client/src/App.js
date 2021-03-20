import './App.css';

import { 
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import Homepage from "./components/Homepage/index.js";
import Navbar from "./components/Navbar/index.js";
import LoginPage from "./components/LoginPage/index.js";
import ErrorPage from "./components/ErrorPage/index.js";
import SearchPage from "./components/SearchPage/index.js";
import PlaceHolderPage from "./components/PlaceHolderPage/index.js";
import Footer from "./components/Footer";
import CoachProfilePage from './components/CoachProfilePage';

import ProtectedRoute from './components/ProtectedRoute/index.js'

function App() {

  let isAuthenticated = false;

  return (
    
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/"> <Homepage/> </Route>
          <Route path="/home" component={ErrorPage} />
          <Route path="/about" component={ErrorPage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/apply">
              <PlaceHolderPage page="Coach Application"/>
          </Route>
          <Route path="/coach/profile" component={CoachProfilePage}>
          </Route>
          <Route path="/login" component={LoginPage}/>
          <Route path="/register">
              <PlaceHolderPage page="Sign Up Page"/>
          </Route>
          <ProtectedRoute path="/test" component={PlaceHolderPage} auth={isAuthenticated} />
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
