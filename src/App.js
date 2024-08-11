import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import {Route, Routes} from 'react-router-dom'
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";
import Navigation from "./Navigation";
import { EarthCanvas } from "./canvas";
import Background from "./file";
function App() {
    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])

    return (
        <>
      <div className="bg-gradient-main min-h-screen px-4 flex flex-col items-center text-white font-medium">
        <div className="absolute inset-0 h-1/2 bg-gradient-overlay z-0"></div>
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <div className="radial-gradient-overlay"></div>
        </div>

        <div className="w-full z-10 min-h-screen flex flex-col items-center text-white">
          <div className="fixed top-0 left-0 w-full px-4 pt-8 z-10 flex flex-col items-center text-white">
            <div className="w-full cursor-pointer">
              <div className="bg-[#1f1f1f] text-center py-2 rounded-xl">
                <p className="text-lg">
                  Join squad{" "}
                  <Arrow size={18} className="ml-0 mb-1 inline-block" />
                </p>
              </div>
            </div>
            <div className="mt-12 text-5xl font-bold flex items-center">
              <img src={coin} width={44} height={44} />
              <span className="ml-2">{points.toLocaleString()}</span>
            </div>
            <div className="text-base mt-2 flex items-center">
              <img src={trophy} width={24} height={24} />
              <span className="ml-1">
                Gold <Arrow size={18} className="ml-0 mb-1 inline-block" />
              </span>
            </div>
          </div>
          <div className="flex-grow flex items-center justify-center">
            <div className="relative mt-4" onClick={handleClick}>
              <img src={notcoin} width={256} height={256} alt="notcoin" />
              {clicks.map((click) => (
                <div
                  key={click.id}
                  className="absolute text-5xl font-bold opacity-0"
                  style={{
                    top: `${click.y - 42}px`,
                    left: `${click.x - 28}px`,
                    animation: `float 1s ease-out`,
                  }}
                  onAnimationEnd={() => handleAnimationEnd(click.id)}
                >
                  12
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
    );
}

export default App;
