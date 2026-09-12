import { useState } from "react";
import { ArrowRight } from "@phosphor-icons/react";
import "./RequestDemoForm.css";

const COMPANY_SIZE_OPTIONS = ["1 - 50", "50 - 250", "250 - 1000", "1000+"];
const PRIMARY_FOCUS_OPTIONS = [
  "Operations Orchestration",
  "Workflow Automation",
  "Knowledge Management",
  "Executive Reporting",
  "Risk Detection",
];

export default function RequestDemoForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    companyName: "",
    companySize: "50 - 250",
    primaryFocus: "Operations Orchestration",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setStatus("submitting");

    try {
      const response = await fetch("https://opspilotai-m08y.onrender.com/api/demo-requests",
         {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Something went wrong. Please try again.");
        setStatus("idle");
        return;
      }

      setStatus("success");
    } catch (err) {
      setError("Unable to connect to the server. Please try again.");
      setStatus("idle");
    }
  };

  if (status === "success") {
    return (
      <div className="request-demo-form">
        <h2 className="request-demo-form__heading">Thank you!</h2>
        <p className="request-demo-form__subtext">
          We've received your request and sent a confirmation to your
          email. Our team will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="request-demo-form">
      <h2 className="request-demo-form__heading">Schedule a Demo</h2>
      <p className="request-demo-form__subtext">
        Learn how OpsPilot AI transforms enterprise workflows with a live
        personalized demonstration from one of our solution architects.
      </p>

      <form className="request-demo-form__form" onSubmit={handleSubmit}>
        <div className="request-demo-form__field">
          <label htmlFor="name" className="request-demo-form__label">
            Name <span>*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="request-demo-form__input"
          />
        </div>

        <div className="request-demo-form__field">
          <label htmlFor="phone" className="request-demo-form__label">
            Phone number <span>*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+234"
            value={formData.phone}
            onChange={handleChange}
            className="request-demo-form__input"
          />
        </div>

        <div className="request-demo-form__field">
          <label htmlFor="email" className="request-demo-form__label">
            Work Email <span>*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="name@company.com"
            value={formData.email}
            onChange={handleChange}
            className="request-demo-form__input"
          />
        </div>

        <div className="request-demo-form__field">
          <label htmlFor="companyName" className="request-demo-form__label">
            Company Name <span>*</span>
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            required
            placeholder="Enter your company name"
            value={formData.companyName}
            onChange={handleChange}
            className="request-demo-form__input"
          />
        </div>

        <div className="request-demo-form__row">
          <div className="request-demo-form__field">
            <label htmlFor="companySize" className="request-demo-form__label">
              Company Size
            </label>
            <select
              id="companySize"
              name="companySize"
              value={formData.companySize}
              onChange={handleChange}
              className="request-demo-form__select"
            >
              {COMPANY_SIZE_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="request-demo-form__field">
            <label htmlFor="primaryFocus" className="request-demo-form__label">
              Primary Focus
            </label>
            <select
              id="primaryFocus"
              name="primaryFocus"
              value={formData.primaryFocus}
              onChange={handleChange}
              className="request-demo-form__select"
            >
              {PRIMARY_FOCUS_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {error && <p className="request-demo-form__error">{error}</p>}

        <button
          type="submit"
          className="request-demo-form__submit"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Submitting..." : "Request Live Demo"}
          <ArrowRight size={16} color="#ffffff" />
        </button>
      </form>
    </div>
  );
}