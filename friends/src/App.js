import './App.css';
import Login from './components/Login'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function App() {


  
  return (
    <Router>
      <div className="App">
        <ul>
          <li> <Link to='/login'>Login</Link> </li>
        </ul>
        <Route path='/login'>
          <Login/>
        </Route>
     
      </div>
    </Router>
  );
}

export default App;
