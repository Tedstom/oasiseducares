import { useState } from "react";
import { CalendarDays, Globe2, Mail, MapPin, Phone, Send, User, BookOpen, FileText, LockKeyhole } from "lucide-react";
import { countries } from "../data/siteData";

export default function ApplyNow() {
  const [submitted, setSubmitted] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="page enquiry-page">
      <div className="enquiry-hero">
        <div className="enquiry-hero-image" />
        <div className="container enquiry-hero-inner">
          <div className="enquiry-hero-copy">
            <span className="eyebrow light">OASIS EDUCARES • STUDENT SUPPORT</span>
            <h1>Student enquiry</h1>
            <div className="red-rule" />
            <p>All fields marked <b>*</b> are required.</p>
            <div className="enquiry-contact-strip">
              <a href="tel:+919810041849"><Phone size={18}/> India: +91 9810041849</a>
              <span className="contact-divider" />
              <a href="tel:+359882113706"><Phone size={18}/> Bulgarian Representative: Ansel — +359 88 211 3706</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container enquiry-container">
        <form className="application-form enquiry-form" onSubmit={submit}>
          <div className="form-grid">
            <label>
              First name <span>*</span>
              <div className="input-wrap"><User size={17}/><input required placeholder="Enter your first name" /></div>
            </label>
            <label>
              Last name <span>*</span>
              <div className="input-wrap"><User size={17}/><input required placeholder="Enter your last name" /></div>
            </label>
            <label>
              Email <span>*</span>
              <div className="input-wrap"><Mail size={17}/><input type="email" required placeholder="Enter your email address" /></div>
            </label>
            <label>
              Phone <span>*</span>
              <div className="input-wrap"><Phone size={17}/><input required placeholder="Enter your phone number" /></div>
            </label>
            <label>
              Preferred destination <span>*</span>
              <div className="input-wrap"><Globe2 size={17}/><select required defaultValue=""><option value="" disabled>Select country</option>{countries.map(c => <option key={c.code}>{c.name}</option>)}</select></div>
            </label>
            <label>
              Study level
              <div className="input-wrap"><BookOpen size={17}/><select defaultValue=""><option value="">Select level</option><option>Undergraduate</option><option>Postgraduate</option><option>MBBS / Medicine</option><option>MBA</option><option>PhD</option><option>Diploma</option></select></div>
            </label>
            <label>
              Preferred course
              <div className="input-wrap"><GraduationCapIcon /><input placeholder="e.g. MBBS / Medicine" /></div>
            </label>
            <label>
              Intake
              <div className="input-wrap"><CalendarDays size={17}/><select defaultValue=""><option value="">Select intake</option><option>January</option><option>May</option><option>September</option><option>October</option><option>Other</option></select></div>
            </label>
          </div>

          <label className="full-field">
            Additional information
            <div className="textarea-wrap"><FileText size={17}/><textarea rows="5" maxLength="1000" placeholder="Academic background, work experience, budget or questions..." /></div>
          </label>

          <div className="enquiry-submit">
            <button className="btn primary enquiry-submit-btn" type="submit"><Send size={17}/> Submit Enquiry</button>
            <p><LockKeyhole size={15}/> Your information is safe with us and will never be shared.</p>
          </div>

          {submitted && <div className="success">✓ Thank you. Your enquiry has been received. Our counsellor will contact you shortly.</div>}
        </form>

        <div className="enquiry-offices">
          <div className="office-card india-card">
            <div className="office-title"><span>🇮🇳</span><h3>India Office</h3></div>
            <p><MapPin size={17}/><span><b>The Oasis Xpress Travel And Tours</b><br/>210, M-2, Yogeshwar Building<br/>Connaught Place<br/>New Delhi – 110001, India</span></p>
            <p><Phone size={17}/> +91-11-23414303</p>
            <p><Mail size={17}/> admissions@theoasisxpress.com</p>
            <small>Branches: Cochin · Chennai · Bangalore · Changanacherry · Kattappana</small>
          </div>

          <div className="office-card bulgaria-card">
            <div className="office-title"><span>🇧🇬</span><h3>Bulgarian Representative</h3></div>
            <p><User size={17}/><span><b>Ansel</b></span></p>
            <p><Phone size={17}/><a href="tel:+359882113706">+359 88 211 3706</a></p>
            <div className="bulgaria-highlight">Dedicated support for students planning Medicine in Bulgaria.</div>
          </div>

          <div className="office-card uk-card">
            <div className="office-title"><span>🇬🇧</span><h3>UK Office</h3></div>
            <p><MapPin size={17}/><span>XXXXX, Plot xxxx<br/>Bournemouth City Centre<br/>BH1 2EW, Bournemouth<br/>United Kingdom</span></p>
            <p><Phone size={17}/> 01202 XXXXXXX</p>
            <p><Mail size={17}/> info@oasiseducares.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function GraduationCapIcon() {
  return <span className="graduation-placeholder" aria-hidden="true">🎓</span>;
}
