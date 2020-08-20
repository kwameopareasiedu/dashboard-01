import "./body.scss";
import React from "react";

interface IBody {
    children?: any;
}

export const Body = ({ children }: IBody): any => {
    return (
        <div id="body">
            <div className="row">{children}</div>
        </div>
    );
};
