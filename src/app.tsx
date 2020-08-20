import "./app.scss";
import React from "react";
import { Sidebar } from "./sidebar";
import { SidebarListItem } from "./sidebar-list-item";
import { TenderNotice } from "./tender-notice";
import { Topbar } from "./topbar";
import { Body } from "./body";
import { BodyListItem } from "./body-list-item";
import Logo1 from "../assets/logo-1.png";
import Logo2 from "../assets/logo-2.png";
import Logo3 from "../assets/logo-3.png";
import Logo4 from "../assets/logo-4.png";
import Logo5 from "../assets/logo-5.png";
import Logo6 from "../assets/logo-6.png";

export const App = (): any => {
    const data = [
        ["Apple Inc.", Logo1, "02", "15", "54", "iOS Lead Design Team", 89, 88.5, 15.2],
        ["Nike Inc.", Logo2, "10", "21", "33", "Fall Winter 2016 commercial", 254, 14.5, 5.9],
        ["Samsung Electronics Co. Ltd.", Logo3, "23", "05", "17", "Samsung Center App Design", 642, 10.2, 28.5],
        ["Evernote Corp.", Logo4, "02", "20", "15", "Full Product Redesign", 856, 8.7, 67.4],
        ["Twitter Inc.", Logo5, "03", "14", "06", "Mobile App Design", 964, 5, 10.3],
        ["SoundCloud LLC.", Logo6, "03", "10", "22", "Innovative Product Monetization", 230, 4.9, 39.2]
    ];

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

            <Body>
                {data.map((d, i) => (
                    <BodyListItem
                        key={i}
                        organization={d[0]}
                        logo={d[1]}
                        tenderDays={d[2]}
                        tenderHours={d[3]}
                        tenderMinutes={d[4]}
                        description={d[5]}
                        teams={d[6]}
                        budget={d[7]}
                        successRate={d[8]}
                    />
                ))}
            </Body>
        </div>
    );
};
