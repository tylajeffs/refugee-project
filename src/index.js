import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import APtoAP from "./pages/ap-to-ap";
import APtoEU from "./pages/ap-to-europe";
import ChartChange from "./pages/chartChanging"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="ap-to-ap" element={<APtoAP />} />
          <Route path="ap-to-europe" element={<APtoEU />} />
          <Route path="change" element={<ChartChange />} />


        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));