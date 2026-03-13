import { useNavigate } from "react-router-dom";

function ContactAcknowledgement() {
  const navigate = useNavigate();

  return (
    <div className="font-serifcustom min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-yellow-100 text-center px-6 pt-32"
    style={{ paddingTop: "120px", paddingBottom: "120px" }}>

      {/* Success Icon */}
      <div className="w-24 h-24 bg-green-700 text-white rounded-full flex items-center justify-center text-4xl mb-8">
        ✓
      </div>

      {/* Title */}
      <h2 className="text-2xl font-semibold mb-4">
        Thank You for Reaching Out
      </h2>

      {/* Message */}
      <p className="text-gray-700 max-w-md mb-10">
        We have received your message successfully and we will get back to you
        as soon as possible.
      </p>

      {/* Button */}
      <button
        onClick={() => navigate("/")}
        style={{ padding: "12px 32px" }}
        className="border border-gray-500 px-12 py-5 rounded-full text-lg hover:bg-gray-100 transition"

      >
        Back to Landing Page
      </button>

    </div>
  );
}

export default ContactAcknowledgement;