import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo-cmcar.png';
import LoanModal from './LoanModal';


export const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
   const [openLoanModal, setOpenLoanModal] = useState(false);

  const NavItems = [
    { name: 'Home', link: '#home' },
    { name: 'About Us', link: '#about' },
    { name: 'FAQs', link: '#faq' },
    { name: 'Contact Us', link: '#contact' },
  ];

  return (
    <header className="sticky top-0 w-full z-50 bg-white shadow-sm">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-[90px] md:px-10 px-4">

        {/* Logo */}
        <NavLink to="/">
          <img src={logo} alt="Logo" className="w-44 lg:w-60 object-contain -m-6" />
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {NavItems.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="text-[#0A1A3C] font-medium hover:text-[#C6FF5E] transition"
            >
              {item.name}
            </a>
          ))}

          {/* CTA */}
          <button
           onClick={() => setOpenLoanModal(true)}
            className="bg-[#0A1A3C] text-[#fff] font-semibold px-6 py-3 rounded-full hover:scale-105 transition"
          >
            Apply for Loan
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="lg:hidden text-[#0A1A3C]">
          <FaBars
            className="text-2xl cursor-pointer"
            onClick={() => setNavOpen(true)}
          />
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          navOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setNavOpen(false)}
      />

      {/* Right Sidebar Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white z-50 shadow-xl
        transform transition-transform duration-300
        ${navOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Close button */}
        <div className="flex justify-end p-5">
          <FaTimes
            className="text-2xl cursor-pointer text-[#0A1A3C]"
            onClick={() => setNavOpen(false)}
          />
        </div>

        {/* Menu Items */}
        <div className="flex flex-col gap-6 px-6">
          {NavItems.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="text-[#0A1A3C] font-medium"
              onClick={() => setNavOpen(false)}
            >
              {item.name}
            </a>
          ))}

          {/* CTA */}
          <NavLink
            to="/form"
            onClick={() => setNavOpen(false)}
            className="bg-[#C6FF5E] text-[#0A1A3C] text-center font-semibold py-3 rounded-full"
          >
            Apply for Loan
          </NavLink>
        </div>
      </div>
      <LoanModal
        isOpen={openLoanModal}
        onClose={() => setOpenLoanModal(false)}
      />
    </header>
  );
};
