import { Link, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { countries } from "../data/siteData";

export default function CountryDetails() {
  const { code } = useParams();
  const country = countries.find(c => c.code === code) || countries[0];
  return (
    <section className="page">
      <div className="detail-hero" style={{backgroundImage: `linear-gradient(90deg, rgba(7,23,51,.9), rgba(7,23,51,.35)), url(${country.image})`}}>
        <div className="container"><span className="flag big">{country.flag}</span><h1>{country.title}</h1><p>{country.description}</p><Link to="/apply" className="btn primary">Discuss your options <ArrowRight size={17}/></Link></div>
      </div>
      <div className="container section">
        <div className="detail-grid">
          <div><span className="eyebrow">WHY {country.name.toUpperCase()}</span><h2>Build your future with a global education</h2><p>Choosing the right destination depends on your academic background, budget, career goals and preferred lifestyle. Our counsellors can help you evaluate your options.</p><div className="highlight-list">{country.highlights.map(x => <div key={x}><CheckCircle2 size={19}/>{x}</div>)}</div></div>
          <div className="info-box"><strong>{country.universities}</strong><span>Partner & target universities</span><hr/><strong>Personalised</strong><span>Course & university shortlisting</span><hr/><strong>End-to-end</strong><span>Application guidance</span></div>
        </div>
      </div>
    </section>
  );
}