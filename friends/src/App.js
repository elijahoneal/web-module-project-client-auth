import './App.css';
import Login from './components/Login'
import Friends from './components/Friends'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'


function App() {

const logout = () => {
  localStorage.removeItem('token')
}
  
  return (
    <Router>
      <div className="App">
        <ul>
          <li> <Link to='/login'>Login</Link> </li>
          <li> <Link onClick={logout}>Logout</Link> </li>
          <li> <Link to='/friends'>Friends</Link> </li>
        </ul>
        <Switch>
          <ProtectedRoute exact path='/friends'component={Friends}/>
          <Route path='/login' component={Login}/>     
          <Route component={Login}/>     
        </Switch>
      
      </div>
    </Router>
  );
}

export default App;
