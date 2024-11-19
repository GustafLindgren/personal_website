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
    // Purpose of this state is to prevent the subnavbar to be visible in the
    // top left corner for 1 second before rerendering in the correct position.
    const [subnavbarVisible, setSubnavbarVisible] = useState('hidden');
    // const navbarItemRef = useRef(null);

    const [subnavbarWidth, setSubnavbarWidth] = useState(62+'%');

    // get position for navbar item and set position for subnavbar item
    const handleResize = () => {
        const splitLocation = pathname.slice(1).split('/');

        const parentPath = splitLocation[0]
        const navbarItem = document.getElementById(parentPath);
        // const navbarItem = navbarItemRef.current;

        if (navbarItem) {
            const rect = navbarItem.getBoundingClientRect();
            setNavbarItemPosition(rect.x);

            if (parentPath === 'experience'){
                setSubnavbarWidth(62+'%');
            }
            else if (parentPath === 'education') {
                setSubnavbarWidth(50+'%');
            }

            setSubnavbarVisible('visible');

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
            <div id="subnavbar" style={{left: navbarItemPosition + 'px',
                visibility: subnavbarVisible, width: subnavbarWidth
            }}>
                {subnavbarItems.map(([path, title], index) => (
                    <SubnavbarItem key={index} path={path} title={title}
                        active={pathname === path} />
                ))}
            </div>
            
        </>
    )
}

export default Subnavbar