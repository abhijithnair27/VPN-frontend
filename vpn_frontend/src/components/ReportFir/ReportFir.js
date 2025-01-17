import React, { useState } from "react";
import "./ReportFir.css";

const ReportFir = () => {
  const [formData, setFormData] = useState({
    incident: "",
    location: "",
    date: "",
    time: "",
    files: []
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, files: Array.from(e.target.files) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // Add API call or form processing logic here
  };

  return (
    <div className="report-crime-container">
      <h2>Report a crime or incident</h2>
      <p>
        Please provide as much detail as possible. Your report is confidential
        and will be reviewed by the appropriate department. If this is an
        emergency, call 100.
      </p>
      <form onSubmit={handleSubmit} className="report-crime-form">
        <div className="form-group">
          <label htmlFor="incident">Describe the incident</label>
          <textarea
            id="incident"
            name="incident"
            placeholder="Describe the incident"
            maxLength="3000"
            value={formData.incident}
            onChange={handleInputChange}
          ></textarea>
          <small>You have {3000 - formData.incident.length} characters remaining</small>
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <div className="input-wrapper">
            <input
              id="location"
              name="location"
              type="text"
              placeholder="Search for address"
              value={formData.location}
              onChange={handleInputChange}
            />
            <i className="fas fa-map-marker-alt"></i>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              id="date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time</label>
            <input
              id="time"
              name="time"
              type="time"
              value={formData.time}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="files">Photos or videos</label>
          <input
            id="files"
            name="files"
            type="file"
            multiple
            accept="image/*,video/*"
            onChange={handleFileChange}
          />
          <small>You can upload up to 5 files with a maximum size of 10MB each.</small>
        </div>

        <div className="form-actions">
          <button type="button" className="cancel-button">Cancel</button>
          <button type="submit" className="submit-button">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ReportFir;
