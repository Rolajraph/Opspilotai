import { useState } from "react";
import { Eye, EyeSlash, ArrowRight, ShieldCheck } from "@phosphor-icons/react";
import leftSideBrand from "../assets/images/leftsidebrand-image.png";
import "./SignInPage.css";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("https://opspilotai-m08y.onrender.com/api/auth/login",
        {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Login failed. Please try again.");
        setIsSubmitting(false);
        return;
      }

      localStorage.setItem("opspilot_token", data.token);
      localStorage.setItem("opspilot_user", JSON.stringify(data.user));

      window.location.href = "http://opspilotai-dashboard.onrender.com";
    } catch (err) {
      setError("Unable to connect to the server. Please try again.");
      setIsSubmitting(false);
    }
  };
  return (
    <div className="signin">
      <div className="signin__left">
        <img
          src={leftSideBrand}
          alt="OpsPilot AI — Your AI Operating Layer for Modern Organizations"
          className="signin__left-image"
        />
      </div>

      <div className="signin__right">
        <div className="signin__panel">
          <div className="signin__card">
            <div className="signin__header">
              <h1 className="signin__heading">Welcome</h1>
              <p className="signin__subtext">
                Please enter your details to sign in.
              </p>
            </div>

            <form className="signin__form" onSubmit={handleSubmit}>
              <div className="signin__field">
                <label htmlFor="email" className="signin__label">
                  Work Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="sarah.chen@enterprise.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="signin__input"
                />
              </div>

              <div className="signin__field">
                <div className="signin__label-row">
                  <label htmlFor="password" className="signin__label">
                    Password
                  </label>
                  <a href="/forgot-password" className="signin__forgot-link">
                    Forgot Password?
                  </a>
                </div>
                <div className="signin__password-wrapper">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="signin__input"
                  />
                  <button
                    type="button"
                    className="signin__eye-toggle"
                    onClick={() => setShowPassword((show) => !show)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeSlash size={16} color="#464554" />
                    ) : (
                      <Eye size={16} color="#464554" />
                    )}
                  </button>
                </div>
              </div>

              <label className="signin__checkbox-row">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(event) => setRememberMe(event.target.checked)}
                  className="signin__checkbox"
                />
                <span>Remember me for 30 days</span>
              </label>

              {error && <p className="signin__error">{error}</p>}
              <button
                type="submit"
                className="signin__submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Signing in..." : "Sign In"}
                <ArrowRight size={16} color="#ffffff" />
              </button>
              <p className="signin__demo-link">
                Don&apos;t have an account?{" "}
                <a href="https://opspilotai-landing.onrender.com" className="signin__demo-link-span">
                  Get a Demo
                </a>
              </p>
            </form>
          </div>

          <div className="signin__trust-badge">
            <ShieldCheck size={13} color="#006C49" weight="fill" />
            <span>SOC2 Type II &amp; GDPR Compliant</span>
          </div>

          <div className="signin__footer-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/security">Security Details</a>
          </div>
        </div>
      </div>
    </div>
  );
}
