import "./sidebar-list-item.scss";
import React from "react";

interface ISidebarListItem {
    iconClass?: string;
    notificationCount?: number;
    active?: boolean;
    children?: any;
}

export const SidebarListItem = ({ iconClass, active, children, notificationCount }: ISidebarListItem): any => {
    return (
        <a href="" className={`sidebar-list-item ${active ? "active" : ""}`}>
            {iconClass && <i className={`icon ${iconClass}`} />}
            <label>{children}</label>
            {notificationCount > 0 && <span className="notification">{notificationCount}</span>}
        </a>
    );
};
