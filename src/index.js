import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import DependencyWheelPage from "./pages/dependencyWheel/dependencyWheel";
import SankeyDiagramPage from "./pages/sankeyDiagram/sankeyDiagram";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dependency" element={<DependencyWheelPage />} />
          <Route path="sankey" element={<SankeyDiagramPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));