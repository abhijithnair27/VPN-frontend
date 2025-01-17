import React, { useState } from "react";
import "./ViewFir.css";

const ViewFir = () => {
  const [activeTab, setActiveTab] = useState("All Cases");
  const [searchQuery, setSearchQuery] = useState("");

  const cases = [
    { caseNumber: "#123456", description: "Stolen bike", date: "1/2/2023", status: "Open", action: "View" },
    { caseNumber: "#123457", description: "Car broken into", date: "1/3/2023", status: "Open", action: "View" },
    { caseNumber: "#123458", description: "Vandalism", date: "1/4/2023", status: "Closed", action: "View" },
    { caseNumber: "#123459", description: "Domestic disturbance", date: "1/5/2023", status: "Unassigned", action: "Assign" },
    { caseNumber: "#123460", description: "Noise complaint", date: "1/6/2023", status: "Assigned", action: "Contact Officer" },
  ];

  const filteredCases = cases.filter(
    (c) =>
      c.caseNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="my-cases-container">
      <h2>My Cases</h2>
      <p>View the status of your reported cases</p>
      <div className="tabs">
        {["All Cases", "Open Cases", "Closed Cases", "Unassigned Cases", "Assigned to Me"].map((tab) => (
          <button
            key={tab}
            className={`tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => handleTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="search-bar">
        <i className="fas fa-search"></i>
        <input
          type="text"
          placeholder="Search by case number or description"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <table className="cases-table">
        <thead>
          <tr>
            <th>Case Number</th>
            <th>Description</th>
            <th>Date Reported</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredCases.map((c, index) => (
            <tr key={index}>
              <td>{c.caseNumber}</td>
              <td>{c.description}</td>
              <td>{c.date}</td>
              <td>
                <span className={`status ${c.status.toLowerCase()}`}>{c.status}</span>
              </td>
              <td>
                <button className="action-button">{c.action}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewFir;
