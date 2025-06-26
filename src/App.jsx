import Layout from "./components/common/Layout"
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import All from "./pages/All";
import BookMark from "./pages/BookMarks";
import About from "./pages/About";
import Privacy from "./pages/Privacy";


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/all" element={<All />} />
        <Route path="/bookmarks" element={<BookMark />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
