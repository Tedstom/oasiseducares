import { Link } from "react-router-dom";
import { ArrowRight, Award, Globe2, GraduationCap, Plane, ShieldCheck, Users, CheckCircle2 } from "lucide-react";

const strengths = [
  {
    icon: <Award />,
    title: "25+ Years of Travel Experience",
    text: "Oasis Xpress Travel And Tours is one of India's oldest and reputed travel management companies, with over 25 years of experience in the industry."
  },
  {
    icon: <GraduationCap />,
    title: "Education & Travel Expertise",
    text: "Oasis Educares is the overseas education consultancy division of Oasis Xpress Travel And Tours, bringing education and travel expertise together to support students."
  },
  {
    icon: <ShieldCheck />,
    title: "IATA-Certified Heritage",
    text: "Oasis Xpress was among the early travel companies to receive IATA certification and has maintained a strong focus on service excellence."
  },
  {
    icon: <Globe2 />,
    title: "Industry Connections",
    text: "Our travel heritage includes active membership and engagement with industry organisations such as TAFI, TAAI and UFTAA."
  },
  {
    icon: <Users />,
    title: "Expert Guidance",
    text: "Our experienced counsellors provide personalised guidance on universities, courses, admissions, visas and scholarships across destinations including Bulgaria, Turkey, USA, UK, Canada, Australia and Europe."
  },
  {
    icon: <Plane />,
    title: "End-to-End Support",
    text: "From university applications and documentation to visa guidance and travel arrangements, we aim to make the student's journey simpler and more organised."
  }
];

export default function About() {
  return (
    <section className="page">
      <div className="page-banner about-banner">
        <div className="container">
          <span className="eyebrow light">ABOUT OASIS EDUCARES</span>
          <h1>Education, travel and opportunity — together.</h1>
          <p>Helping students make confident decisions about international education while benefiting from more than two decades of travel-industry experience.</p>
        </div>
      </div>

      <section className="section">
        <div className="container about-intro">
          <div>
            <span className="eyebrow">WHY WE'RE DIFFERENT</span>
            <h2>A trusted travel heritage behind your global education journey.</h2>
            <p>
              Oasis Educares is the overseas educational consultant division of
              <strong> Oasis Xpress Travel And Tours</strong>. We believe that education
              and travel have the power to transform lives.
            </p>
            <p>
              Our approach combines personalised education counselling with the practical
              experience of a long-established travel management company. This means we
              can support students not only with education decisions, but also with the
              practical journey that follows.
            </p>
            <Link to="/apply" className="btn primary">
              Talk to a Counsellor <ArrowRight size={17} />
            </Link>
          </div>

          <div className="about-heritage-card">
            <div className="heritage-number">25+</div>
            <strong>Years of Travel Experience</strong>
            <p>Building relationships, managing journeys and serving clients since the early days of international travel management.</p>
            <div className="heritage-line"></div>
            <div className="heritage-points">
              <span><CheckCircle2 /> IATA-certified travel heritage</span>
              <span><CheckCircle2 /> TAFI / TAAI / UFTAA engagement</span>
              <span><CheckCircle2 /> Education + travel support</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-title center">
            <span className="eyebrow">OUR STRENGTHS</span>
            <h2>Why students choose Oasis Educares</h2>
            <p>Professional guidance backed by the experience and infrastructure of an established travel company.</p>
          </div>

          <div className="about-strength-grid">
            {strengths.map(item => (
              <div className="about-strength-card" key={item.title}>
                <div className="about-strength-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-destinations">
          <div>
            <span className="eyebrow">OUR EDUCATION FOCUS</span>
            <h2>From MBBS in Bulgaria to global study destinations.</h2>
            <p>
              MBBS and Medicine in Bulgaria is currently one of our key areas of
              specialisation. We also assist students exploring opportunities in
              Turkey, USA, UK, Canada, Australia, Europe and other international
              destinations.
            </p>
          </div>
          <div className="destination-tags">
            {["🇧🇬 Bulgaria", "🇹🇷 Turkey", "🇺🇸 USA", "🇬🇧 UK", "🇨🇦 Canada", "🇦🇺 Australia", "🇪🇺 Europe"].map(x =>
              <span key={x}>{x}</span>
            )}
          </div>
        </div>
      </section>

      <section className="about-trust">
        <div className="container about-trust-inner">
          <div>
            <span className="eyebrow light">ONE TEAM • ONE JOURNEY</span>
            <h2>From choosing your university to getting ready to fly.</h2>
            <p>Our goal is to give students and parents one dependable point of support throughout the international education journey.</p>
          </div>
          <Link className="btn light-btn" to="/contact">Contact Oasis Educares <ArrowRight size={17}/></Link>
        </div>
      </section>
    </section>
  );
}