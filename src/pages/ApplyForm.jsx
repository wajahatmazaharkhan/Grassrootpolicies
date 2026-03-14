import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const ApplyForm = () => {

  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");   // internship | partnership

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    profession: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      applicationType: type,
      ...formData
    });

    navigate(`/application-success?type=${type}`);
  };

  const inputStyle = {
    width: "100%",
    padding: "10px 14px",
    borderRadius: "20px",
    border: "1px solid #ddd",
    marginTop: "6px",
    marginBottom: "18px",
    fontSize: "14px"
  };

  return (
    <div
      className="font-serifcustom"
      style={{
        minHeight: "100vh",
        fontWeight: "600",
        paddingTop: "120px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right,#dbeafe,#fef3c7)"
      }}
    >
      <div
        style={{
          width: "420px",
          background: "#ffffff",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)"
        }}
      >

        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          {type === "partnership"
            ? "Partnership Application"
            : "Internship Application"}
        </h2>

        <form onSubmit={handleSubmit}>

          <label>Full Name</label>
          <input
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
          />

          <label>Email</label>
          <input
            name="email"
            type="email"
            placeholder="someone@gmail.com"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />

          <label>Mobile</label>
          <div style={{ display: "flex", gap: "8px", marginTop: "6px", marginBottom: "18px" }}>
            <input
              value="+91"
              readOnly
              style={{
                width: "70px",
                padding: "10px",
                borderRadius: "20px",
                border: "1px solid #ddd"
              }}
            />

            <input
              name="mobile"
              placeholder="1234567890"
              value={formData.mobile}
              onChange={handleChange}
              style={{ ...inputStyle, margin: 0 }}
            />
          </div>

          <label>Profession</label>
          <select
            name="profession"
            value={formData.profession}
            onChange={handleChange}
            style={inputStyle}
          >
            <option>Student</option>
            <option>Government Employee</option>
            <option>Private Employee</option>
            <option>Researcher</option>
            <option>Other</option>
          </select>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "999px",
              border: "none",
              background: "#2e7d32",
              color: "#fff",
              fontWeight: "600",
              fontSize: "16px",
              cursor: "pointer"
            }}
          >
            Submit
          </button>

        </form>
      </div>
    </div>
  );
};

export default ApplyForm;
