import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';
import Dash from './Dash'
import Welcome from './Welcome';
import Entrance from './Entrance';
import Addjob from './Addjob';
import Application from './Application';
import Confirmation from './Confirmation';
import Success from './Success';
import Success1 from './Success1';
import About from './About';
const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route index element={<Entrance/>}/>
    <Route path='/Entrance' element={<Entrance/>}/>
    <Route path='/SignIn' element={<SignIn/>}/>
    <Route path='/SignUp' element={<SignUp/>}/>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/Dash' element={<Dash/>}/>
    <Route path='/Welcome' element={<Welcome/>}/>
    <Route path='/Addjob' element={<Addjob/>}/>
    <Route path='/Application' element={<Application/>}/>
    <Route path='/Confirmation' element={<Confirmation/>}/>
    <Route path='/Success' element={<Success/>}/>
    <Route path='/Success1' element={<Success1/>}/>
    <Route path='/About' element={<About/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;