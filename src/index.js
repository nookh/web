import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Game from "./pages/Game.tsx";
//import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
export default function App() {
  return (
    <Game/>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);