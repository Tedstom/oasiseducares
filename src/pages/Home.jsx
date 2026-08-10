import { Link } from "react-router-dom";
import { ArrowRight, Building2, CheckCircle2, GraduationCap, HeartPulse, Plane, Stethoscope, WalletCards, Globe2, Users, FileCheck2, Star } from "lucide-react";
import { universities, medicalBenefits, medicalJourney, testimonials } from "../data/siteData";

const whyBulgarian = [
  "English-taught Medicine programmes",
  "European medical education environment",
  "Modern facilities and practical training",
  "Student-friendly and supportive destination",
  "Guidance from university selection to departure"
];

export default function Home() {
  return (
    <>
      <section className="landing-hero">
        <div className="landing-hero-image" />
        <div className="container landing-hero-content">
          <div className="landing-copy">
            <span className="eyebrow light">OASIS EDUCARES • MEDICAL EDUCATION</span>
            <div className="hero-country-pill">🇧🇬 BULGARIA</div>
            <h1>STUDY<br/><span>MBBS IN BULGARIA</span></h1>
            <h2>Your Dream of Becoming a Doctor Starts Here</h2>
            <p>Pursue your medical degree in Europe with internationally recognised universities, world-class education, modern infrastructure and affordable tuition fees.</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/mbbs-in-bulgaria">Explore MBBS in Bulgaria <ArrowRight size={18}/></Link>
              <Link className="btn white-outline" to="/apply">Book Free Counselling <CalendarIcon/></Link>
            </div>
          </div>
          <div className="hero-bulgaria-card"><div className="flag-circle">🇧🇬</div><div><strong>BULGARIA</strong><span>A Smart Choice for Your<br/>Medical Career</span></div></div>
        </div>
      </section>

      <section className="hero-feature-strip">
        <div className="container hero-feature-grid">
          <Feature icon={<Building2/>} title="Top Ranked" text="Medical Universities" />
          <Feature icon={<Stethoscope/>} title="Medicine in" text="English" />
          <Feature icon={<WalletCards/>} title="Affordable Tuition" text="& Living" />
          <Feature icon={<Users/>} title="End-to-End" text="Support" />
        </div>
      </section>

      <section className="section why-section" id="why-bulgaria">
        <div className="container why-grid">
          <div className="why-panel">
            <Stethoscope size={58}/>
            <span className="eyebrow light">WHY CHOOSE BULGARIA FOR MBBS?</span>
            <h2>A European pathway to your medical career.</h2>
            <div className="why-list">
              {whyBulgarian.map(item => <span key={item}><CheckCircle2 size={16}/>{item}</span>)}
            </div>
            <Link className="btn light-btn" to="/mbbs-in-bulgaria">Know More About Bulgaria <ArrowRight size={16}/></Link>
          </div>
          <div className="benefit-grid">
            <Benefit icon="🎓" title="Globally Recognised Degrees" text="Explore recognised medical education options and university pathways."/>
            <Benefit icon="🫀" title="High Quality Education" text="European academic environment with focus on medical and practical learning."/>
            <Benefit icon="🏛️" title="Affordable Fees" text="Compare tuition and living costs across Bulgarian medical universities."/>
            <Benefit icon="✈️" title="International Environment" text="A diverse international student community and European setting."/>
            <Benefit icon="🎧" title="Complete Support" text="From admission and documentation to visa and pre-departure support."/>
          </div>
        </div>
      </section>

      <section className="section journey-section" id="process">
        <div className="container">
          <div className="journey-heading"><span>YOUR JOURNEY TO BECOME A DOCTOR</span></div>
          <div className="journey-strip">
            {medicalJourney.map((j, i) => <div className="journey-step" key={j.number}><div className="journey-number">{j.icon}</div><small>{j.number}</small><strong>{j.title}</strong>{i < medicalJourney.length - 1 && <ArrowRight className="journey-chevron" size={17}/>}</div>)}
          </div>
        </div>
      </section>

      <section className="support-section">
        <div className="container support-banner">
          <div className="support-icon"><HeartPulse size={66}/></div>
          <div><span className="eyebrow light">OASIS EDUCARES</span><h2>We make your dream of becoming a doctor a reality!</h2><p>Personalised guidance for students and parents at every step of the medical education journey.</p></div>
          <Link className="btn light-btn" to="/apply">Book Free Counselling <ArrowRight size={17}/></Link>
        </div>
      </section>

      <section className="stats-band">
        <div className="container stats-grid">
          <Stat icon={<Building2/>} value="7+" label="Medical Universities" />
          <Stat icon={<GraduationCap/>} value="25+" label="Years Travel Experience" />
          <Stat icon={<Users/>} value="1:1" label="Student Counselling" />
          <Stat icon={<Globe2/>} value="7+" label="International Destinations" />
          <Stat icon={<FileCheck2/>} value="360°" label="Student Support" />
        </div>
      </section>

      <section className="section university-preview-section">
        <div className="container">
          <div className="section-heading-row"><div><span className="eyebrow">MEDICAL UNIVERSITIES</span><h2>Explore Medical Universities in Bulgaria</h2><p>Compare leading institutions offering Medicine in English.</p></div><Link className="btn outline" to="/universities">View All Universities <ArrowRight size={16}/></Link></div>
          <div className="mini-university-grid">
            {universities.slice(0,4).map(u => <Link to="/universities" className="mini-university" key={u.id}><div className="mini-university-icon"><GraduationCap/></div><span>🇧🇬 {u.city}</span><h3>{u.name}</h3><small>{u.programme} · {u.duration}</small><b>View details <ArrowRight size={14}/></b></Link>)}
          </div>
        </div>
      </section>

      <section className="section testimonials-section" id="testimonials">
        <div className="container">
          <div className="section-heading-row"><div><span className="eyebrow">STUDENT EXPERIENCES</span><h2>What Our Medical Students Say</h2><p>Real experiences from students who trusted Oasis with their medical education journey.</p></div><a className="btn outline" href="https://oasisxpress.com/#testimonials" target="_blank" rel="noreferrer">View Existing Testimonials <ArrowRight size={16}/></a></div>
          <div className="testimonial-grid">
            {testimonials.slice(0,4).map(t => <article className="testimonial" key={t.name}><div className="stars"><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/></div><p>“{t.text}”</p><strong>{t.name}</strong><small>{t.course}</small></article>)}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta-inner"><div><span className="eyebrow light">START YOUR MEDICAL JOURNEY</span><h2>Ready to explore MBBS in Bulgaria?</h2><p>Talk to Oasis Educares and take the first step.</p></div><Link className="btn light-btn" to="/apply">Book Free Counselling <ArrowRight size={18}/></Link></div>
      </section>
    </>
  );
}

function Feature({ icon, title, text }) { return <div className="hero-feature"><div className="feature-circle">{icon}</div><div><strong>{title}</strong><span>{text}</span></div></div>; }
function Benefit({ icon, title, text }) { return <div className="benefit-card"><div className="benefit-icon">{icon}</div><h3>{title}</h3><p>{text}</p></div>; }
function Stat({ icon, value, label }) { return <div className="stat"><div>{icon}</div><strong>{value}</strong><span>{label}</span></div>; }
function CalendarIcon() { return <span className="calendar-icon">▣</span>; }
