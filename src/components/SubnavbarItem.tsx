import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

import './SubnavbarItem.css';

interface SubnavbarItemProps {
    path: string;
    title: string;
    active: boolean;
}

const SubnavbarItem: React.FC<SubnavbarItemProps> = ({ path, title, active }) => {

    return (
        <>
            <Link to={path} className={`subnavItem ${active ? 'activeSubNav' : ''}`}>
                {title}
            </Link>
        </>
    );
}

export default SubnavbarItem