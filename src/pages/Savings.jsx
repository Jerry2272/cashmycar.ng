import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import savingsImg from "../assets/savings-platform.webp";  
import savingsImg2 from "../assets/personal-savingBox.webp";  
import heroBg from '../assets/savings.webp'
import savingsCta from '../assets/hero-banner.png'

export const Savings = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="h-[55vh] bg-gradient-to-r from-[#10436b] to-[#0b2d47] flex items-center relative"
      style={{
                backgroundImage:  `linear-gradient(120.47deg,  #10436b 10.32%, rgba(16, 67, 107, 0.53)  50.96%, #020101 122.45%), url(${heroBg})`,
                backgroundSize: "cover",
                backgroundPosition: "bottom",
              }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="max-w-6xl mx-auto px-4 text-white relative z-[999]">
          <h1 className="text-[38px] md:text-[48px] font-bold mb-4">
            Savings with EasyBillz
          </h1>
          <p className="max-w-2xl text-[18px] text-gray-200 leading-[30px]">
            We encourage our members to cultivate a strong savings culture for
            both personal and business growth.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-[80px] px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div data-aos="fade-right">
            <p className="text-[18px] text-textColor leading-[30px] mb-6">
              You are not saving because you don’t have — rather, you don’t have
              because you are not saving. At EasyBillz, we provide a structured
              and flexible savings platform designed to help members build
              discipline, consistency, and financial stability.
            </p>

            <p className="text-[18px] text-textColor leading-[30px] mb-6">
              Our savings plans are tailored to suit your income pattern,
              lifestyle, and goals. Members earn up to{" "}
              <span className="font-semibold text-activeColor">
                24% per annum
              </span>{" "}
              on savings, subject to terms and conditions.
            </p>
          </div>

          <div className="flex justify-center" data-aos="fade-up  ">
            <img
              src={savingsImg}
              alt="EasyBillz Savings"
              className="rounded-[16px] shadow-md md:w-[85%]"
            />
          </div>
        </div>
      </section>

      {/* ================= SAVINGS PLANS ================= */}
      <section className="py-[90px] px-4 bg-[#f9fafb]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[32px] font-bold text-activeColor mb-10">
            Our Savings Plans
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Fixed Savings",
                desc: "Save a fixed amount for a defined period and earn competitive returns.",
              },
              {
                title: "Target Savings",
                desc: "Save towards a specific goal such as rent, school fees, business expansion, or travel.",
              },
              {
                title: "Daily (Akawo) Savings",
                desc: "Daily contribution savings designed for traders, artisans, and salary earners.",
              },
              {
                title: "Bill Savings",
                desc: "Save specifically to cover recurring bills and household expenses.",
              },
              {
                title: "Ajo Contribution",
                desc: "Traditional rotating savings adapted into a secure digital structure.",
              },
            ].map((plan, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className="bg-white p-6 rounded-[16px] border shadow-sm hover:shadow-lg transition"
              >
                <h3 className="text-[20px] font-semibold text-activeColor mb-3">
                  {plan.title}
                </h3>
                <p className="text-gray-600 leading-[26px]">
                  {plan.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW TO START ================= */}
      <section className="py-[80px] px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[30px] font-bold text-activeColor mb-8">
            How to Start Saving
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Fill the savings registration form",
              "Choose your preferred savings plan (Akawo or Target Savings)",
              "Create your personal savings box with a custom name",
              "Start saving based on your plan schedule",
            ].map((step, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="flex items-start gap-4 p-5 border rounded-[14px]"
              >
                <span className="font-bold text-activeColor">
                  {index + 1}.
                </span>
                <p className="text-textColor leading-[26px]">
                  {step}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-[16px] text-gray-600">
            *Terms and conditions apply.
          </p>
        </div>
      </section>

      {/* ================= CUSTOM SAVINGS ================= */}
      <section className="py-[80px] px-4 bg-[#f9fafb]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-[30px] font-bold text-activeColor mb-6">
              Personal Savings Boxes
            </h2>
            <p className="text-[18px] text-textColor leading-[30px]">
              EasyBillz allows you to create personalized savings boxes tailored
              to your needs. Each savings box can be named, tracked, and managed
              independently — giving you full control over your financial plans.
            </p>
          </div>

          <div className="flex justify-center" data-aos="fade-up">
            <img
              src={savingsImg2}
              alt="Savings Box"
              className="rounded-[16px] md:w-[80%]"
            />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-[70px] bg-white text-center px-4 relative"
      
                          style={{
                            backgroundImage: `url(${savingsCta})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }} 
      >
      <div className="relative z-[999]">
          <h2 className="text-[28px] font-bold text-white mb-4">
          Start Building Your Savings Today
        </h2>
        <p className="max-w-xl mx-auto text-white mb-8">
          Whether personal or business goals, EasyBillz helps you save smarter
          and grow steadily.
        </p>
        <button className="bg-activeColor text-white px-8 py-3 rounded-[8px] font-semibold">
          Start Saving Now
        </button>
      </div>
         <div className="absolute inset-0 bg-gradient-to-br from-[#10436b]/90 via-[#10436b]/60 to-black/90 "></div>
      </section>
    </>
  );
};

export default Savings;
