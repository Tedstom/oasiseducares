import { useState } from "react";
import {
  CalendarDays,
  Globe2,
  Mail,
  MapPin,
  Phone,
  Send,
  User,
  BookOpen,
  FileText,
  LockKeyhole,
} from "lucide-react";
import { countries } from "../data/siteData";

const API_URL = "https://api.oasiseducares.com/api/counselling/";

export default function ApplyNow() {
  const [submitted, setSubmitted] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSubmitted(false);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const firstName = formData.get("first_name");
    const lastName = formData.get("last_name");

    const data = {
      name: `${firstName} ${lastName}`.trim(),
      mobile: formData.get("mobile"),
      email: formData.get("email"),
      preferred_destination: formData.get("preferred_destination"),
      study_level: formData.get("study_level"),
      preferred_course: formData.get("preferred_course"),
      intake: formData.get("intake"),
      remarks: formData.get("remarks"),
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.detail ||
          result.service?.[0] ||
          result.preferred_destination?.[0] ||
          result.study_level?.[0] ||
          result.preferred_course?.[0] ||
          result.intake?.[0] ||
          "Unable to submit your enquiry."
        );
      }

      setReferenceNumber(result.lead_code || "");
      setSubmitted(true);

      form.reset();
    } catch (err) {
      console.error("ApplyNow submission error:", err);

      setError(
        err.message ||
        "Something went wrong. Please try again or contact us directly."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="page enquiry-page">
      {/* =====================================================
          HERO
      ===================================================== */}

      <div className="enquiry-hero">
        <div className="enquiry-hero-image" />

        <div className="container enquiry-hero-inner">
          <div className="enquiry-hero-copy">
            <span className="eyebrow light">
              OASIS EDUCARES • STUDENT SUPPORT
            </span>

            <h1>Student enquiry</h1>

            <div className="red-rule" />

            <p>
              All fields marked <b>*</b> are required.
            </p>

            <div className="enquiry-contact-strip">
              <a href="tel:+919810041849">
                <Phone size={18} />
                India: +91 9810041849
              </a>

              <span className="contact-divider" />

              <a href="tel:+359882113706">
                <Phone size={18} />
                Bulgarian Representative: Ansel Teddy — +359 88 211 3706
              </a>

              <span className="contact-divider" />

              <a href="tel:+447436348905">
                <Phone size={18} />
                UK Representative: Subin Jose — +44 74363 48905
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          ENQUIRY SECTION
      ===================================================== */}

      <div className="container enquiry-container">
        <form
          className="application-form enquiry-form"
          onSubmit={submit}
        >
          <div className="form-grid">
            {/* FIRST NAME */}

            <label>
              First name <span>*</span>

              <div className="input-wrap">
                <User size={17} />

                <input
                  name="first_name"
                  required
                  placeholder="Enter your first name"
                />
              </div>
            </label>

            {/* LAST NAME */}

            <label>
              Last name <span>*</span>

              <div className="input-wrap">
                <User size={17} />

                <input
                  name="last_name"
                  required
                  placeholder="Enter your last name"
                />
              </div>
            </label>

            {/* EMAIL */}

            <label>
              Email <span>*</span>

              <div className="input-wrap">
                <Mail size={17} />

                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email address"
                />
              </div>
            </label>

            {/* PHONE */}

            <label>
              Phone <span>*</span>

              <div className="input-wrap">
                <Phone size={17} />

                <input
                  name="mobile"
                  required
                  placeholder="Enter your phone number"
                />
              </div>
            </label>

            {/* DESTINATION */}

            <label>
              Preferred destination <span>*</span>

              <div className="input-wrap">
                <Globe2 size={17} />

                <select
                  name="preferred_destination"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select country
                  </option>

                  {countries.map((c) => (
                    <option
                      key={c.code}
                      value={c.name}
                    >
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>
            </label>

            {/* STUDY LEVEL */}

            <label>
              Study level

              <div className="input-wrap">
                <BookOpen size={17} />

                <select
                  name="study_level"
                  defaultValue=""
                >
                  <option value="">
                    Select level
                  </option>

                  <option value="Undergraduate">
                    Undergraduate
                  </option>

                  <option value="Postgraduate">
                    Postgraduate
                  </option>

                  <option value="MBBS / Medicine">
                    MBBS / Medicine
                  </option>

                  <option value="MBA">
                    MBA
                  </option>

                  <option value="PhD">
                    PhD
                  </option>

                  <option value="Diploma">
                    Diploma
                  </option>
                </select>
              </div>
            </label>

            {/* PREFERRED COURSE */}

            <label>
              Preferred course

              <div className="input-wrap">
                <GraduationCapIcon />

                <input
                  name="preferred_course"
                  placeholder="e.g. MBBS / Medicine"
                />
              </div>
            </label>

            {/* INTAKE */}

            <label>
              Intake

              <div className="input-wrap">
                <CalendarDays size={17} />

                <select
                  name="intake"
                  defaultValue=""
                >
                  <option value="">
                    Select intake
                  </option>

                  <option value="January">
                    January
                  </option>

                  <option value="May">
                    May
                  </option>

                  <option value="September">
                    September
                  </option>

                  <option value="October">
                    October
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>
            </label>
          </div>

          {/* =====================================================
              ADDITIONAL INFORMATION
          ===================================================== */}

          <label className="full-field">
            Additional information

            <div className="textarea-wrap">
              <FileText size={17} />

              <textarea
                name="remarks"
                rows="5"
                maxLength="1000"
                placeholder="Academic background, work experience, budget or questions..."
              />
            </div>
          </label>

          {/* =====================================================
              SUBMIT
          ===================================================== */}

          <div className="enquiry-submit">
            <button
              className="btn primary enquiry-submit-btn"
              type="submit"
              disabled={loading}
            >
              <Send size={17} />

              {loading
                ? "Submitting..."
                : "Submit Enquiry"}
            </button>

            <p>
              <LockKeyhole size={15} />
              Your information is safe with us and will never be shared.
            </p>
          </div>

          {/* =====================================================
              SUCCESS MESSAGE
          ===================================================== */}

          {submitted && (
            <div className="success">
              ✓ Thank you! Your enquiry has been received.
              <br />

              {referenceNumber && (
                <>
                  Your reference number is{" "}
                  <strong>{referenceNumber}</strong>.
                  <br />
                </>
              )}

              Our counsellor will contact you shortly.
            </div>
          )}

          {/* =====================================================
              ERROR MESSAGE
          ===================================================== */}

          {error && (
            <div className="error">
              {error}
            </div>
          )}
        </form>

        {/* =====================================================
            OFFICES
        ===================================================== */}

        <div className="enquiry-offices">
          {/* INDIA */}

          <div className="office-card india-card">
            <div className="office-title">
              <span>🇮🇳</span>
              <h3>India Office</h3>
            </div>

            <p>
              <MapPin size={17} />

              <span>
                <b>The Oasis Xpress Travel And Tours</b>
                <br />
                210, M-2, Yogeshwar Building
                <br />
                Connaught Place
                <br />
                New Delhi – 110001, India
              </span>
            </p>

            <p>
              <Phone size={17} />
              +91-11-23414303
            </p>

            <p>
              <Mail size={17} />
              admissions@theoasisxpress.com
            </p>

            <small>
              Branches: Cochin · Chennai · Bangalore ·
              Changanacherry · Kattappana
            </small>
          </div>

          {/* BULGARIA */}

          <div className="office-card bulgaria-card">
            <div className="office-title">
              <span>🇧🇬</span>
              <h3>Bulgarian Representative</h3>
            </div>

            <p>
              <User size={17} />

              <span>
                <b>Ansel</b>
              </span>
            </p>

            <p>
              <Phone size={17} />

              <a href="tel:+359882113706">
                +359 88 211 3706
              </a>
            </p>

            <div className="bulgaria-highlight">
              Dedicated support for students planning Medicine
              in Bulgaria.
            </div>
          </div>

          {/* UK */}

          <div className="office-card uk-card">
            <div className="office-title">
              <span>🇬🇧</span>
              <h3>UK Office</h3>
            </div>

            <p>
              <MapPin size={17} />

              <span>
                XXXXX, Plot xxxx
                <br />
                Bournemouth City Centre
                <br />
                BH1 2EW, Bournemouth
                <br />
                United Kingdom
              </span>
            </p>

            <p>
              <Phone size={17} />
              01202 XXXXXXX
            </p>

            <p>
              <Mail size={17} />
              info@oasiseducares.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function GraduationCapIcon() {
  return (
    <span
      className="graduation-placeholder"
      aria-hidden="true"
    >
      🎓
    </span>
  );
}
