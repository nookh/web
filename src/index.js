import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Game from "./pages/Game.tsx";
import ProfileBar from "./pages/ProfileBar.tsx";
import BottomNav from "./pages/BottomNav.tsx";
import "./index.css";
import {useTelegram} from "./hooks/useTelegram";


export function RequireAuth() {
  const {user, data, tg} = useTelegram();
  if (!user?.first_name) {
    return <div>Please log in to access this application.</div>;
  } else {
    return <Navigate to="/game" replace />;
  }
}

export default function App() {

  return (
    <div className="xl:w-[30%] lg:w-[50%] md:w-[70%] w-full h-screen bg-gradient-to-t from-[#0b0c0e] to-[#00446d] flex flex-col justify-between my-0 mx-auto px-5 py-3">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<RequireAuth><Game/></RequireAuth>}/>
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);