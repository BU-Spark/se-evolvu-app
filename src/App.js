import './App.css';

import { 
  Link,
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import Homepage from "./components/Homepage/index.js";
import Footer from './components/Footer';

function App() {
  return (
    
    <BrowserRouter>
      <div className="App">
        <ul>
          <li>
            <Link to="/home"> Homepage </Link>
          </li>
          <li>
            <Link to="/about"> About </Link>
          </li>
          <li>
            <Link to="/about"> About </Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/home" component={Homepage} />
        <Route path="/about" component={Homepage} />

      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
