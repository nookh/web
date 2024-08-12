import { render } from "@testing-library/react";
import React from "react";
import BottomNav from "./BottomNav.tsx";
const Friends = () => {
    return (
        <>
        <div className="w-full h-full flex flex-col justify-between py-4">
            <h1>Friends</h1>
        </div>
        <BottomNav/>
        </>
    );
};
export default Friends;