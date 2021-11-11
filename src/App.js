import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import NavbarSection from './Shared/Navbar/NavbarSection'
import AuthProvider from './Context/AuthProvider';
import SignUp from "./Pages/Signup/Signup";
import Signin from "./Pages/Signin/Signin";
import ExploreAllProducts from './Pages/ExploreAllProducts/ExploreAllProducts';
import Footer from './Shared/Footer/Footer';
import Dashboard from './Pages/Dashboard/Dashboard';
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div className='Noto bg-gray-100'>
      <Router>
        <AuthProvider>
          <NavbarSection></NavbarSection>
          <Switch>
            <Route path='/signup'>
              <SignUp></SignUp>
            </Route>
            <Route path='/signin'>
              <Signin></Signin>
            </Route>
            <Route path='/all-products'>
              <ExploreAllProducts></ExploreAllProducts>
            </Route>
            <Route path='/dashboard'>
              <Dashboard></Dashboard>
            </Route>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;