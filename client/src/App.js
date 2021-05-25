import logo from './logo.svg';
import './App.css';
// we need to import to see it on our page
import AllPets from './components/AllPets';
import Petdetails from './components/Petdetails';
import {Router, Link} from "@reach/router";   // Link lets me change pages with out reloading
import Create from './components/Create';
import Edit from './components/Edit';
import Index from './components/index'

function App() {
  return (
    <div className="App">
       {/* // this will show in all of the 'Front End routes */}
      
      {/* <h1>Pet Shelter</h1>
      <Link to= "/pets/new">Add a Pet</Link> */}

      {/* // AllPets.js file, using Pets' Method */}
      {/* // Create.js file, using 'new' Method */}

      <Router>
        <AllPets path = "/pets"></AllPets>      
        <Create path = "/pets/create"></Create>     
        <Petdetails path= "/pets/:id"></Petdetails>
        <Edit path="/pets/update/:id"></Edit>
        <Index path = "/"></Index>
      </Router>
    </div>
  );
}

export default App;
