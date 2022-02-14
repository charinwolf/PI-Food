import './App.css';
import {BrowserRouter, Route,  Routes } from "react-router-dom";
import LandingPage from './components/Landing/LandingPage';
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import SearchBar from './components/SearchBar/SearchBar';
import RecipeCreate from './components/RecipeCreate/RecipeCreate'


function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Routes>
          <Route exact path = '/' element= {<LandingPage/>} />
          <Route exact path = '/home' element = {<Home/>} />
          <Route exact path = '/recipes/:name' element = {<SearchBar/>} />
          <Route exact path = '/details/:id' element = {<Details/>} />
          <Route exact path = '/post' element = {<RecipeCreate/>} />          
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
