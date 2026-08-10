import SectionTitle from "../components/SectionTitle";
import { courses } from "../data/siteData";
import { Link } from "react-router-dom";

export default function Courses() {
  return <section className="page"><div className="page-banner"><div className="container"><span className="eyebrow light">COURSES</span><h1>Study what you love.</h1><p>Find programmes aligned with your skills and career goals.</p></div></div><div className="container section"><SectionTitle title="Popular study areas" text="Our counsellors can help you compare courses across countries and universities."/><div className="course-grid full">{courses.map(c => <div className="course-card" key={c.name}><span>{c.icon}</span><h3>{c.name}</h3><p>{c.description}</p><Link to="/apply">Find courses <span>→</span></Link></div>)}</div></div></section>;
}