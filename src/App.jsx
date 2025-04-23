import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Download, Star, MessageSquare, Users } from 'lucide-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faLinkedin, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faCarSide, faBowlFood, faWallet, faPhone, faMapLocation, faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Logos from "./assets/gojek-seeklogo.svg";
import screenshot from "./assets/0_6BCwpHsJJY8LLniO.gif";
import footerlogo from "./assets/footerfix.png";
import kantor from "./assets/kantor-gojek.jpg";
import appStore from "./assets/appstore.svg";
import playStore from "./assets/googleplay.svg";
import "./index.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="font-sans">
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  src={Logos}
                  alt="Go-Jek"
                  width="120"
                  height="30"
                  viewBox="0 0 120 30"
                  className="fill-current text-green-500"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                    if (isMenuOpen) {
                      setIsMenuOpen(false);
                    }
                  }}
                ></img>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                    if (isMenuOpen) {
                      setIsMenuOpen(false);
                    }
                  }}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-green-600"
                >
                  Home
                </a>
                <a
                  href="#services"
                  onClick={(e) => scrollToSection(e, "services")}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-green-600"
                >
                  Services
                </a>
                <a
                  href="#about"
                  onClick={(e) => scrollToSection(e, "about")}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-green-600"
                >
                  About
                </a>
                <a
                  href="#careers"
                  onClick={(e) => scrollToSection(e, "careers")}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-green-600"
                >
                  Careers
                </a>
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "contact")}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-green-600"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <button className="bg-green-500 text-gray-800 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                Download App
              </button>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-green-500"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600"
              >
                Home
              </a>
              <a
                href="#services"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600"
              >
                Services
              </a>
              <a
                href="#about"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600"
              >
                About
              </a>
              <a
                href="#careers"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600"
              >
                Careers
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600"
              >
                Contact
              </a>
              <button className="mt-3 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                Download App
              </button>
            </div>
          </div>
        )}
      </nav>

      <div className="relative bg-gradient-to-r from-green-400 to-green-500 pt-32 pb-40 md:pt-40 md:pb-52">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Your Everyday <br />
                <span className="text-yellow-300">Super App</span>
              </h1>
              <p className="mt-6 text-xl md:text-2xl text-white opacity-90">
                From transportation and food delivery to payments and beyond,
                we've got all your daily needs covered in one app.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="flex items-center justify-center bg-white text-green-600 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition duration-300 shadow-lg">
                  <Download size={20} className="mr-2" />
                  Download App
                </button>
                <button className="flex items-center justify-center border-2 border-white text-white font-bold py-3 px-6 rounded-full hover:bg-white hover:text-green-600 transition duration-300">
                  Learn More
                  <ChevronRight size={20} className="ml-2" />
                </button>
              </div>
            </div>
            <div className="hidden md:block md:w-1/2 mt-10 md:mt-0">
              <div className="relative mx-auto w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 shadow-xl transform -rotate-6 rounded-2xl"></div>
                <div className="relative bg-white p-4 rounded-2xl shadow-lg">
                  <img
                    src={screenshot}
                    alt="Gojek App Screenshot"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-auto"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Services
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Gojek offers a super app with over 20 services to help you
              navigate life's daily challenges
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
              <div className="h-14 w-14 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <FontAwesomeIcon
                  icon={faCarSide}
                  className="h-8 w-8 text-green-600"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                GoRide & GoCar
              </h3>
              <p className="mt-3 text-gray-600">
                Your reliable transportation solution. Quick, safe rides to get
                you where you need to go in the city.
              </p>
              <a
                href="#"
                className="mt-4 inline-flex items-center text-green-600 hover:text-green-700"
              >
                Learn more
                <ChevronRight size={16} className="ml-1" />
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
              <div className="h-14 w-14 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <FontAwesomeIcon
                  icon={faBowlFood}
                  className="h-8 w-8 text-green-600"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">GoFood</h3>
              <p className="mt-3 text-gray-600">
                Indonesia's largest food delivery service with over 400,000
                merchants. From street food to fine dining.
              </p>
              <a
                href="#"
                className="mt-4 inline-flex items-center text-green-600 hover:text-green-700"
              >
                Learn more
                <ChevronRight size={16} className="ml-1" />
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
              <div className="h-14 w-14 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <FontAwesomeIcon
                  icon={faWallet}
                  className="h-8 w-8 text-green-600"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">GoPay</h3>
              <p className="mt-3 text-gray-600">
                Indonesia's leading digital payment solution. Pay bills, shop
                online, and send money with ease.
              </p>
              <a
                href="#"
                className="mt-4 inline-flex items-center text-green-600 hover:text-green-700"
              >
                Learn more
                <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-md">
              Explore All Services
            </button>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:space-x-12">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative">
                <div className="absolute inset-0 bg-green-200 rounded-xl transform translate-x-3 translate-y-3"></div>
                <img
                  src={kantor}
                  alt="Gojek Office"
                  className="relative rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                About Gojek
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Founded in 2010, Gojek began as a call center connecting
                consumers to courier delivery and two-wheeler ride-hailing
                services.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Today, we're a leading tech company that moves people, things,
                and money across 5 Southeast Asian countries. Our super app has
                been downloaded more than 190 million times and features over 20
                services.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-2xl text-green-600">190M+</h4>
                  <p className="text-gray-600">App Downloads</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-2xl text-green-600">20+</h4>
                  <p className="text-gray-600">Services</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-2xl text-green-600">5</h4>
                  <p className="text-gray-600">Southeast Asian Countries</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-2xl text-green-600">2M+</h4>
                  <p className="text-gray-600">Driver Partners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="careers" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Join Our Team
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              We're always looking for passionate problem-solvers to help us
              build the future of on-demand services
            </p>
          </div>

          <div className="mt-12 bg-green-50 rounded-2xl p-8">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-900">
                  Internship Program 2025
                </h3>
                <p className="mt-4 text-lg text-gray-600">
                  Get hands-on experience working on real projects that impact
                  millions of users across Southeast Asia. Learn from the best
                  minds in tech and kickstart your career at Gojek.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-400 flex items-center justify-center">
                      <svg
                        className="h-4 w-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700">
                      Engineering, Product, Design, and Business roles available
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-400 flex items-center justify-center">
                      <svg
                        className="h-4 w-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700">
                      3-6 month programs with mentorship
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-400 flex items-center justify-center">
                      <svg
                        className="h-4 w-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700">
                      Competitive stipends and potential for full-time roles
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 md:mt-0">
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-md">
                  Apply Now
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                <Users size={24} className="text-green-500 mr-2" />
                <h3 className="text-xl font-bold text-gray-900">
                  Collaborative Culture
                </h3>
              </div>
              <p className="text-gray-600">
                Work alongside diverse teams solving complex problems that
                impact millions of lives daily.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                <Star size={24} className="text-green-500 mr-2" />
                <h3 className="text-xl font-bold text-gray-900">
                  Innovation Focused
                </h3>
              </div>
              <p className="text-gray-600">
                Be part of a team that's constantly pushing boundaries and
                setting new industry standards.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                <MessageSquare size={24} className="text-green-500 mr-2" />
                <h3 className="text-xl font-bold text-gray-900">
                  Growth Opportunities
                </h3>
              </div>
              <p className="text-gray-600">
                Continuous learning with regular workshops, mentorship programs,
                and career development paths.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-green-600 p-8 md:p-12 text-white">
                <h3 className="text-2xl font-bold">Contact Us</h3>
                <p className="mt-4 text-green-100">
                  Have questions or feedback? We'd love to hear from you. Our
                  team is ready to help you with any inquiries.
                </p>
                <div className="mt-8 space-y-6">
                  <div className="flex items-start">
                    <FontAwesomeIcon
                      icon={faMapLocation}
                      className="h-4 w-4 text-green-200 mt-1"
                    />
                    <div className="ml-4">
                      <p className="text-green-100">Pasaraya Blok M Building</p>
                      <p className="text-green-100">
                        Jl. Iskandarsyah II No.2, Jakarta 12160
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="h-4 w-4 text-green-200 mt-1"
                    />
                    <div className="ml-4">
                      <p className="text-green-100">info@gojek.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="h-4 w-4 text-green-200 mt-1"
                    />
                    <div className="ml-4">
                      <p className="text-green-100">+62 21 2970 8989</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 py-3 px-4 border"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 py-3 px-4 border"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 py-3 px-4 border"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-md transition duration-300 shadow-md"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img src={footerlogo} alt="Gojek Logo" className="h-8" />
              <p className="mt-4 text-gray-400">
                Your everyday super app. From transportation and food delivery
                to payments and beyond.
              </p>
              <div className="mt-6 flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <FontAwesomeIcon icon={faFacebook} className="h-8" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <FontAwesomeIcon icon={faInstagram} className="h-8" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <FontAwesomeIcon icon={faXTwitter} className="h-8" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <FontAwesomeIcon icon={faLinkedin} className="h-8" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    GoRide
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    GoCar
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    GoFood
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    GoSend
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    GoPay
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Download App</h3>
              <div className="space-y-4">
                <a
                  href="#"
                  className="flex items-center gap-2 hover:bg-gray-500 transition-all"
                >
                  <img
                    src={appStore}
                    alt="App Store"
                    className="h-8 filter invert"
                  />
                  Get it on App Store
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:bg-gray-500 transition-all"
                >
                  <img
                    src={playStore}
                    alt="playStore"
                    className="h-8 filter invert"
                  />
                  Get it on Google Play Store
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">
                <FontAwesomeIcon icon={faCopyright} /> 2025 Gojek. All rights
                reserved.
              </p>
              <div className="mt-4 md:mt-0 flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;