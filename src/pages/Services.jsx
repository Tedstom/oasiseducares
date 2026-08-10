import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "../data/siteData";
import SectionTitle from "../components/SectionTitle";

export default function Services() {
  return (
    <section className="page">
      <div className="page-banner"><div className="container"><span className="eyebrow light">STUDENT SUPPORT</span><h1>Support at every step</h1><p>From university selection and admission to visa, accommodation and travel support.</p></div></div>
      <div className="container section">
        <SectionTitle title="How Oasis Educares helps" text="Professional guidance designed around the needs of international students and their families."/>
        <div className="service-grid large">
          {services.map(s => <div className="service-card" key={s.title}><span>{s.icon}</span><h3>{s.title}</h3><p>{s.text || s.description}</p>{s.details && <ul className="service-details">{s.details.map(d => <li key={d}>{d}</li>)}</ul>}<Link to="/apply">Get help <ArrowRight size={14}/></Link></div>)}
        </div>
        <div className="accommodation-service-inline"><div className="accommodation-icon">🏠</div><div><span className="eyebrow">STUDENT SETTLEMENT SUPPORT</span><h2>Accommodation Assistance</h2><p>We provide a range of accommodation options to suit different needs and preferences, helping international students settle comfortably in a safe, welcoming and supportive living environment.</p><p>We also have tie-ups with realtor agents who can cater to individual student accommodation requirements.</p></div></div>
        <div className="center mt-50"><Link className="btn primary" to="/apply">Book Free Counselling <ArrowRight size={17}/></Link></div>
      </div>
    </section>
  );
}
