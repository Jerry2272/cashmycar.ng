import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Service } from "../components/Service";
import Client from "../molecules/Client";

import AboutImg from "../assets/hero-banner2.png";
import valueImg from "../assets/hero-banner1.png";

import { FaLinkedin, FaTwitter } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";


/* ================= TEAM DATA IMG================= */
import mitchell from '../assets/mitchell.webp'
import barrAlexander from '../assets/barr.webp'
import Ene from '../assets/Ene.webp'
import Josh from '../assets/josh.webp'
import Kadesh from '../assets/Kadesh.webp'
import Godwin from '../assets/godwin.png'


/* ================= TEAM DATA ================= */
export const managementTeam = [
  {
    name: "Gboma Mitchell",
    role: "Chairman & Head of Operations",
    image: mitchell,
    bio: `Gboma Mitchell is an investor, business and data analyst, and a serial entrepreneur.
    He serves as the Chairman and Head of Operations of Easybillz Cooperative, providing
    strategic leadership and overseeing daily operations.

    He is a graduate of Biochemistry, a certified Safety and Environment Professional,
    a Financial and Data Analyst, and holds a postgraduate degree in Banking and Finance
    (Corporate Finance).`,
  },
  {
    name: "Barr. Alexander Barisua Waah",
    role: "Secretary & Head of Legal, Compliance and Business Development",
    image: barrAlexander,
    bio: `Barr. Alexander Waah is a legal practitioner and business developer.
    As Secretary and Head of Legal and Compliance, he ensures regulatory compliance,
    legal risk management, governance, and supports business development initiatives
    across Easybillz Cooperative.`,
  },
  {
    name: "Ene Joseph Juliet",
    role: "Head of Administration & Management",
    image: Ene,
    bio: `Ene Joseph Juliet is a professional Office Technology and Management expert
    and a serial entrepreneur. She oversees all administrative and managerial functions
    at Easybillz Cooperative.

    She holds a degree in Office Technology and Management and is currently pursuing
    a Master’s degree in Management at Rivers State University.`,
  },
  {
    name: "Joshua Utik",
    role: "Head of Technology & Product Development",
    image:  Josh,
    bio: `Joshua Utik is a Frontend Developer passionate about building smart,
    user-focused, and scalable digital products. He leads the technology and
    digital product development and implementation arm of Easybillz Cooperative.`,
  },
  {
    name: "Atuwosi Kadesh",
    role: "Portfolio & Product Manager",
    image: Kadesh,
    bio: `Atuwosi Kadesh is a Business Relationship professional, educationist,
    and counsellor. She manages the offline operations of Easybillz products
    and services and holds a degree in Business Education from Rivers State University.`,
  },
  {
    name: "Prince Godwin Ndalukee Jnr.",
    role: "Graphic Designer & Brand Strategist",
    image: Godwin,
    bio: `Prince Godwin Ndalukee Jnr. is a highly creative and detail-oriented
    Graphic Designer with over 8 years of experience. He is responsible for
    all branding, advertising, and publicity designs at Easybillz Cooperative.`,
  },
];

/* ================= COMPONENT ================= */
export const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="md:h-[440px] h-[70vh] aboutBg flex justify-center items-center mb-6">
        <h2 className="text-[40px] md:text-[50px] font-[700] text-white font-manRope text-center px-4">
          About EasyBillz Cooperative
        </h2>
      </section>

      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="md:grid grid-cols-2 gap-6 items-center lg:px-[120px] md:px-[120px] px-4 pt-[60px] md:pb-[100px]"
      >
        {/* Image */}
        <div data-aos="zoom-in">
          <img
            src={AboutImg}
            alt="About Easybillz"
            className="w-full h-[500px] object-cover rounded-[20px]"
            loading="lazy"
          />
        </div>

        {/* Text */}
        <div className="mt-4">
          <p
            className="text-[17px] text-textColor font-manRope leading-[28px] mb-[20px]"
            data-aos="fade-up"
          >
            Easybillz is a user-friendly platform designed to simplify the process of
            managing bills, savings, and everyday expenses. With an intuitive interface
            and convenient features, Easybillz helps individuals and businesses stay
            financially organized with ease.
          </p>

          <p
            className="text-[18px] text-textColor font-manRope leading-[28px]"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Whether you’re an individual looking to save smarter or a business aiming to
            streamline payments, Easybillz offers flexible savings plans, investment
            opportunities, and seamless bill payments — all in one secure platform.
          </p>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section
        id="about-us"
        className="py-[100px] px-4 md:px-[6em] relative"
        style={{
          backgroundImage: `url(${valueImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#10436b]/90 via-[#10436b]/60 to-black/90"></div>

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-8">
            <h2 className="text-[32px] md:text-[42px] font-bold text-white font-spaceGrotesk">
              Who We Are
            </h2>

            <div className="space-y-6">
              {[
                {
                  label: "V",
                  title: "Our Vision",
                  desc: "To make finance, savings, and investment simple, accessible, and stress-free for everyone.",
                },
                {
                  label: "M",
                  title: "Our Mission",
                  desc: "To empower individuals and businesses through structured savings, accessible credit facilities, and sustainable investment opportunities — SAVE, INVEST & GROW.",
                },
                {
                  label: "O",
                  title: "Our Objective",
                  desc: "To simplify the financial journey of individuals, businesses, and organizations through innovative cooperative solutions.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4" data-aos="fade-up">
                  <div className="w-12 h-12 bg-activeColor text-white rounded-full flex items-center justify-center font-bold">
                    {item.label}
                  </div>
                  <div>
                    <h3 className="text-[20px] font-semibold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-200 leading-[28px]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Core Values */}
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Empathy", desc: "Customer-first approach in all services" },
              { title: "Reliability", desc: "Secure and trustworthy financial systems" },
              { title: "Sustainability", desc: "Long-term financial growth for members" },
            ].map((value, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="bg-white p-6 rounded-[16px] shadow-lg hover:shadow-2xl transition hover:-translate-y-2"
              >
                <h4 className="font-semibold mb-2">{value.title}</h4>
                <p className="text-sm text-gray-700">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section id="management-team" className="py-[100px] px-4 md:px-[6em] bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-[32px] md:text-[42px] font-bold text-activeColor font-spaceGrotesk">
            Meet The Management Team
          </h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Here are the professionals who lead and manage the operations of Easybillz
            Cooperative, driving growth, innovation, and sustainability.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {managementTeam.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-[18px] shadow-lg hover:shadow-2xl transition hover:-translate-y-2 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image */}
              <div className="h-[260px] overflow-hidden">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-[20px] font-semibold text-activeColor mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-gray-500 mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-[26px] whitespace-pre-line">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      <Service />
      <Client />
      <Footer />
    </>
  );
};

export default About;
