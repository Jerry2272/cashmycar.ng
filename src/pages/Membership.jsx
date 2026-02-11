import { Link } from "react-router-dom";

import heroBanner from '../assets/hero-banner.png'
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import membershipBg from '../assets/membership-banner.webp'

const Membership = () => {
  return (
    <div className="min-h-screen ">
        <Navbar />

      {/* ================= HERO ================= */}
      <section className="h-[45vh] bg-activeColor flex items-center justify-center text-center px-6"
      
      style={{
                backgroundImage: `linear-gradient(120.47deg,  #10436b 10.32%, rgba(16, 67, 107, 0.53)  50.96%, #020101 122.45%), url(${heroBanner})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize:  'cover',
                backgroundPosition: 'center',
                borderRadius: '0px'
              }}
      >
        <div>
          <h1 className="text-white text-[36px] md:text-[52px] font-bold mb-4">
            Become a Member
          </h1>
          <p className="text-white/90 text-[18px] max-w-2xl mx-auto">
            Activate your EasyBillz membership and unlock savings, loans,
            investments, and bill management solutions.
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Comparison */}
          <div className="mb-20">
            <h2 className="text-[32px] font-bold text-center mb-10">
              Registration vs Membership
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Registration */}
              <div className="bg-white p-8 rounded-xl shadow">
                <h3 className="text-[22px] font-semibold mb-6">
                  Registration
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li>✔ Creates an account</li>
                  <li>✔ Email & password</li>
                  <li>✔ Free</li>
                  <li>✔ Basic access</li>
                </ul>
              </div>

              {/* Membership */}
              <div className="bg-activeColor text-white p-8 rounded-xl shadow-lg">
                <h3 className="text-[22px] font-semibold mb-6">
                  Membership
                </h3>
                <ul className="space-y-3">
                  <li>✔ Activates benefits</li>
                  <li>✔ ₦2,000 one-time fee</li>
                  <li>✔ Full access</li>
                  <li>✔ Members only</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-20 text-center">
            <h2 className="text-[32px] font-bold mb-6">
              Membership Benefits
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-10">
              As a member, you gain access to powerful financial tools
              designed to help you grow, save, and manage your money better.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Savings plans (Akawo, Target, Fixed)",
                "SME, POS & Vendor loans",
                "Payclob bill management",
                "Earn up to 24% per annum",
                "Priority support",
                "Exclusive member opportunities",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow text-gray-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Membership Fee */}
          <div className="bg-white rounded-2xl shadow-xl p-10 text-center mx-auto"
           style={{
              backgroundImage:  `linear-gradient(120.47deg,  #10436b 10.32%, rgba(16, 67, 107, 0.53)  50.96%, #020101 122.45%), url(${membershipBg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h3 className="text-[26px] font-bold mb-4 text-white">
              Membership Fee
            </h3>
            <p className="text-white mb-6">
              Pay a one-time membership fee to activate your benefits.
            </p>

            <div className="text-[40px] font-bold text-white mb-8">
              ₦2,000
            </div>

            <Link
              to="/membership-payment"
              className="inline-block bg-activeColor text-white px-10 py-4 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Become a Member
            </Link>
          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Membership;
