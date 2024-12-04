import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Team from '../pages/team';
import '../App.css';
import NewsPage from '../pages/newsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/newspage" element={<NewsPage/>} />

      </Routes>
    </Router>
  );
}

export default App;
