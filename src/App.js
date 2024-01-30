import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './NavBar';
import routes from './routes';
import './App.css';

function App() {
  return (
    <Router>
      {/*navbar here*/}
      <NavBar />
      <div className="container mt-2">
        <Routes>
          {routes.map((route, index) => {
              return (
              <Route 
                key={index} 
                path={route.path} 
                element={route.component}
              /> 
              );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
