import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Details from "./pages/Details";
import Contact from "./pages/Contact";
import ExploreMore from "./pages/ExploreMore";
import ShowMessages from "./pages/ShowMessages";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col min-h-screen">

      <Header />

      {/* Main Content */}
      <main className="flex-grow">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/explore" element={<ExploreMore />} />
          <Route path="/messages" element={<ShowMessages />} />
        </Routes>

      </main>

      <Footer />

    </div>
  );
}

export default App;