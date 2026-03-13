import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/contact-acknowledgement");
  };

  return (
    <div
      className="font-serifcustom min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-blue-100 to-yellow-100"
       style={{ paddingTop: "120px", paddingBottom: "120px" }}
    >

      <div
        className="bg-gray-100 rounded-3xl shadow-xl w-full max-w-2xl"
        style={{ padding: "60px" }}
      >

        <form onSubmit={handleSubmit} className="flex flex-col gap-6 items-center">

          <div style={{ width: "80%" }}>
            <label className="font-semibold block mb-2">Full Name</label>

            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              style={{ padding: "12px 20px", width: "100%" }}
              className="border border-gray-300 rounded-full"
              required
            />
          </div>

          <div style={{ width: "80%" }}>
            <label className="font-semibold block mb-2">Email</label>

            <input
              type="email"
              name="email"
              placeholder="someone@gmail.com"
              value={formData.email}
              onChange={handleChange}
              style={{ padding: "12px 20px", width: "100%" }}
              className="border border-gray-300 rounded-full"
              required
            />
          </div>

          <div style={{ width: "80%" }}>
            <label className="font-semibold block mb-2">Message</label>

            <textarea
              name="message"
              rows="4"
              placeholder="Value"
              value={formData.message}
              onChange={handleChange}
              style={{ padding: "12px 20px", width: "100%" }}
              className="border border-gray-300 rounded-2xl"
              required
            />
          </div>

          <button
            type="submit"
            style={{ padding: "12px 32px", width: "80%" }}
            className="bg-green-700 text-white rounded-full text-lg font-semibold hover:bg-green-800 transition"
          >
            Submit
          </button>

        </form>

      </div>

    </div>
  );
}

export default Contact;