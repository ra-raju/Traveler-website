import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/HomePage/Home/Home';
import MyOrder from './Components/MyOrder/MyOrder';
import Login from './Components/Registration/Login/Login';
import ServiceForm from './Components/ServiceForm/ServiceForm';
import Header from './Components/SharedPage/Header/Header';
import SingleService from './Components/SingleService/SingleService';
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
            <Route path="/serviceform">
              <ServiceForm />
            </Route>
            <Route exact path="/service/:id">
              <SingleService />
            </Route>
            <Route path="/myorders">
              <MyOrder />
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
