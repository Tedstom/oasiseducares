import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, MapPin, GraduationCap } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { universities } from "../data/siteData";

export default function Universities() {
  const [city, setCity] = useState("All");
  const [search, setSearch] = useState("");

  const cities = ["All", ...new Set(universities.map(u => u.city))];

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return universities.filter(u =>
      (city === "All" || u.city === city) &&
      (!q || `${u.name} ${u.city} ${u.programme}`.toLowerCase().includes(q))
    );
  }, [city, search]);

  return (
    <section className="page">
      <div className="page-banner">
        <div className="container">
          <span className="eyebrow light">BULGARIA • MEDICAL UNIVERSITIES</span>
          <h1>Medical Universities in Bulgaria</h1>
          <p>Compare the universities and institutions offering Medicine in English and find the option that best fits your profile.</p>
        </div>
      </div>

      <div className="container section">
        <SectionTitle
          title="Study Medicine in Bulgaria"
          text="Oasis Educares provides guidance across the principal Bulgarian universities and institutions currently offering English-taught Medicine."
        />

        <div className="university-tools">
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search university or city..."
            aria-label="Search university"
          />
          <div className="city-filters">
            {cities.map(c => (
              <button key={c} className={city === c ? "filter active" : "filter"} onClick={() => setCity(c)}>
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="university-count">
          Showing <strong>{filtered.length}</strong> of <strong>{universities.length}</strong> Bulgarian institutions
        </div>

        <div className="university-grid medical-university-grid">
          {filtered.map(u => (
            <article className="university-card medical-university-card" key={u.id}>
              <div className="university-image-wrap">
                <img src={u.image} alt={`${u.name}, ${u.city}`} />
                <span className="medicine-tag">🩺 Medicine in English</span>
              </div>

              <div>
                <span className="tag">🇧🇬 Bulgaria</span>
                <h3>{u.name}</h3>
                <p className="location"><MapPin size={14}/> {u.city}</p>

                <div className="university-facts">
                  <div><GraduationCap size={16}/><span><b>Programme</b>{u.programme}</span></div>
                  <div><span><b>Duration</b>{u.duration}</span></div>
                  <div><span><b>Tuition</b>{u.tuition}</span></div>
                  <div><span><b>Admission</b>{u.admission}</span></div>
                </div>

                <div className="university-actions">
                  <Link to={`/apply?university=${u.id}`} className="btn primary">Ask Oasis Educares <ArrowRight size={15}/></Link>
                  <a href={u.website} target="_blank" rel="noreferrer" className="official-link">
                    Official website <ExternalLink size={14}/>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="medical-note">
          <strong>Important:</strong> Tuition fees, entrance examinations, deadlines and admission rules can change by academic year and applicant category. The figures shown here are reference information; students should verify the current university requirements before applying.
        </div>
      </div>
    </section>
  );
}