import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import 'bootstrap/dist/css/bootstrap.css';
import Background from "./file";

export default function App() {
  return (
    <BrowserRouter>
    <StarSky
        // debugFPS={true}
        isPageBackground={true}
        // shuffle={0}
        // starColor='white'
        frameRate={30}
      />

      <StarSky
        debugFPS={false}
        // isPageBackground={false}
        starColor={[0, 0, 255]}
        backgroundColor={[0, 0, 10]}
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