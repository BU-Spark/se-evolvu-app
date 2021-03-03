import './App.css';

import { 
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import Homepage from "./components/Homepage/index.js";
import Navbar from "./components/Navbar/index.js";
import ErrorPage from "./components/ErrorPage/index.js";
import SearchPage from "./components/SearchPage/index.js";
import PlaceHolderPage from "./components/PlaceHolderPage/index.js";
import Footer from "./components/Footer";

function App() {
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
          <Route path="/sign-in">
              <PlaceHolderPage page="Sign In Page"/>
          </Route>
          <Route path="/sign-up">
              <PlaceHolderPage page="Sign Up Page"/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
