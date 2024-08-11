import ReactDOM from "react-dom/client";
import Game from "./pages/Game.tsx";
import ProfileBar from "./pages/ProfileBar.tsx";
import BottomNav from "./pages/BottomNav.tsx";
//import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
export default function App() {
  return (
    <div className="xl:w-[30%] lg:w-[50%] md:w-[70%] w-full h-screen bg-gradient-to-t from-[#0b0c0e] to-[#00446d] flex flex-col justify-between my-0 mx-auto px-5 py-3">
      <ProfileBar/>
      <Game/>
      <BottomNav/>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);