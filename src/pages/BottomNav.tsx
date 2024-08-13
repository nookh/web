import { useState } from "react";
import React from "react";
import { Flash, LogoBitcoin, People, PersonCircle, Settings } from "react-ionicons";
import { Outlet, Link, NavLink } from "react-router-dom";

const BottomNav = () => {
	const [navItems, setNavItems] = useState([
		{ route: "/game", title: "Energy", icon: Flash, active: false },
		{ route: "/friends", title: "Friends", icon: People, active: false },
		{ route: "/earn", title: "Earn", icon: LogoBitcoin, active: true },
	]);

	const handleActive = (title: string) => {
		setNavItems((prevItems) =>
			prevItems.map((item) => {
				return { ...item, active: item.title === title ? true : false };
			})
		);
	};
	return (
        <>
		{/* <div className="fixed bottom-0 w-full my-0 mx-auto rounded-2xl bg-[#012237] flex items-center justify-between p-2">
			{navItems.map((item) => (
				<div
					key={item.title}
					className={`flex flex-col gap-2 cursor-pointer rounded-xl items-center w-full py-[6px] ${
						item.active ? "bg-[#003e65]" : "bg-transparent"
					}`}
					onClick={() => handleActive(item.title)}
				>
					<item.icon
						cssClasses={
							item.active
								? "!text-[#fdb224] !fill-[#fdb224]"
								: "!text-[#818288] !fill-[#818288]"
						}
					/>
					<NavLink to={item.route}><span
						className={`text-sm font-medium ${
							item.active ? "text-[#fdb224]" : "text-[#818288]"
						}`}
					>
						{item.title}
					</span>
                    </NavLink>
				</div>
			))}
		</div>
        <Outlet/> */}
		{/* Bottom fixed div */}
		<div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-[#272a2f] flex justify-around items-center z-50 rounded-3xl text-xs">
        <div className="text-center text-[#85827d] w-1/5 bg-[#1c1f24] m-1 p-2 rounded-2xl">
          
          <p className="mt-1">Exchange</p>
        </div>
        <div className="text-center text-[#85827d] w-1/5">
          
          <p className="mt-1">Mine</p>
        </div>
        <div className="text-center text-[#85827d] w-1/5">
          
          <p className="mt-1">Friends</p>
        </div>
        <div className="text-center text-[#85827d] w-1/5">
          
          <p className="mt-1">Earn</p>
        </div>
        <div className="text-center text-[#85827d] w-1/5">
          
          <p className="mt-1">Airdrop</p>
        </div>
      </div>
        </>
	);
};

export default BottomNav;