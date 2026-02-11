import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import heroBg from "../assets/flexpay.webp";
import flexyImg from "../assets/easybillz.webp";
import EasyBills from '../assets/hero-banner.png'

const EasyBillzInvestment = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="relative h-[60vh] flex items-center"
        style={{
          backgroundImage:  `linear-gradient(120.47deg,  #10436b 10.32%, rgba(16, 67, 107, 0.53)  50.96%, #020101 122.45%), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-white">
          <h1 className="text-[36px] md:text-[48px] font-bold mb-4">
            EasyBillz EasyPay & Flexypay
          </h1>
          <p className="max-w-2xl text-[17px] text-gray-200">
            Smart financial solutions that help you save, invest, manage bills,
            and acquire assets through flexible payment structures.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-[80px] px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <p
            className="text-[18px] text-textColor leading-[30px]"
            data-aos="fade-up"
          >
            EasyBillz EasyPay is a structured financial system designed to support
            individuals and businesses in achieving financial stability and growth.
            Through savings, investments, loans, bill management, and asset acquisition,
            EasyBillz helps members plan better and reduce financial pressure.
          </p>
        </div>
      </section>

      {/* ================= EASY PAY SERVICES ================= */}
      <section className="py-[80px] px-4 bg-[#f9fafb]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[32px] font-bold text-activeColor mb-10">
            EasyPay Services
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "SME Loans",
                desc: "Accessible loan facilities designed to support small and medium-scale businesses with flexible repayment options.",
              },
              {
                title: "Savings",
                desc: "Structured savings plans that help members build capital consistently and responsibly.",
              },
              {
                title: "Investments",
                desc: "Carefully designed investment opportunities that allow members grow their funds sustainably.",
              },
              {
                title: "Bill Management",
                desc: "A convenient system that enables members manage and pay bills efficiently.",
              },
              {
                title: "EasyBillz Flexypay",
                desc: "A flexible instalment-based payment solution for acquiring properties, land, and gadgets.",
              },
            ].map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className="bg-white border rounded-[12px] p-6"
              >
                <h3 className="font-semibold text-[18px] mb-2 text-activeColor">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-[26px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FLEXYPAY ================= */}
      <section className="py-[90px] px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <div data-aos="fade-right">
            <h2 className="text-[32px] font-bold text-activeColor mb-6">
              EasyBillz Flexypay
            </h2>

            <p className="text-[18px] text-textColor leading-[30px] mb-5">
              EasyBillz Flexypay is a payment system that allows members to acquire
              real estate, landed properties, and gadgets through savings or
              instalment payments.
            </p>

            <p className="text-[18px] text-textColor leading-[30px] mb-5">
              Payment schedules are structured according to the member’s financial
              strength over a short and manageable period. Property allocation is
              made upon the first payment, while final handover is completed once
              payment obligations are fulfilled.
            </p>

            <ul className="list-disc list-inside text-textColor space-y-2">
              <li>Flexible instalment payment plans</li>
              <li>Allocation upon first payment</li>
              <li>Handover on completion of payment</li>
              <li>Access to trusted real estate partners</li>
            </ul>
          </div>

          {/* Image */}
          <div data-aos="fade-down" className="flex justify-center order-first lg:order-last">
            <img
              src={flexyImg}
              alt="EasyBillz Flexypay"
              className="rounded-[16px] shadow-md md:w-[90%]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-[70px]   text-center px-4 relative"
      
        style={{
          backgroundImage: `url(${EasyBills})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }} 
      >
          {/* Background Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#10436b]/90 via-[#10436b]/60 to-black/90 "></div>
       <div className="relative z-[999]">
         <h2 className="text-[30px] font-bold text-white mb-4">
          Start Planning Smarter with EasyBillz
        </h2>
        <p className="max-w-xl mx-auto text-white mb-8">
          Join EasyBillz Cooperative today and take advantage of flexible savings,
          investments, and asset acquisition solutions.
        </p>
        <button className="bg-activeColor text-white px-8 py-3 rounded-[8px] font-semibold">
          Join EasyBillz
        </button>
       </div>
      </section>
    </>
  );
};

export default EasyBillzInvestment;
