import "./body-list-item.scss";
import React from "react";

interface IBodyListItem {
    organization: string;
    logo: string;
    tenderDays: string;
    tenderHours: string;
    tenderMinutes: string;
    description: string;
    teams: number;
    budget: number;
    successRate: number;
}

export const BodyListItem = ({
    organization,
    logo,
    tenderDays,
    tenderHours,
    tenderMinutes,
    description,
    teams,
    budget,
    successRate
}: IBodyListItem): any => {
    return (
        <div className="body-list-item col-md-6 col-lg-4">
            <div className="card">
                <div className="card-body">
                    <p className="organization text-center mb-4">{organization}</p>

                    <div className="logo mb-4">
                        <img src={logo} alt="Organization logo" />
                    </div>

                    <h3 className="tender text-center">{`${tenderDays}d:${tenderHours}h:${tenderMinutes}m`}</h3>

                    <p className="description text-center mb-4">{description}</p>

                    <div className="footer d-flex justify-content-between">
                        <p className="teams text-center mb-0">
                            <span>{teams}</span> <br />
                            <span>teams</span>
                        </p>

                        <p className="budget text-center mb-0">
                            <span>${budget}m</span> <br />
                            <span>budget</span>
                        </p>

                        <p className="success text-center mb-0">
                            <span>{successRate}%</span> <br />
                            <span>success</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
