import { Link } from "react-router-dom";
import { ArrowRight, Award, Globe2, GraduationCap, Plane, ShieldCheck, Users, CheckCircle2 } from "lucide-react";

const strengths = [
  {
    icon: <Award />,
    title: "25+ Years of Travel Experience",
    text: "The Oasis Xpress Travel And Tours is one of India's oldest and reputed travel management companies, with over 25 years of experience in the industry."
  },
  {
    icon: <GraduationCap />,
    title: "Education & Travel Expertise",
    text: "Oasis Educares is the overseas education consultancy division of The Oasis Xpress Travel And Tours, bringing education and travel expertise together to support students."
  },
  {
    icon: <ShieldCheck />,
    title: "IATA Travel Heritage",
    text: "Oasis Xpress has a long-standing association with the international air travel industry, including IATA accreditation and a strong focus on professional service."
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
              <span><CheckCircle2 /> TAFI / TAAI / ETAA engagement</span>
              <span><CheckCircle2 /> Education + travel support</span>
            </div>
          </div>
        </div>
      </section>
      {/* =========================================
    MEET OUR DIRECTOR
    ========================================= */}

      <section className="section director-section">
        <div className="container">
          <div className="director-layout">

            {/* Director Photo */}
            <div className="director-photo-wrap">
              <div className="director-photo-card">
                <img
                  src="/director.png"
                  alt="Director - The Oasis Xpress Travel And Tours"
                  className="director-photo"
                />

                <div className="director-photo-caption">
                  <strong>Teddy M Thomas</strong>
                  <span>Director, The Oasis Xpress Travel And Tours</span>
                </div>
              </div>
            </div>

            {/* Director Content */}
            <div className="director-content">

              <span className="eyebrow">MEET OUR DIRECTOR</span>

              <h2>
                Experience, Expertise & a Global Perspective
              </h2>

              <p>
                With a professional journey spanning
                <strong> travel, tourism, visa services, technology and
                  international business</strong>, our Director brings extensive
                industry experience and international exposure to
                <strong> The Oasis Xpress Travel And Tours</strong>.
              </p>

              <p>
                An <strong>Electronics & Communication Engineering graduate</strong>,
                he began his career in technology before developing his professional
                expertise in the travel industry. With experience in
                <strong> international travel, visa services, travel planning,
                  ticketing and destination management</strong>, he has helped
                travellers navigate the complexities of international journeys.
              </p>

              <p>
                Having personally travelled to <strong>more than 40 countries</strong>,
                he brings first-hand knowledge of destinations, cultures and
                international travel environments.
              </p>

              <p>
                His contribution to the travel industry extends beyond the company.
                He has served as <strong>National Joint Treasurer of the Travel
                  Agents Federation of India (TAFI)</strong> and has been associated
                with the travel industry's Conventions Committee, contributing to
                international conventions in
                <strong> Dubai, South Africa, Israel and Turkey</strong>.
              </p>

              <p>
                His background in <strong> technology and software development </strong>
                has also shaped the company's approach to combining professional
                travel expertise with modern digital solutions.
              </p>

              <p>
                This experience forms an important foundation for
                <strong> Oasis Educares</strong>, the overseas education consultancy
                division of <strong>The Oasis Xpress Travel And Tours</strong>.
                Oasis Educares brings together international travel knowledge,
                visa experience and destination expertise to guide students through
                <strong> university selection, admissions, visa processes and their
                  journey abroad</strong>.
              </p>

              <div className="director-quote">
                <span className="quote-mark">“</span>

                <p>
                  Our aim is to understand the traveller or student, understand the
                  journey, and provide honest guidance and dependable support every
                  step of the way.
                </p>
              </div>

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

      <section className="section credentials-section">
        <div className="container">
          <div className="section-title center">
            <span className="eyebrow">OUR CREDENTIALS</span>
            <h2>Accreditations & Industry Memberships</h2>
            <p>
              Our travel heritage is supported by recognised industry affiliations
              and professional associations.
            </p>
          </div>

          <div className="credentials-strip">
            <div className="credential-item">
              <div className="credential-logo iata">
                <img src="/IATA_Accredited_Agent.png" alt="IATA Accredited Agent" />
              </div>
              <div className="credential-content">
                <h3>IATA</h3>
                <span>Accredited Travel Agent</span>
                <p>
                  Long-standing association with the international air travel
                  industry through Oasis Xpress Travel And Tours.
                </p>
              </div>
            </div>

            <div className="credential-divider" aria-hidden="true"></div>

            <div className="credential-item">
              <div className="credential-logo taai">
                <img src="/TAAI_Member.png" alt="TAAI Member" />
              </div>
              <div className="credential-content">
                <h3>TAAI</h3>
                <span>Industry Membership</span>
                <p>
                  Engagement with the Travel Agents Association of India and
                  India's professional travel community.
                </p>
              </div>
            </div>

            <div className="credential-divider" aria-hidden="true"></div>

            <div className="credential-item">
              <div className="credential-logo tafi">
                <img src="/TAFI_Member.png" alt="TAFI Member" />
              </div>
              <div className="credential-content">
                <h3>TAFI</h3>
                <span>Industry Membership</span>
                <p>
                  Engagement with the Travel Agents Federation of India and
                  the wider travel industry.
                </p>
              </div>
            </div>

            <div className="credential-divider" aria-hidden="true"></div>

            <div className="credential-item">
              <div className="credential-logo etaa">
                <img src="/ETAA_Member.png" alt="ETAA Member" />
              </div>
              <div className="credential-content">
                <h3>ETAA</h3>
                <span>Industry Membership</span>
                <p>
                  Association with the Enterprise Travel Agents Association
                  and the professional travel community.
                </p>
              </div>
            </div>
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
          <Link className="btn light-btn" to="/contact">Contact Oasis Educares <ArrowRight size={17} /></Link>
        </div>
      </section>
    </section>
  );
}
