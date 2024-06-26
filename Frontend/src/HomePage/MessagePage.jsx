


import React, { useContext, useState } from "react";
import { ContextCreateApi } from "../Context/ContextApi";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MessageForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const { SendMessage } = useContext(ContextCreateApi);

  const handleMessage = async (e) => {
    e.preventDefault();
    
    SendMessage(firstName, lastName, email, phone, message);
    
    // Clear form after submission
    setTimeout(() => {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }, 1500);
  };

  const inputStyles = {
    backgroundColor: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
    padding: "10px",
    transition: "border-bottom-color 0.3s ease",
    width: "100%",
    marginBottom: "10px",
    fontSize: "1rem"
  };

  const buttonStyles = {
    backgroundColor: "#424242",
    color: "white",
    padding: "12px 20px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    fontSize: "1rem"
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleMessage(e);
  };

  return (
    <>
      <ToastContainer />
      <div className="bg-gray-100 py-12 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <h2 className="text-center text-2xl md:text-2xl font-600 mb-8">Send Us A Message</h2>
          <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  style={inputStyles}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  style={inputStyles}
                />
              </div>
            </div>
            <div className="mb-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={inputStyles}
                />
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={inputStyles}
                />
              </div>
            </div>
            <textarea
              rows={7}
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ ...inputStyles, resize: "vertical" }}
            />
            <div className="flex justify-center">
              <button type="submit" style={buttonStyles} className="mt-6">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MessageForm;


