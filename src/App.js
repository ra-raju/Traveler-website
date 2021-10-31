import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/HomePage/Home/Home';
import ManageOrder from './Components/ManageOrder/ManageOrder';
import MyOrder from './Components/MyOrder/MyOrder';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Login from './Components/Registration/Login/Login';
import ServiceForm from './Components/ServiceForm/ServiceForm';
import Footer from './Components/SharedPage/Footer/Footer';
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
            <PrivateRoute path="/travelform">
              <TravelForm />
            </PrivateRoute>
            <PrivateRoute path="/serviceform">
              <ServiceForm />
            </PrivateRoute>
            <PrivateRoute exact path="/service/:id">
              <SingleService />
            </PrivateRoute>
            <PrivateRoute path="/myorders">
              <MyOrder />
            </PrivateRoute>
            <PrivateRoute path="/manageorders">
              <ManageOrder />
            </PrivateRoute>
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
