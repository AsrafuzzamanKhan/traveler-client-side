import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AddPackage from './components/AddPackage/AddPackage';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home/Home';
import Login from './components/Home/Login/Login/Login';
import ManageAllOrders from './components/ManageBookings/ManageAllOrders/ManageAllOrders';
import DeletePackage from './components/ManagePackages/DeletePackage/DeletePackage';
import Packages from './components/Packages/Packages/Packages';
import SinglePackage from './components/Packages/SinglePackage/SinglePackage';
import Footer from './components/Pages/Shared/Footer/Footer';
import Header from './components/Pages/Shared/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';

function App() {

  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/packages">
              <Packages></Packages>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <PrivateRoute path="/packageDetails/:id">
              <SinglePackage></SinglePackage>
            </PrivateRoute>
            <PrivateRoute path="/addPackage">
              <AddPackage></AddPackage>
            </PrivateRoute>
            <PrivateRoute path="/deletePackage">
              <DeletePackage></DeletePackage>
            </PrivateRoute>
            <PrivateRoute path="/manageAllOrders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
