import React, { useEffect, useState, useRef } from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";

import SubnavbarItem from "./SubnavbarItem";
import "./Subnavbar.css"

interface SubnavbarProps{
    subnavbarItems: string[][];
}

const Subnavbar: React.FC<SubnavbarProps> = ({ subnavbarItems }) => {

    const location = useLocation();

    const { pathname } = location;

    const [navbarItemPosition, setNavbarItemPosition] = useState(0);
    // const navbarItemRef = useRef(null);

    // get position for navbar item and set position for subnavbar item
    const handleResize = () => {
        const navbarItem = document.getElementById('experience');
        // const navbarItem = navbarItemRef.current;

        if (navbarItem) {
            const rect = navbarItem.getBoundingClientRect();
            setNavbarItemPosition(rect.x);
        }
    };

    // eventListener for resizing the window
    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>  
            <div id="subnavbar" style={{left: navbarItemPosition + 'px'}}>
                {subnavbarItems.map(([path, title], index) => (
                    <SubnavbarItem key={index} path={path} title={title}
                        active={pathname === path} />
                ))}
            </div>
            
        </>
    )
}

export default Subnavbar