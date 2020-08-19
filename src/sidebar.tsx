import "./sidebar.scss";
import React from "react";

interface ISidebar {
    children?: any;
}

export const Sidebar = ({ children }: ISidebar): any => {
    return (
        <div id="sidebar" className="d-flex flex-column">
            <p id="title">
                <i className="fas fa-info-circle" />
                <span>&nbsp;&nbsp;</span>
                <span>Tenderfarm</span>
            </p>

            <div id="items">
                {children}

                <div id="footer-buttons">
                    <button className="btn">
                        <i className="fa fa-cog" />
                    </button>

                    <button className="btn">
                        <i className="fa fa-users" />
                    </button>
                </div>
            </div>
        </div>
    );
};
