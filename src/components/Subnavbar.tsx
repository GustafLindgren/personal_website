import React from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";

import SubnavbarItem from "./SubnavbarItem";

interface SubnavbarProps{
    subnavbarItems: string[][];
}

const Subnavbar: React.FC<SubnavbarProps> = ({ subnavbarItems }) => {

    const location = useLocation();

    const { pathname } = location;

    return (
        <>  
            {subnavbarItems.map(([path, title], index) => (
                <SubnavbarItem key={index} path={path} title={title}
                    active={pathname === path} />
        ))}
        </>
    )
}

export default Subnavbar