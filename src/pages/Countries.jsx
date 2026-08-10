import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import { countries } from "../data/siteData";
import { ArrowRight } from "lucide-react";

export default function Countries() {
  return (
    <section className="page">
      <div className="page-banner"><div className="container"><span className="eyebrow light">STUDY DESTINATIONS</span><h1>Choose your destination</h1><p>Explore leading countries for international education.</p></div></div>
      <div className="container section">
        <SectionTitle title="Explore our destinations" text="Compare destinations based on your academic interests, career plans and preferences." />
        <div className="country-grid large">
          {countries.map(c => <Link className="country-card" to={`/countries/${c.code}`} key={c.code}><img src={c.image} alt={c.name}/><div className="country-overlay"><span className="flag">{c.flag}</span><h3>{c.name}</h3><p>{c.universities} universities</p><span className="card-link">View destination <ArrowRight size={16}/></span></div></Link>)}
        </div>
      </div>
    </section>
  );
}