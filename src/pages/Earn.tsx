import { render } from "@testing-library/react";
import React from "react";
import BottomNav from "./BottomNav.tsx";
const Earn = () => {
    return (
        <>
        <div className="w-full h-full flex flex-col justify-between py-4">
            <h1>earn</h1>
        </div>
        <BottomNav/>
        </>
    );
};
export default Earn;