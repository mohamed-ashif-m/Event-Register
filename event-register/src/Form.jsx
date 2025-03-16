import React, { useState, useEffect } from "react";
import "./Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    clg: "",
    dept: "",
    year: "",
    email: "",
    session: "",
  });
  const [attendees, setAttendees] = useState([]);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    const storedAttendees = JSON.parse(localStorage.getItem("attendees")) || [];
    setAttendees(storedAttendees);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.clg || !formData.dept || !formData.year || !formData.email || !formData.session) {
      alert("All fields are required!");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert("Invalid email format!");
      return;
    }

    const updatedAttendees = [...attendees, formData];
    setAttendees(updatedAttendees);
    localStorage.setItem("attendees", JSON.stringify(updatedAttendees));

    setFormData({ name: "", clg: "", dept: "", year: "", email: "", session: "" });
  };

  return (
    <div className="form-page">
      <div className="contain">
        <div className="contain-in">
        <h2 className="h2-in">Event Registration</h2>
      
      <form onSubmit={handleSubmit} className="form-test">
        <input className="input-in" type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
        <input className="input-in" type="text" name="clg" placeholder="Enter Your College Name" value={formData.clg} onChange={handleChange} required />
        <input className="input-in" type="text" name="dept" placeholder="Enter Your Dept" value={formData.dept} onChange={handleChange} required />
        
        <select className="select-in" name="year" value={formData.year} onChange={handleChange} required>
          <option value="">Select a Year</option>
          <option value="I">I</option>
          <option value="II">II</option>
          <option value="III">III</option>
          <option value="IV">IV</option>
        </select>
        
        <input className="input-in" type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
        
        <select className="select-in" name="session" value={formData.session} onChange={handleChange} required>
          <option value="">Select a Event</option>
          <option value="Paper Presentation">Paper Presentation</option>
          <option value="Debugging">Debugging</option>
          <option value="Photography">Photography</option>
        </select>
        
        <button type="submit" className="button-in btn-form">Register</button>
      </form>
        </div>
      </div>
      <div className="attendees-container">
        <div className="blacky"></div>
        <h1 className="greet">Welcome</h1>
        <p className="greeti">Thank you for your interest in our event. Please register below to secure your spot.</p>
        <div className="attendee">
        <h3 
          className="attendees-heading" 
          onClick={() => setShowList(!showList)} // Toggle on click
        >
          Attendees List {showList ? "▲" : "▼"}
        </h3>
        {showList && (
          <ul className="attendees-list ul-in">
            {attendees.length === 0 ? (
              <li className="li-in">No One Registered</li>
            ) : (
              attendees.map((attendee, index) => (
                <li className="li-in" key={index}>{index+1}. {attendee.name}</li>
              ))
            )}
          </ul>
        )}
        </div>     
      </div>
    </div>
    
  );
};

export default Form;
