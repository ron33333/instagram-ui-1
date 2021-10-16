import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Register from './Register/Register';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
