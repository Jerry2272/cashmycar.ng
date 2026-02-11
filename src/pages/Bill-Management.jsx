import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import heroBg from "../assets/bills-management.webp"; 
import Img1 from "../assets/bills-mgt.webp"; 
import billManagement from '../assets/hero-banner3.png'

export const BillManagement = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="relative h-[55vh] flex items-center"
        style={{
          backgroundImage:  `linear-gradient(120.47deg,  #10436b 10.32%, rgba(16, 67, 107, 0.53)  50.96%, #020101 122.45%),  url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-white">
          <h1 className="text-[36px] md:text-[48px] font-bold mb-4">
            Bill Management – Payclob
          </h1>
          <p className="max-w-2xl text-[17px] text-gray-200">
            A smart bill management solution that helps you pay bills, shop for
            household needs, and manage expenses directly from your savings or
            investment balance.
          </p>
        </div>
      </section>

      {/* ================= ABOUT PAYCLOB ================= */}
      <section className="py-[80px] px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div data-aos="fade-right">
            <h2 className="text-[30px] font-bold text-activeColor mb-6">
              About Payclob
            </h2>

            <p className="text-[18px] text-textColor leading-[30px] mb-6">
              Payclob is EasyBillz’ bill management platform designed to simplify
              everyday living. It allows members to place orders for household
              goods, office supplies, and services while paying bills directly
              from their savings or investment returns.
            </p>

            <p className="text-[18px] text-textColor leading-[30px]">
              With Payclob, users can automate monthly expenses, track spending,
              and maintain an inventory of household and office needs — all
              without financial stress.
            </p>
          </div>

          <div className="flex justify-center" data-aos="fade-down">
            <img
              src={Img1}
              alt="Payclob Bill Management"
              className="rounded-[16px] shadow-md md:w-[85%]"
            />
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-[90px] px-4 bg-[#f9fafb]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[32px] font-bold text-activeColor mb-10">
            How Payclob Works
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Fill the registration form",
              "An account is created for you",
              "Create your login credentials",
              "Create your list of orders",
              "Set your preferred delivery date",
              "Receive your items and services",
            ].map((step, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className="bg-white border rounded-[14px] p-6"
              >
                <span className="text-sm font-semibold text-activeColor">
                  Step {index + 1}
                </span>
                <p className="mt-3 text-gray-700 leading-[26px]">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="py-[80px] px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[30px] font-bold text-activeColor mb-8">
            Why Use Payclob?
          </h2>

          <ul className="space-y-4 text-[18px] text-textColor leading-[30px]">
            <li>
              • Pay bills and shop directly from your savings or investment
              balance
            </li>
            <li>
              • Automate recurring household and office expenses
            </li>
            <li>
              • Keep proper inventory of your monthly spending
            </li>
            <li>
              • Reduce financial stress and budgeting pressure
            </li>
            <li>
              • Enjoy scheduled deliveries at your convenience
            </li>
          </ul>
        </div>
      </section>

      {/* ================= NOTE ================= */}
      <section className="py-[70px] px-4 relative"
      
      
                    style={{
                      backgroundImage: `url(${billManagement})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }} 
      >
        <div className="max-w-4xl mx-auto text-center relative z-[999]">
          <p className="text-[17px] text-white leading-[28px]">
            Payclob runs on the EasyBillz platform and is available exclusively
            to registered members. Savings and investment returns can be
            configured to automatically settle bills without manual effort.
          </p>
        </div>
           {/* ================= CTA ================= */}
      <div className="py-[70px]   text-center px-4 relative z-[999]">
        <h2 className="text-[28px] font-bold text-white mb-4">
          Simplify Your Bills with Payclob
        </h2>
        <p className="max-w-xl mx-auto text-white mb-8">
          Let your savings and investment returns handle your bills while you
          focus on what matters most.
        </p>
        <button className="bg-activeColor text-white px-8 py-3 rounded-[8px] font-semibold">
          Get Started with Payclob
        </button>
      </div>
                     {/* Background Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#10436b]/90 via-[#10436b]/60 to-black/90 "></div>
      </section>

   
    </>
  );
};

export default BillManagement;
