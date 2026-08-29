import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/_navigation/Navigation";

import Home from "./components/home";
import Posts from "./components/posts";
import Post from "./components/post";

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/posts" element={<Posts />} />

          <Route path="/posts/:id" element={<Post />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
