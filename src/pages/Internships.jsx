import { useState } from "react";
import {
  Monitor,
  ListChecks,
  ClipboardList,
  Users,
  PartyPopper
} from "lucide-react";

const benefitCard = {
  background: "#7EA9C6",
  padding: "20px",
  borderRadius: "10px",
  width: "300px",
  textAlign: "left"
};

const roleCard = {
  background: "#f4f4f4",
  padding: "24px",
  borderRadius: "16px",
  width: "500px",
  boxShadow: "0 6px 14px rgba(0,0,0,0.08)"
};

const iconBox = (color) => ({
  background: color,
  width: "70px",
  height: "70px",
  borderRadius: "14px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "22px auto 10px auto"
});

const stepWrapper = {
  textAlign: "center",
  width: "140px",
  position: "relative"
};

const numberCircle = {
  position: "absolute",
  top: "-12px",
  left: "50%",
  transform: "translateX(-50%)",
  background: "rgba(217,217,217,0.45)",
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "18px",
  fontWeight: "700"
};

const roles = [
  {
    title: "Policy Research Intern",
    points: [
      "Work on constitutional, governance & public policy research",
      "Assist in drafting reports & case studies"
    ],
    details: [
      "Conduct policy research and literature review",
      "Assist in drafting policy briefs and reports",
      "Collaborate with research teams on governance topics"
    ],
    applyLink: "/apply-policy"
  },
  {
    title: "Data & Impact Intern",
    points: [
      "Work on grassroots metrics",
      "Build impact maps & dashboards"
    ],
    details: [
      "Analyze impact datasets",
      "Create dashboards and reports",
      "Support monitoring & evaluation work"
    ],
    applyLink: "/apply-data"
  }
];

const Internships = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  return (
    <div
      className="font-serifcustom bg-gradient-to-r from-blue-100 to-yellow-100 "
      style={{ paddingTop: "120px", paddingBottom: "80px" }}
    >

      {/* WHY JOIN US */}
      <section style={{ textAlign: "center", marginBottom: "50px" }}>
        <h2 style={{ fontSize: "28px", fontWeight: "700" }}>
          Why Join Us?
        </h2>

        <p style={{ marginTop: "8px", color: "#444" }}>
          Work on real policy research. Build real impact. Not just certificates.
        </p>
      </section>

      {/* BENEFITS */}
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "24px",
          flexWrap: "wrap",
          marginBottom: "80px"
        }}
      >
        <div style={benefitCard}>
          <h4 style={{ fontWeight: "700" }}>Policy Exposure</h4>
          <p>Work on live research projects shaping real conversations.</p>
        </div>

        <div style={benefitCard}>
          <h4 style={{ fontWeight: "700" }}>Mentorship</h4>
          <p>Direct guidance from researchers and policy thinkers.</p>
        </div>

        <div style={benefitCard}>
          <h4 style={{ fontWeight: "700" }}>Skill Building</h4>
          <p>Research writing, data analysis, governance frameworks.</p>
        </div>

        <div style={benefitCard}>
          <h4 style={{ fontWeight: "700" }}>Portfolio Work</h4>
          <p>Publishable research and credited contributions.</p>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ textAlign: "center", marginBottom: "80px" }}>
        <h2 style={{ fontSize: "26px", fontWeight: "700" }}>
          Recruitment Process Timeline
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "60px",
            marginTop: "40px",
            flexWrap: "wrap"
          }}
        >

          <div style={stepWrapper}>
            <div style={numberCircle}>1</div>
            <div style={iconBox("#d6dde0")}>
              <Monitor size={30}/>
            </div>
            <p style={{ fontWeight: "600" }}>Apply Online</p>
          </div>

          <div style={stepWrapper}>
            <div style={numberCircle}>2</div>
            <div style={iconBox("#7EA9C6")}>
              <ListChecks size={30}/>
            </div>
            <p style={{ fontWeight: "600" }}>Shortlisting (7 days)</p>
          </div>

          <div style={stepWrapper}>
            <div style={numberCircle}>3</div>
            <div style={iconBox("#F2C94C")}>
              <ClipboardList size={30}/>
            </div>
            <p style={{ fontWeight: "600" }}>Assignment Round</p>
          </div>

          <div style={stepWrapper}>
            <div style={numberCircle}>4</div>
            <div style={iconBox("#F4A261")}>
              <Users size={30}/>
            </div>
            <p style={{ fontWeight: "600" }}>Interview Round</p>
          </div>

          <div style={stepWrapper}>
            <div style={numberCircle}>5</div>
            <div style={iconBox("#8BB174")}>
              <PartyPopper size={30}/>
            </div>
            <p style={{ fontWeight: "600" }}>Offer & Onboarding</p>
          </div>

        </div>
      </section>

      {/* OPEN ROLES */}
      <section style={{ textAlign: "center" }}>
        <h2 style={{ fontSize: "26px", fontWeight: "700" }}>
          Open Roles
        </h2>

        <div 
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 500px)",
            gap: "28px",
            maxWidth: "1050px",
            marginLeft: "auto",
            marginRight:"auto",
          }}
        >
          {roles.map((role, index) => (
            <div key={index} style={roleCard}>

              <h4
                style={{
                  fontWeight: "700",
                  textAlign: "center",
                  marginBottom: "12px"
                }}
              >
                {role.title}
              </h4>

              <ul
                style={{
                  marginTop: "12px",
                  marginBottom: "18px",
                  paddingLeft: "20px",
                  lineHeight: "1.8",
                  listStyleType: "disc",
                  textAlign: "left"
                }}
              >
                {role.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <button
               onClick={() => setSelectedRole(role)}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "999px",
                  border: "1px solid #777",
                  background: "#ffffff",
                  fontWeight: "600",
                  cursor: "pointer"
                }}
              >
                Job Description
              </button>

            </div>
          ))}
        </div>
      </section>
      {selectedRole && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.4)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000
    }}
  >
    <div
      style={{
        background: "#fff",
        padding: "30px",
        borderRadius: "12px",
        width: "500px"
      }}
    >
      <h3 style={{ fontWeight: "700", marginBottom: "10px" }}>
        {selectedRole.title}
      </h3>

      <ul style={{ paddingLeft: "20px", lineHeight: "1.8" }}>
        {selectedRole.details.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <a
          href={selectedRole.applyLink}
          style={{
            padding: "10px 20px",
            background: "#2e7d32",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none"
          }}
        >
          Apply for Internship
        </a>

        <button
          onClick={() => setSelectedRole(null)}
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "1px solid #ccc"
          }}
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default Internships;
