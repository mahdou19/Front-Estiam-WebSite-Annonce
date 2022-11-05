import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Header } from './components/common/header/Header';
import "./App.css"
import { DataProvider } from './Context/Context'; 
import { Pages } from './components/pages/Pages';
// import Login from './components/login/Login';
// import Register from './components/register/Register';


function App() {
  return (
    <DataProvider>
      <Router>
         <div className='App'>
            <Header/>
            <Pages />
        </div>
      </Router>
    </DataProvider>
    
  );
}

export default App;
