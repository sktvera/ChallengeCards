import React from "react";
import { Route, Routes } from 'react-router-dom'
import Welcome from './Routes/Welcome/Welcome'
import Cards from'./Routes/Cards/Cards'
import Footer from "./Components/Includes/Footer/Footer";
import Header from "./Components/Includes/Header/Header";
import Enterprise from './Routes/Enterprise/Enterprise';
import Task from './Routes/Task/Task';

import './App.css'

//Redux
import { Provider } from 'react-redux';
import {store} from './store/store';

function App() {
  return (<Provider store={store}>
    <div className="App">
      <Header/>
    <Routes>
      <Route path='/' exact={true} element={<Welcome/>}/>
      <Route path='/ChallengeCards' element={<Welcome/>}/>
      <Route path="/cards" element={<Cards/>}/>
      <Route path="/task/:id" element={<Task/>}/>
      <Route path="/challenge" element={<Enterprise/>}/>
     
    </Routes>
    <Footer/>
    </div>
    
  </Provider>
  );
}

export default App;
