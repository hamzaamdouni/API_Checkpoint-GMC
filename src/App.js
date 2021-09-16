import { Route, Switch } from 'react-router';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';

import { useState } from 'react';
import Details from './Pages/Details/Details';
import Error from './Pages/Error/Error';
import Lab from './Pages/Lab/Lab';

function App() {

  const [searching, setSearching] = useState("");


  return (
    <div className="App">
      <NavBar setSearching={setSearching}/>
      <Switch>
        <Route exact path="/"  component={Home} />
        <Route exact path="/lab"  render={()=>(
            <Lab
            searching={searching}
            />)} />
        <Route  exact path="/lab/details/:id" component={Details} />
        <Route path="/*" component={Error} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;