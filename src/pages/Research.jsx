import { useState } from "react";

export default function Research() {

  const [active, setActive] = useState("Democratic Institutions");

  const researchData = {
    "Democratic Institutions": [
      {
        title: "Inside Parliament",
        desc: "Examining declining deliberation, executive dominance, and institutional accountability within India's Parliament.",
      },
      {
        title: "Grassroots India",
        desc: "Analysing Panchayats, urban governance, and the evolving framework of decentralised democracy.",
      },
      {
        title: "Economic Development & Democracy",
        desc: "Evaluating welfare reforms, economic transitions, and democratic influence on policy outcomes.",
      },
      {
        title: "Democracy Through a Feminist Lens",
        desc: "Exploring gendered power structures and representation within India's democratic institutions.",
      },
    ],

    "Civil Liberties & Rights": [
      {
        title: "Voices of Democracy",
        desc: "Assessing freedom of speech, structural inequality, and constitutional limits of expression.",
      },
      {
        title: "When Protests Become a Crime",
        desc: "Investigating the rise of anti-protest laws and the systemic crackdown on democratic disagreement.",
      },
    ],

    "Media & Digital Governance": [
      {
        title: "Media Under Pressure",
        desc: "Analysing media ownership concentration, regulatory gaps, and democratic information risks.",
      },
      {
        title: "Digital Privacy & The DPDP Act",
        desc: "Evaluating data protection, state exemptions, and accountability in digital governance.",
      },
    ],

    "Identity & Inequality": [
      {
        title: "Caste, Class & Identity",
        desc: "Examining caste mobilisation, political engineering, and evolving electoral power structures.",
      },
      {
        title: "Civil Society & Political Voice",
        desc: "Exploring grassroots mobilisation, collective participation, and democratic engagement dynamics.",
      },
      {
        title: "Grassroot Policy Studies",
        desc: "Investigating structural inequalities and policy impacts on marginalised communities.",
      },
    ],
  };

  return (
    <div
      style={{
        paddingTop: "120px",
        paddingBottom: "150px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "40px",
      }}
    >

      {/* CATEGORY TABS */}
      <div
        style={{
          display: "flex",
          gap: "18px",
          background: "#EFEFEF",
          padding: "8px 16px",
          borderRadius: "30px",
          flexWrap: "wrap",
        }}
      >
        {Object.keys(researchData).map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            style={{
              border: "none",
              background:
                active === category ? "rgba(78,139,66,0.2)" : "transparent",
              padding: "6px 14px",
              borderRadius: "20px",
              cursor: "pointer",
              fontFamily: "'Lora', serif",
              fontSize: "14px",
              color: active === category ? "#4E8B42" : "#2D2D2D",
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* RESEARCH CARDS */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          justifyContent: "flex-start",
          maxWidth: "1000px",
        }}
      >
        {researchData[active].map((item, index) => (
          <div
            key={index}
            style={{
              width: "310px",
              background: "rgba(238,238,238,0.54)",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow:
                "-1px -1px 10px rgba(0,0,0,0.1), 1px 1px 10px rgba(0,0,0,0.1)",
            }}
          >
            {/* IMAGE */}
            <img
              src="/images/research/center.png"
              alt="research"
              style={{
                width: "100%",
                height: "190px",
                objectFit: "cover",
              }}
            />

            {/* CONTENT */}
            <div style={{ padding: "15px" }}>
              <h3
                style={{
                  fontFamily: "'Lora', serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  marginBottom: "8px",
                  color: "#2D2D2D",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontFamily: "'Lora', serif",
                  fontSize: "14px",
                  lineHeight: "18px",
                  color: "#2D2D2D",
                }}
              >
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}