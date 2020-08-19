import "./app.scss";
import React from "react";
import { Sidebar } from "./sidebar";
import { SidebarListItem } from "./sidebar-list-item";
import { TenderNotice } from "./tender-notice";
import { Topbar } from "./topbar";

export const App = (): any => {
    return (
        <div id="app">
            <Sidebar>
                <SidebarListItem iconClass="fa fa-home">Company</SidebarListItem>
                <SidebarListItem iconClass="fa fa-search" active>
                    Explore
                </SidebarListItem>
                <SidebarListItem>Latest tenders</SidebarListItem>
                <SidebarListItem>Best tenders</SidebarListItem>
                <SidebarListItem>Team search</SidebarListItem>
                <SidebarListItem iconClass="fa fa-comments" notificationCount={1}>
                    Notifications
                </SidebarListItem>

                <TenderNotice />

                <SidebarListItem iconClass="fa fa-envelope">Messages</SidebarListItem>
                <SidebarListItem iconClass="fa fa-user">Profile</SidebarListItem>
            </Sidebar>

            <Topbar />
        </div>
    );
};
