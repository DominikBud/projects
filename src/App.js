import { useTranslation } from "react-i18next";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { useEffect } from "react";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
