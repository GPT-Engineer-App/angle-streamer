import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import MultipleAngles from "./pages/MultipleAngles.jsx";
import GreatAudioQuality from "./pages/GreatAudioQuality.jsx";
import QuickSetup from "./pages/QuickSetup.jsx";
import EasyMonetization from "./pages/EasyMonetization.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/multiple-angles" element={<MultipleAngles />} />
        <Route path="/great-audio-quality" element={<GreatAudioQuality />} />
        <Route path="/quick-setup" element={<QuickSetup />} />
        <Route path="/easy-monetization" element={<EasyMonetization />} />
      </Routes>
    </Router>
  );
}

export default App;
