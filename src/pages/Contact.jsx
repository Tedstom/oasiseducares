import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const API_URL = "http://127.0.0.1:8000/api/counselling/";

export default function Contact() {


  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "MBBS in Bulgaria",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();

    setSubmitting(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          mobile: formData.phone,
          email: formData.email,
          service: formData.service,
          remarks: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.service?.[0] ||
          data?.detail ||
          "Unable to submit your enquiry."
        );
      }

      setSuccess(
        `Thank you! Your enquiry has been received. Your reference number is ${data.lead_code}. Our counsellor will contact you shortly.`
      );

      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "MBBS in Bulgaria",
        message: "",
      });
    } catch (err) {
      setError(
        err.message ||
        "Something went wrong. Please try again or contact us directly."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="page">
      <div className="page-banner">
        <div className="container">
          <span className="eyebrow light">CONTACT OASIS EDUCARES</span>

          <h1>Let's talk about your medical education plans.</h1>

          <p>
            Tell us where you want to study and our team will help you
            understand your next steps.
          </p>
        </div>
      </div>

      <div className="container section contact-grid">
        <div>
          <span className="eyebrow">OUR OFFICES</span>

          <h2>India & UK support.</h2>

          <div className="contact-office-card">
            <h3>India Office</h3>

            <div className="contact-items">
              <div>
                <MapPin />

                <span>
                  <b>The Oasis Xpress Travel And Tours</b>
                  <small>
                    201, M-2, Yogeshwar Building, Connaught Place,
                    <br />
                    New Delhi – 110001, India
                  </small>
                </span>
              </div>

              <div>
                <Phone />

                <span>
                  <b>Phone</b>
                  <small>+91 9810041849</small>
                </span>
              </div>

              <div>
                <Phone />

                <span>
                  <b>Bulgarian Representative — Ansel</b>
                  <small>+359 88 211 3706</small>
                </span>
              </div>

              <div>
                <Mail />

                <span>
                  <b>Email</b>
                  <small>admissions@theoasisxpress.com</small>
                </span>
              </div>
            </div>

            <small className="footer-branches">
              Branches: Cochin · Chennai · Bangalore · Changanacherry ·
              Kattappana
            </small>
          </div>

          <div className="contact-office-card">
            <h3>UK Representative</h3>

            <div className="contact-items">
              <div>
                <MapPin />

                <span>
                  <b>OASIS EDUCARES</b>
                  <small>
                    Subin Jose,
                    <br />
                    Bournemouth, United Kingdom
                  </small>
                </span>
              </div>

              <div>
                <Phone />

                <span>
                  <b>UK Contact Phone</b>
                  <small>+44 74363 48905</small>
                </span>
              </div>

              <div>
                <Mail />

                <span>
                  <b>Email</b>
                  <small>info@oasiseducares.com</small>
                </span>
              </div>
            </div>
          </div>
        </div>

        <form id="counselling-form" className="form-card" onSubmit={submit}>
          <h3>Book a free counselling session</h3>

          <label>
            Name
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+91"
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </label>

          <label>
            Interested in
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="MBBS in Bulgaria">
                MBBS in Bulgaria
              </option>

              <option value="Overseas Education Counselling">
                Other Medical Programme
              </option>

              <option value="Study Abroad Consultation">
                Other Study Destination
              </option>
            </select>
          </label>

          <label>
            Message
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Tell us about your academic background and study plans"
            />
          </label>

          <button
            className="btn primary"
            type="submit"
            disabled={submitting}
          >
            {submitting ? "Sending..." : "Send Enquiry"}
          </button>

          {success && (
            <div className="success" role="status">
              {success}
            </div>
          )}

          {error && (
            <div className="error" role="alert">
              {error}
            </div>
          )}

          {!success && !error && (
            <small>
              Your enquiry will be securely submitted to our counselling
              team.
            </small>
          )}
        </form>
      </div>
    </section>
  );
}