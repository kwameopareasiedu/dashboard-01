import "./topbar.scss";
import React from "react";
import AvatarIcon from "../assets/avatar.png";

export const Topbar = (): any => {
    return (
        <div id="topbar" className="d-flex">
            <label>Best Tenders</label>

            <div>
                <span id="notification-count">5</span>
                <i id="bell" className="fa fa-bell" />

                <span id="search">
                    <i className="fa fa-search" />
                    <input type="text" placeholder="Search" />
                </span>

                <span id="avatar-icon">
                    <img src={AvatarIcon} alt="Avatar" />
                </span>

                <span id="avatar-name">Kwame</span>
            </div>
        </div>
    );
};
