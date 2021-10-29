import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/HomePage/Home/Home';
import Login from './Components/Registration/Login/Login';
import Header from './Components/SharedPage/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
