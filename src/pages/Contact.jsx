import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return <section className="page">
    <div className="page-banner"><div className="container"><span className="eyebrow light">CONTACT OASIS EDUCARES</span><h1>Let's talk about your medical education plans.</h1><p>Tell us where you want to study and our team will help you understand your next steps.</p></div></div>
    <div className="container section contact-grid">
      <div>
        <span className="eyebrow">OUR OFFICES</span><h2>India & UK support.</h2>
        <div className="contact-office-card"><h3>India Office</h3><div className="contact-items"><div><MapPin/><span><b>The Oasis Xpress Travel And Tours</b><small>210, M-2, Yogeshwar Building, Connaught Place,<br/>New Delhi – 110001, India</small></span></div><div><Phone/><span><b>Phone</b><small>+91 9810041849</small></span></div><div><Phone/><span><b>Bulgarian Representative — Ansel</b><small>+359 88 211 3706</small></span></div><div><Mail/><span><b>Email</b><small>admissions@theoasisxpress.com</small></span></div></div><small className="footer-branches">Branches: Cochin · Chennai · Bangalore · Changanacherry · Kattappana</small></div>
        <div className="contact-office-card"><h3>UK Office</h3><div className="contact-items"><div><MapPin/><span><b>OASIS EDUCARES</b><small>XXXXX, Plot xxxx, Bournemouth City Centre,<br/>BH1 2EW, Bournemouth, United Kingdom</small></span></div><div><Phone/><span><b>UK Contact Phone</b><small>01202 XXXXXXX</small></span></div><div><Mail/><span><b>Email</b><small>info@oasiseducares.com</small></span></div></div></div>
      </div>
      <form className="form-card" onSubmit={e => {e.preventDefault(); alert("Thank you! This demo form is ready to connect to your FastAPI endpoint.");}}><h3>Book a free counselling session</h3><label>Name<input required placeholder="Your name"/></label><label>Phone<input required placeholder="+91"/></label><label>Email<input type="email" placeholder="you@example.com"/></label><label>Interested in<select defaultValue="MBBS in Bulgaria"><option>MBBS in Bulgaria</option><option>Other Medical Programme</option><option>Other Study Destination</option></select></label><label>Message<textarea rows="4" placeholder="Tell us about your academic background and study plans"></textarea></label><button className="btn primary" type="submit">Send Enquiry</button><small>Production version can connect this form to your FastAPI endpoint.</small></form>
    </div>
  </section>;
}
