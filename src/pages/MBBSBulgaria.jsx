import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, GraduationCap, FileText, Stethoscope, Plane, MapPin } from "lucide-react";

const universities = [
  { name: "Medical University of Sofia", city: "Sofia", established: "1888", medium: "English-taught options" },
  { name: "Medical University of Plovdiv", city: "Plovdiv", established: "1945", medium: "English-taught options" },
  { name: "Medical University of Varna", city: "Varna", established: "1961", medium: "English-taught options" },
  { name: "Medical University of Pleven", city: "Pleven", established: "1974", medium: "English-taught options" }
];

const steps = [
  ["01", "Free Counselling", "Discuss your academic background, medical education goals and preferred intake."],
  ["02", "Profile Evaluation", "Review your profile and identify suitable Bulgarian medical university options."],
  ["03", "University Selection", "Compare suitable universities, programmes, location and admission requirements."],
  ["04", "Application", "Prepare and submit the required documents and application materials."],
  ["05", "Visa & Departure", "Receive guidance for student visa documentation, accommodation and travel preparation."]
];

export default function MBBSBulgaria() {
  return (
    <section className="page mbbs-page">
      <div className="mbbs-hero">
        <div className="container mbbs-hero-inner">
          <div className="mbbs-copy">
            <span className="eyebrow light">OASIS EDUCARES • MEDICAL ADMISSIONS</span>
            <div className="country-pill">🇧🇬 BULGARIA</div>
            <h1>Study Medicine<br /><em>in Bulgaria.</em></h1>
            <p>Personalised guidance for students exploring medical education in Bulgaria — from university selection and applications to visa and pre-departure support.</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/apply">Book Free Counselling <ArrowRight size={18}/></Link>
              <a className="btn ghost" href="#universities">Medical Universities</a>
            </div>
          </div>
          <div className="mbbs-visual">
            <div className="medical-badge"><Stethoscope size={30}/><strong>MD</strong><span>Medical Education</span></div>
            <div className="medical-card"><GraduationCap/><b>Oasis Educares</b><small>Medical admissions guidance</small></div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="mbbs-intro">
            <div>
              <span className="eyebrow">OUR MAIN PROFILE</span>
              <h2>Medical admissions in Bulgaria</h2>
            </div>
            <p>Our existing Oasis Educares site presents Bulgaria as a key medical-admissions destination and highlights university selection, visa assistance, accommodation arrangements and end-to-end student support. citeturn0view0</p>
          </div>

          <div className="medical-feature-grid">
            <div className="medical-feature"><div>🎓</div><h3>University Selection</h3><p>Personalised shortlisting and guidance for choosing a suitable medical university.</p></div>
            <div className="medical-feature"><div>📋</div><h3>Application Support</h3><p>Guidance through documentation and the application process.</p></div>
            <div className="medical-feature"><div>🛂</div><h3>Student Visa Assistance</h3><p>Support with the student visa process and documentation requirements.</p></div>
            <div className="medical-feature"><div>🏠</div><h3>Accommodation</h3><p>Practical support with accommodation arrangements and settling in.</p></div>
          </div>
        </div>
      </section>

      <section className="section alt" id="universities">
        <div className="container">
          <div className="section-title center">
            <span className="eyebrow">MEDICAL UNIVERSITIES</span>
            <h2>Explore leading Bulgarian options</h2>
            <p>Our current site features four Bulgarian medical universities. Fees and deadlines should always be confirmed for the current intake before publication. citeturn0view0</p>
          </div>
          <div className="medical-university-grid">
            {universities.map(u => (
              <div className="medical-university-card" key={u.name}>
                <div className="uni-icon">🩺</div>
                <span className="tag">BULGARIA</span>
                <h3>{u.name}</h3>
                <p><MapPin size={15}/> {u.city}</p>
                <small>Established {u.established} • {u.medium}</small>
                <Link to="/apply">Ask about this university <ArrowRight size={15}/></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container medical-split">
          <div className="medical-panel">
            <span className="eyebrow">FOR INDIAN STUDENTS</span>
            <h2>Eligibility & documents</h2>
            <p>The existing Oasis Educares site lists academic, NEET, language, health and financial requirements. Because university and regulatory requirements can change, we will verify the current intake requirements before publishing final eligibility numbers.</p>
            {["Academic qualification review", "NEET / regulatory requirement review", "English-language requirements", "Medical and financial documentation", "University-specific entrance requirements"].map(x => <div className="check-row" key={x}><CheckCircle2 size={19}/>{x}</div>)}
          </div>
          <div className="medical-panel dark">
            <FileText size={34}/>
            <div className="rep-badge">🇧🇬 Bulgarian Representative: <strong>Ansel</strong><br/><span>+359 88 211 3706</span></div>
            <h2>Need to know your eligibility?</h2>
            <p>Send us your academic details and our counselling team can help identify the next steps.</p>
            <Link className="btn light-btn" to="/apply">Check My Profile <ArrowRight size={17}/></Link>
          </div>
        </div>
      </section>

      <section className="section alt" id="process">
        <div className="container">
          <div className="section-title center">
            <span className="eyebrow">ADMISSION JOURNEY</span>
            <h2>From enquiry to medical school</h2>
            <p>A clear, guided process built around the student's profile.</p>
          </div>
          <div className="medical-steps">
            {steps.map(([n, title, text]) => <div className="medical-step" key={n}><b>{n}</b><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta-inner">
          <div><span className="eyebrow light">MBBS / MEDICAL EDUCATION IN BULGARIA</span><h2>Take the first step towards your medical education journey.</h2><p>India: +91 9810041849 &nbsp; • &nbsp; Bulgarian Representative: Ansel — +359 88 211 3706</p></div>
          <Link className="btn light-btn" to="/apply">Book Free Counselling <ArrowRight size={18}/></Link>
        </div>
      </section>
    </section>
  );
}