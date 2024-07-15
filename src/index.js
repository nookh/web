import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import 'bootstrap/dist/css/bootstrap.css';
import StarSky from 'react-star-sky'

export default function App() {
  return (
    <BrowserRouter>
    <StarSky
        debugFps={true} // Default = false
        isPageBackground={true}
        shuffle={1}
        frameRate={30}
        starColor={"rainbow"}
      >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
        </Route>
      </Routes>
      </StarSky>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);