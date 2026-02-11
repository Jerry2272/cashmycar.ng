import { FaBars, FaChevronDown } from 'react-icons/fa6';
import { useState } from 'react';
// import { Link } from 'react-scroll'; // for smooth scroll
import { Link, NavLink } from 'react-router-dom';
import nav1 from '../assets/savings.webp';
import nav2 from '../assets/sme.webp';
import nav3 from '../assets/bills-management.webp';
import nav4 from '../assets/flexpay.webp';
import nav5 from '../assets/investment.webp';
import logo from '../assets/logo.png'

export const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [dropdownOpenIndex, setDropdownOpenIndex] = useState(null);

  const NavItems = [
    { name: 'Home', link: 'home' },
    { name: 'About Us', link: 'about' },
    { name: 'FAQs', link: 'faq' },
    { name: 'Contact Us', link: 'contact' },
    { name: 'Apply for loan', link: '/form', external: true },
  ];

  const dropdownImages = [nav1, nav2, nav3, nav4, nav5];

  return (
    <header className="sticky top-0 w-full z-50 bg-[#10436b] text-white">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-[100px]  md:px-10 px-4">
        {/* Logo */}
        <NavLink to="/" className="mb-6">
          <img
            src={logo}
            alt="Logo"
            className="w-60 h-30 object-contain -ml-12"
          />
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {NavItems.map((item, i) => (
            <div
              key={i}
              className="relative"
              onMouseEnter={() => setDropdownOpenIndex(i)}
              onMouseLeave={() => setDropdownOpenIndex(null)}
            >
              {!item.children ? (
                item.external ? (
                  <NavLink
                    to={item.link}
                    className="text-white font-medium hover:text-[#C6FF5E] transition px-3 py-2 rounded"
                  >
                    {item.name}
                  </NavLink>
                ) : (
                  <Link
                    to={item.link}
                    smooth={true}
                    duration={500}
                    className="text-white font-medium hover:text-[#C6FF5E] transition cursor-pointer px-3 py-2 rounded"
                  >
                    {item.name}
                  </Link>
                )
              ) : (
                <div className="flex items-center gap-1 cursor-pointer px-3 py-2 rounded hover:text-[#C6FF5E] transition">
                  {item.name} <FaChevronDown />
                  {dropdownOpenIndex === i && (
                    <div className="absolute top-full left-0 bg-white text-black rounded-lg shadow-lg p-4 mt-2 grid grid-cols-3 gap-3 min-w-[400px]">
                      {item.children.map((child, j) => (
                        <Link
                          key={j}
                          to={child.link}
                          smooth={true}
                          duration={500}
                          className="flex items-center gap-2 hover:bg-[#10436b] hover:text-white rounded-md p-2 cursor-pointer"
                        >
                          <img
                            src={dropdownImages[j]}
                            alt={child.name}
                            className="w-10 h-10 rounded-md"
                          />
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <FaBars
            className="text-2xl cursor-pointer"
            onClick={() => setNavOpen(!navOpen)}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="lg:hidden bg-[#10436b] text-white flex flex-col gap-4 px-6 py-4">
          {NavItems.map((item, i) => (
            <div key={i} className="flex flex-col">
              {!item.children ? (
                item.external ? (
                  <NavLink
                    to={item.link}
                    className="text-white font-medium hover:text-[#C6FF5E] transition py-2"
                    onClick={() => setNavOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                ) : (
                  <Link
                    to={item.link}
                    smooth={true}
                    duration={500}
                    className="text-white font-medium hover:text-[#C6FF5E] transition py-2 cursor-pointer"
                    onClick={() => setNavOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ) : (
                <>
                  <span
                    onClick={() =>
                      setDropdownOpenIndex(dropdownOpenIndex === i ? null : i)
                    }
                    className="flex items-center justify-between cursor-pointer py-2"
                  >
                    {item.name} <FaChevronDown />
                  </span>
                  {dropdownOpenIndex === i &&
                    item.children.map((child, j) => (
                      <Link
                        key={j}
                        to={child.link}
                        smooth={true}
                        duration={500}
                        className="pl-4 py-2 text-white hover:text-[#C6FF5E] cursor-pointer"
                        onClick={() => setNavOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};
