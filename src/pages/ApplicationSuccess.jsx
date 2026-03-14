import { Link, useSearchParams } from "react-router-dom";
import { Check } from "lucide-react";

const ApplicationSuccess = () => {

  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  const isPartnership = type === "partnership";

  return (
    <div
      className="font-serifcustom"
      style={{
        minHeight: "100vh",
        paddingTop: "120px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to right,#dbeafe,#fef3c7)"
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "620px" }}>

        <div
          style={{
            width: "90px",
            height: "90px",
            borderRadius: "50%",
            background: "#2e7d32",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px auto"
          }}
        >
          <Check size={40} color="#fff" />
        </div>

        <h2 style={{ fontWeight: "700", marginBottom: "12px" }}>
          {isPartnership
            ? "Thank You for Connecting With Us"
            : "Thank You for Applying"}
        </h2>

        <p style={{ color: "#555", lineHeight: "1.6", marginBottom: "30px" }}>
          {isPartnership ? (
            <>
              We have received your partnership details successfully.
              <br />
              Our team will review your proposal and get in touch with you shortly.
              <br />
              We sincerely value your interest in partnering with Grassroots Policies.
            </>
          ) : (
            <>
              We have received your internship application successfully.
              <br />
              Our team will review your profile and reach out to you soon regarding the next steps.
              <br />
              We truly appreciate your interest in interning with Grassroots Policies.
            </>
          )}
        </p>

        <Link
          to="/"
          style={{
            padding: "12px 26px",
            borderRadius: "999px",
            border: "1px solid #777",
            textDecoration: "none",
            color: "#333",
            fontWeight: "600"
          }}
        >
          Back to Landing Page
        </Link>

      </div>
    </div>
  );
};

export default ApplicationSuccess;
