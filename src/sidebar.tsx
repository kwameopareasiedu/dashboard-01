import "./sidebar.scss";
import React from "react";

interface ISidebar {
    children?: any;
}

export const Sidebar = ({ children }: ISidebar): any => {
    return (
        <div id="sidebar">
            <p id="title">
                <i className="fas fa-info-circle" />
                <span>&nbsp;&nbsp;</span>
                <span>Tenderfarm</span>
            </p>

            {children}
        </div>
    );
};
