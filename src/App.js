import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Marketplace from "./routes/Marketplace";
import Collection from "./routes/Collection";
import Drops from "./routes/Drops";
import NFT from "./routes/Nft";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Drops />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/nft=:id" element={<NFT />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
