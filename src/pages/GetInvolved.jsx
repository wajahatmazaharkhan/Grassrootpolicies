import { Link } from "react-router-dom";

const cardStyle = {
  backgroundColor: "#4E8B42",
  color: "#ffffff",
  padding: "28px",
  borderRadius: "18px",
  width: "340px",
  height: "150px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};

const GetInvolved = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        paddingTop: "120px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right,#dbeafe,#f5e7c4)",
      }}
    >
      <div style={{ display: "flex", gap: "40px" }}>

        <Link to="/internships" style={{ textDecoration: "none" }}>
          <div style={cardStyle}>
            <h2 className="font-serifcustom text-[20px] mb-1">Internships</h2>
            <p className="font-serifcustom text-[16px]">Join our research-driven grassroots policy team.</p>
          </div>
        </Link>

        <Link to="/partner-with-us" style={{ textDecoration: "none" }}>
          <div style={cardStyle}>
            <h2 className="font-serifcustom text-[20px] mb-1">Partner With Us</h2>
            <p className="font-serifcustom text-[16px]">Collaborate to create impact-driven policy solutions.</p>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default GetInvolved;