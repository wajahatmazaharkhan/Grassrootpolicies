import { Link } from "react-router-dom";

const cardStyle = {
  background: "#f4f4f4",
  padding: "22px",
  borderRadius: "14px",
  width: "280px",
  boxShadow: "0 6px 16px rgba(0,0,0,0.08)"
};

const PartnerWithUs = () => {
  return (
    <div
      className="font-serifcustom bg-gradient-to-r from-blue-100 to-yellow-100"
      style={{ paddingTop: "120px", paddingBottom: "120px" }}
    >

      <section style={{ textAlign: "center", marginBottom: "40px" }}>
        <h2 style={{ fontSize: "28px", fontWeight: "700" }}>
          Building Change Through Collaboration
        </h2>

        <p style={{ marginTop: "10px", color: "#444" }}>
          We work with institutions that believe in research-led impact.
        </p>
      </section>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "24px",
          flexWrap: "wrap",
          marginBottom: "40px"
        }}
      >
        <div style={cardStyle}>
          <h4 style={{ fontWeight: "700", marginBottom: "8px" }}>
            Universities
          </h4>

          <ul style={{ paddingLeft: "18px", lineHeight: "1.8" }}>
            <li>Policy research collaborations</li>
            <li>Student fellowships</li>
            <li>Joint publications</li>
            <li>Policy labs & workshops</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h4 style={{ fontWeight: "700", marginBottom: "8px" }}>
            NGOs
          </h4>

          <ul style={{ paddingLeft: "18px", lineHeight: "1.8" }}>
            <li>Field data partnerships</li>
            <li>Program evaluation</li>
            <li>Impact documentation</li>
            <li>Advocacy research support</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h4 style={{ fontWeight: "700", marginBottom: "8px" }}>
            Think Tanks & Civil Groups
          </h4>

          <ul style={{ paddingLeft: "18px", lineHeight: "1.8" }}>
            <li>Research collaborations</li>
            <li>Issue-based white papers</li>
            <li>Public policy roundtables</li>
            <li>Joint policy advocacy initiatives</li>
          </ul>
        </div>
      </div>

      {/* BUTTON SECTION */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "16px"
        }}
      >

        {/* Download Deck */}

        <a
          href="/documents/partnership-deck.pdf"
          download
          style={{
            padding: "10px 24px",
            borderRadius: "999px",
            border: "1px solid #777",
            background: "#ffffff",
            fontWeight: "600",
            textDecoration: "none",
            color: "#333"
          }}
        >
          Download Partnership Deck (PDF)
        </a>

        {/* Apply Button */}

        <Link
          to="/apply?type=partnership"
          style={{
            padding: "10px 24px",
            borderRadius: "999px",
            background: "#2e7d32",
            color: "#ffffff",
            fontWeight: "600",
            textDecoration: "none"
          }}
        >
          Apply to Collaborate
        </Link>

      </div>

    </div>
  );
};

export default PartnerWithUs;
