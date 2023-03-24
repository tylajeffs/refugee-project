import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import APtoAP from "./pages/ap-to-ap";
import APtoEU from "./pages/ap-to-europe";
import APtoSA from "./pages/ap-to-southern-africa";
import APtoAM from "./pages/ap-to-americas";
import APtoWCA from "./pages/ap-to-west-central-africa";
import APtoEHA from "./pages/ap-to-e-horna";
import APtoMENA from "./pages/ap-to-me-na";
import APtoER from "./pages/ap-to-each-region";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="ap-to-ap" element={<APtoAP />} />
          <Route path="ap-to-europe" element={<APtoEU />} />
          <Route path="ap-to-sa" element={<APtoSA />} />
          <Route path="ap-to-am" element={<APtoAM />} />
          <Route path="ap-to-wca" element={<APtoWCA />} />
          <Route path="ap-to-e-ha" element={<APtoEHA />} />
          <Route path="ap-to-me-and-na" element={<APtoMENA />} />
          <Route path="ap-to-region" element={<APtoER />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));