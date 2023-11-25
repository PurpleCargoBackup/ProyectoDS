import React, { useState } from 'react';
//import '../styles/Contact.css'; horrible

function Contact() {
  const [formData, setFormData] = useState({ fullName: '', email: '', message: '' });
 
  const handleChange = (e) => {
     setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = (e) => {
     e.preventDefault();
     console.log('Form submitted:', formData);
     // Add your logic for sending the form data here
  };
 
  return (
     <div style={{ width: '80%', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', marginTop: "40px" }}>
       <h2>Contact Us</h2>
       <form onSubmit={handleSubmit}>
         <label htmlFor="fname">Nombre Completo</label>
         <input type="text" id="fname" name="fullName" value={formData.fullName} onChange={handleChange} required style={{ width: "100%",
            padding: "12px 20px",
            margin: "8px 0",
            display: "inline-block",
            border: "1px solid #ccc",
            boxSizing: "border-box" }} />
 
         <label htmlFor="email">Mail</label>
         <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: "100%",
            padding: "12px 20px",
            margin: "8px 0",
            display: "inline-block",
            border: "1px solid #ccc",
            boxSizing: "border-box" }} />
 
         <label htmlFor="message">Mensaje</label>
         <textarea id="message" name="message" value={formData.message} onChange={handleChange} required style={{ width: "100%",
            padding: "12px 20px",
            margin: "8px 0",
            display: "inline-block",
            border: "1px solid #ccc",
            boxSizing: "border-box" }} />
 
         <button type="submit" style={{ backgroundColor: "#4CAF50",
            color: "white",
            padding: "14px 20px",
            margin: "8px 0",
            border: "none",
            cursor: "pointer",
            width: "100%", ":hover": {
               opacity: 0.8,
            } }}>
            Enviar
         </button>
       </form>
       <p style={{ fontSize: "20px", marginLeft: "640px" }}>¡Gracias por tu Mensaje!</p>
     </div>
  );
 }
 
 export default Contact;