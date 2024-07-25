import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route index element={<Layout />} />
        <Route path="/" component={<Layout/>} />
        <Route path="/blog" component={<Blogs/>} />
        <Route path="/:post_id" component={<Home/>} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);