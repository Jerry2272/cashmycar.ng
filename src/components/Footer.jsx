import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaInstagram, FaArrowRight } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import LoanModal from "./LoanModal";

export const Footer = () => {
    const [openLoanModal, setOpenLoanModal] = useState(false);

  return (
    <footer className="bg-[#0B2E4A] text-white">
      {/* Top CTA */}
      <div className="max-w-[1200px] mx-auto px-4 pt-16 pb-12">
        <div className="bg-[#10436b] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold font-spaceGrotesk">
              Need urgent cash using your car?
            </h3>
            <p className="text-white/80 mt-2 text-sm md:text-base max-w-md">
              Get approved fast and receive funds in less than 24 hours. Safe,
              transparent, and stress‑free.
            </p>
          </div>

          <a
            href="#"
            className="bg-[#C6FF5E] text-black font-semibold px-6 py-3 rounded-xl flex items-center gap-2 hover:scale-105 transition"
            onClick={() => setOpenLoanModal(true)}
          >
            Apply Now <FaArrowRight />
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-[1200px] mx-auto px-4 pb-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <Link to="/" className="text-2xl font-bold font-spaceGrotesk">
            CASHMYCAR.NG
          </Link>

          <p className="text-white/70 text-sm mt-4 leading-6">
            Unlock instant cash from your vehicle’s value. We provide fast,
            reliable, and secure car‑backed loans for individuals and
            businesses across Nigeria.
          </p>

          <div className="flex items-center gap-4 mt-5">
            <a
              href="https://instagram.com/cashmycar.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-3 rounded-full hover:bg-[#C6FF5E] hover:text-black transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h5 className="font-semibold mb-4 text-lg">Company</h5>
          <ul className="space-y-3 text-sm text-white/70">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            {/* <li><a href="#gallery" className="hover:text-white">Gallery</a></li> */}
            <li><a href="#faq" className="hover:text-white">FAQs</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h5 className="font-semibold mb-4 text-lg">Loan Services</h5>
          <ul className="space-y-3 text-sm text-white/70">
            <li>Car‑Backed Loans</li>
            <li>Business Financing</li>
            <li>Emergency Cash Support</li>
            <li>Asset‑Based Lending</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h5 className="font-semibold mb-4 text-lg">Contact Us</h5>

          <div className="flex items-start gap-3 text-white/70 text-sm mb-4">
            <MdLocationOn className="text-lg mt-1" />
            <span>
              No. 9 Sani Zangon‑Daura Street, Guzape District, Abuja, Nigeria
            </span>
          </div>

          <div className="flex items-center gap-3 text-white/70 text-sm mb-4">
            <FaPhoneAlt />
            <span>+234 913 382 2666</span>
          </div>

          <div className="flex items-center gap-3 text-white/70 text-sm">
            <FaEnvelope />
            <span>support@cashmycar.ng</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-white/60">
          <p>© {new Date().getFullYear()} CASHMYCAR.NG. All rights reserved.</p>
          <p className="text-xs text-white/40">
  Website by <a href="http://wa.me/9161729605" target="_blank" className="hover:text-white">Jerry Jakes</a>
</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>

      <LoanModal
        isOpen={openLoanModal}
        onClose={() => setOpenLoanModal(false)}
      />
    </footer>
  );
};
