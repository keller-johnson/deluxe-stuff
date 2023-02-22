import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component.jsx";
import Mint from "./routes/mint/mint.component.jsx";
import About from "./routes/about/about.component.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="mint" element={<Mint />} />
      </Route>
    </Routes>
  );
};

export default App;
