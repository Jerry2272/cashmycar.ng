import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import heroBg from "../assets/investment.webp"; 
import investImg from "../assets/investmentBar.webp"; 
import InvestmentIllus from '../assets/hero-banner2.png'   

const investments = [
  {
    title: "EasyBillz Mutual Fund",
    return: "24% per annum",
    desc: "A pooled investment fund channeled into SME loan support. The fund is insured by Leadway Assurance, offering members steady and secure returns.",
  },
  {
    title: "EasyBillz Money Market",
    return: "Competitive annual returns",
    desc: "Low-risk money market investments designed for capital preservation and short-term liquidity.",
  },
  {
    title: "AgroVest (Agricultural Investment)",
    return: "Up to 36% per annum",
    desc: "Invest directly in EasyBillz-managed agricultural projects and earn from farm production and sales.",
  },
  {
    title: "EasyBillz Real Estate Investment Scheme",
    return: "High-yield long-term returns",
    desc: "Property-backed investment opportunities that allow members earn from land and real estate development projects.",
  },
  {
    title: "FG Bonds & Trade Opportunities",
    return: "Stable government-backed returns",
    desc: "Investments in Federal Government bonds and verified trade opportunities for secure income generation.",
  },
];

export const Investment = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="relative h-[55vh] flex items-center"
        style={{
          backgroundImage:  `linear-gradient(120.47deg,  #10436b 10.32%, rgba(16, 67, 107, 0.53)  50.96%, #020101 122.45%), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-white">
          <h1 className="text-[36px] md:text-[48px] font-bold mb-4">
            Investment Opportunities
          </h1>
          <p className="max-w-2xl text-[17px] text-gray-200">
            EasyBillz provides structured and secure investment opportunities
            that help members grow their wealth sustainably.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-[80px] px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div data-aos="fade-right">
            <p className="text-[18px] text-textColor leading-[30px] mb-6">
              Our investment portfolio is open to registered members of EasyBillz
              Cooperative Society. Members can earn returns of up to{" "}
              <strong>36% per annum</strong> depending on the investment product.
            </p>

            <p className="text-[18px] text-textColor leading-[30px]">
              We provide transparent, professionally managed investment options
              across agriculture, real estate, money markets, mutual funds, and
              government-backed instruments.
            </p>
          </div>

          <div className="flex justify-center" data-aos="fade-down">
            <img
              src={investImg}
              alt="EasyBillz Investments"
              className="rounded-[16px] shadow-md md:w-[85%]"
            />
          </div>
        </div>
      </section>

      {/* ================= INVESTMENT PRODUCTS ================= */}
      <section className="py-[90px] px-4 bg-[#f9fafb]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[32px] font-bold text-activeColor mb-10">
            Our Investment Products
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {investments.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className="bg-white border rounded-[14px] p-6"
              >
                <h3 className="text-[18px] font-semibold text-activeColor mb-2">
                  {item.title}
                </h3>

                <p className="text-sm font-medium text-green-600 mb-3">
                  Expected Return: {item.return}
                </p>

                <p className="text-gray-600 text-sm leading-[26px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= NOTE ================= */}
      <section className="py-[70px] px-4 bg-white relative "
  
              style={{
                backgroundImage: `url(${InvestmentIllus})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }} 
      >
        <div className="max-w-4xl mx-auto text-center relative z-[999]">
          <p className="text-[17px] text-white leading-[28px]">
            Investment opportunities are available exclusively to registered
            members of EasyBillz Cooperative Society. Returns vary based on the
            selected investment plan and market conditions.
          </p>
        </div>
           {/* ================= CTA ================= */}
      <div className="py-[70px]   text-center px-4 relative z-[999]">
        <h2 className="text-[30px] font-bold  text-white mb-4">
          Grow Your Wealth with EasyBillz
        </h2>
        <p className="max-w-xl mx-auto text-white mb-8">
          Become a member today and access structured investment opportunities
          designed for long-term financial growth.
        </p>
        <button className="bg-activeColor text-white px-8 py-3 rounded-[8px] font-semibold">
          Become a Member
        </button>
      </div>
                {/* Background Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#10436b]/90 via-[#10436b]/60 to-black/90 "></div>
      </section>

   
    </>
  );
};

export default Investment;
