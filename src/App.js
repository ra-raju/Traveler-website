import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/HomePage/Home/Home';
import Login from './Components/Registration/Login/Login';
import Header from './Components/SharedPage/Header/Header';
import TravelForm from './Components/TravelForm/TravelForm';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/travelform">
              <TravelForm />
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
