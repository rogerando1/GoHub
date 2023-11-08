import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Frontpage } from './Components/Design/Frontpage';

function App() {
  return (
    <>
    <Router>
        <Routes>
            <Route path = '/' element={<Frontpage/>} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
