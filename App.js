import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import BooksPage from "./pages/BooksPage";
import JournalPage from "./pages/JournalPage";
// import BibleStudyPage from "./pages/BibleStudyPage";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/books" element={<BooksPage />} />

        <Route path="/journal" element={<JournalPage />} />

        {/* <Route
          path="/bible-study"
          element={<BibleStudyPage />}
        /> */}

      </Routes>

    </BrowserRouter>
  );
}

export default App;