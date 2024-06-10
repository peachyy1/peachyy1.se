import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/gallery">Gallery</Link>
                </div>
            </nav>
            <Outlet />
        </>
    );
}

export default Layout;