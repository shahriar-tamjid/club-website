import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import Events from "./pages/Events";
import ExecutiveCommittee from "./pages/ExecutiveCommittee";
import Contact from "./pages/Contact";
import Blog from "./components/Blog";

function App() {
  return (
    <>
      <Header />
      <br /><br /><br /><br /><br />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/executive-committee" element={<ExecutiveCommittee />} />
          <Route exact path="/blog/:id" element={<Blog />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;