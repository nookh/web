import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Game from "./pages/Game.tsx";
import ProfileBar from "./pages/ProfileBar.tsx";
import BottomNav from "./pages/BottomNav.tsx";
import "./index.css";
import {useTelegram} from "./hooks/useTelegram";
const {user, data, tg} = useTelegram();
export default function App() {

  if (!user?.first_name) {
    return <div>Please log in to access this application.</div>;
  } else {
    return <Navigate to="/game" replace />;
  }
  
  return (
    <div className="xl:w-[30%] lg:w-[50%] md:w-[70%] w-full h-screen bg-gradient-to-t from-[#0b0c0e] to-[#00446d] flex flex-col justify-between my-0 mx-auto px-5 py-3">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProfileBar />}>
          <Route path="/game" element={<Game />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);