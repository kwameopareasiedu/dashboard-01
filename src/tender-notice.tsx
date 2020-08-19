import "./tender-notice.scss";
import React from "react";

export const TenderNotice = (): any => {
    return (
        <div id="tender-notice">
            <i className="fab fa-apple" />
            <p id="title">
                <p className="mb-0">Apple Inc.</p>
                <p className="mb-0">Ending soon</p>
            </p>
            <p id="message" className="mb-0">
                Hey, don&apos;t forget, there&apos;s still time to get that tender.
            </p>
        </div>
    );
};
