import Layout from "./components/common/Layout"
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import All from "./pages/All";
import BookMark from "./pages/BookMarks";


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="all" element={<All />} />
        <Route path="bookmarks" element={<BookMark />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
