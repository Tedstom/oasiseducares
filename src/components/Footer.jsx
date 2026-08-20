import { Link } from "react-router-dom";
import {
    Mail,
    Phone,
    MapPin,
    UserRound,
    Instagram,
    Facebook,
    Linkedin,
    MessageCircle,
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="site-footer">

            {/* =====================================================
          FIVE COLUMN FOOTER GRID
          ===================================================== */}
            <div className="container footer-reference-grid">

                {/* ===================================================
            COLUMN 1 — LOGO
            =================================================== */}
                <div className="footer-brand-column">

                    <div className="footer-logo-only">
                        <img
                            src="/images/branding/footer-logo.png"
                            alt="Oasis Educares"
                        />
                    </div>

                    <p className="footer-tagline">
                        Your Gateway to Global Education
                    </p>

                    <div className="footer-socials">

                        <a
                            href="https://www.facebook.com/profile.php?id=61575304100021"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Facebook"
                        >
                            <Facebook size={17} />
                        </a>

                        <a
                            href="https://www.instagram.com/oasiseducares/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Instagram"
                        >
                            <Instagram size={17} />
                        </a>

                        <a
                            href="#"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={17} />
                        </a>

                    </div>

                </div>


                {/* ===================================================
            COLUMN 2 — INDIA OFFICE
            =================================================== */}
                <div className="footer-office">

                    <h3>INDIA OFFICE</h3>

                    <div className="footer-contact-row">

                        <MapPin size={16} />

                        <div>
                            <strong>
                                The Oasis Xpress Travel And Tours
                            </strong>

                            <span>
                                201, M-2, Yogeshwar Building
                            </span>

                            <span>
                                Connaught Place
                            </span>

                            <span>
                                New Delhi – 110001, India
                            </span>
                        </div>

                    </div>


                    <div className="footer-contact-row">

                        <Phone size={16} />

                        <a href="tel:+911123414306">
                            +91-11-23414306
                        </a>

                    </div>


                    <div className="footer-contact-row">

                        <Mail size={16} />

                        <a href="mailto:admissions@theoasisxpress.com">
                            admissions@theoasisxpress.com
                        </a>

                    </div>


                    <div className="footer-branches">
                        <b>Branches:</b>{" "}
                        Cochin | Chennai | Bangalore |
                        Changanacherry | Kattappana
                    </div>

                </div>


                {/* ===================================================
            COLUMN 3 — UK OFFICE + BULGARIA
            =================================================== */}
                <div className="footer-office">

                    <h3>UK REPRESENTATIVE</h3>

                    <div className="footer-contact-row">

                        <MapPin size={16} />

                        <div>



                            <span>
                                Subin Jose -  +44 1202 74363 48905 ,
                            </span>

                            <span>
                                Bournemouth
                            </span>

                            <span>
                                United Kingdom
                            </span>

                        </div>

                    </div>


                    <div className="footer-contact-row">

                        <Phone size={16} />

                        <span>
                            +44 1202 74363 48905 ,
                        </span>

                    </div>


                    <div className="footer-contact-row">

                        <Mail size={16} />

                        <a href="mailto:info@oasiseducares.com">
                            info@oasiseducares.com
                        </a>

                    </div>


                    {/* Bulgarian Representative */}

                    <div className="footer-bulgaria">

                        <div className="footer-bulgaria-heading">

                            <span>🇧🇬</span>

                            <h3>
                                BULGARIAN REPRESENTATIVE
                            </h3>

                        </div>


                        <div className="footer-contact-row">

                            <UserRound size={16} />

                            <strong>
                                Ansel Teddy
                            </strong>

                        </div>


                        <div className="footer-contact-row">

                            <Phone size={16} />

                            <a href="tel:+359882113706">
                                +359 88 211 3706
                            </a>

                        </div>


                        <div className="footer-contact-row">

                            <Mail size={16} />

                            <a href="mailto:info@oasiseducares.com">
                                info@oasiseducares.com
                            </a>

                        </div>

                    </div>

                </div>


                {/* ===================================================
            COLUMN 4 — QUICK LINKS
            =================================================== */}
                <div className="footer-link-column">

                    <h3>QUICK LINKS</h3>

                    <Link to="/mbbs-in-bulgaria">
                        MBBS in Bulgaria
                    </Link>

                    <Link to="/universities">
                        Medical Universities
                    </Link>

                    <Link to="/mbbs-in-bulgaria#process">
                        Admission Process
                    </Link>

                    <Link to="/services">
                        Student Services
                    </Link>

                    <Link to="/about">
                        About Us
                    </Link>

                    <Link to="/contact">
                        Contact Us
                    </Link>

                </div>


                {/* ===================================================
            COLUMN 5 — IMPORTANT LINKS
            =================================================== */}
                <div className="footer-link-column">

                    <h3>IMPORTANT LINKS</h3>

                    <Link to="/about">
                        Privacy Policy
                    </Link>

                    <Link to="/about">
                        Terms &amp; Conditions
                    </Link>

                    <Link to="/about">
                        Refund Policy
                    </Link>


                    {/* WhatsApp */}

                    <a
                        href="https://wa.me/919810041849"
                        target="_blank"
                        rel="noreferrer"
                        className="footer-whatsapp-card"
                    >

                        <MessageCircle size={20} />

                        <div>

                            <strong>
                                +91 98100 41849
                            </strong>

                            <span>
                                Chat with us on WhatsApp
                            </span>

                        </div>

                    </a>


                    <a
                        href="/contact#counselling-form"
                        className="footer-counselling"
                    >
                        Book Free Counselling
                    </a>

                </div>

            </div>


            {/* =====================================================
          BOTTOM BAR
          ===================================================== */}

            <div className="footer-bottom-reference">

                <div className="container footer-bottom-inner-reference">

                    <span>
                        © {new Date().getFullYear()} Oasis Educares.
                        All Rights Reserved.
                    </span>

                    <span>
                        MBBS in Bulgaria • Medical Education Abroad
                    </span>

                </div>

            </div>

        </footer>
    );
}
