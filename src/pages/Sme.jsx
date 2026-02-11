import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import loanImg from "../assets/loan.webp"; // replace with SME/Business image
import loanBg from "../assets/sme.webp"; // hero background

export const SMELoan = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        className="md:h-[440px] h-[70vh] relative flex items-center justify-center text-center"
        style={{
          backgroundImage:   `linear-gradient(120.47deg,  #10436b 10.32%, rgba(16, 67, 107, 0.53)  50.96%, #020101 122.45%), url(${loanBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="md:text-[60px] text-[38px] font-bold text-white z-10 font-manRope">
          SME Loan Solutions
        </h2>
        <div className="absolute inset-0 bg-black/60"></div>
      </section>

      {/* ================= INTRO SECTION ================= */}
      <section className="py-[80px] px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text */}
          <div data-aos="fade-right">
            <h3 className="text-[36px] font-bold text-activeColor mb-6 font-spaceGrotesk">
              Empowering Small Businesses to Grow
            </h3>

            <p className="text-[18px] text-textColor leading-[30px] mb-6">
              EasyBillz SME Loan is designed to support small businesses, POS operators,
              vendors, and entrepreneurs with accessible funding solutions. Our loan
              system helps you expand operations, manage cash flow, and achieve your
              business goals without unnecessary stress.
            </p>

            <p className="text-[18px] text-textColor leading-[30px]">
              Members of our SME community gain access to structured loan facilities
              tailored to business needs, repayment strength, and growth capacity.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center" data-aos="fade-right">
            <img
              src={loanImg}
              alt="SME Loan"
              className="md:w-[85%] rounded-[20px]"
            />
          </div>
        </div>
      </section>

      {/* ================= WHO CAN APPLY ================= */}
      <section className="bg-[#f9fafb] py-[80px] px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className="text-[34px] font-bold text-activeColor mb-6 font-spaceGrotesk"
            data-aos="fade-up"
          >
            Who We Support
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {[
              "Small and Medium Enterprises (SMEs)",
              "POS Operators",
              "Retailers and Vendors",
              "Startups and Growing Businesses",
              "Service-Based Businesses",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-[16px] shadow-md"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <p className="text-[18px] text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LOAN PROCESS ================= */}
      <section className="py-[90px] px-4">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-[36px] font-bold text-activeColor mb-8 font-spaceGrotesk"
            data-aos="fade-up"
          >
            Steps to Request an SME Loan
          </h2>

          <div className="space-y-6">
            {[
              "Join our SME community by signing up through the membership form.",
              "Fill out the SME loan processing form with your business details.",
              "Complete and submit the guarantor’s form.",
              "Once approved, sign the loan consent agreement.",
            ].map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-4"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-activeColor text-white font-bold">
                  {index + 1}
                </div>
                <p className="text-[18px] text-textColor leading-[28px]">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-activeColor py-[70px] text-center px-4">
        <h2 className="text-white text-[34px] font-bold mb-4">
          Ready to Grow Your Business?
        </h2>
        <p className="text-white/90 text-[18px] mb-8">
          Join our SME community and access funding tailored to your business needs.
        </p>

        <a
          href="/membership"
          className="inline-block bg-white text-activeColor px-8 py-3 rounded-[8px] font-semibold hover:opacity-90 transition"
        >
          Apply for SME Loan
        </a>
      </section>
    </>
  );
};

export default SMELoan;
