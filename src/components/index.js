import React from 'react';
import Header from './Header';
import PostListings from './PostListings';
import PostDetails from './PostDetails'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route exact path="/" element={<PostListings />} />
          <Route exact path="/post/:postId" element={<PostDetails />} />
          <Route path="*">Not Found </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
