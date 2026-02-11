import { useState } from "react";
import { useNavigate } from "react-router-dom";
import paymentImg from "../assets/hero-banner.png"; // background image
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const MembershipPayment = () => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);

    // Paystack setup
    const handler = window.PaystackPop.setup({
      key: "pk_test_b35c1a279051078f4f7401613b6e8c1664da4796", 
      email: "easybillz@gmail.com", 
      amount: 200000, // ₦2,000 in kobo
      currency: "NGN",
      ref: `${Math.floor(Math.random() * 1000000000 + 1)}`, // unique reference
      metadata: {
        custom_fields: [
          {
            display_name: "Membership",
            variable_name: "membership",
            value: "EasyBillz Membership",
          },
        ],
      },
      callback: function (response) {
        alert("Payment Successful! Reference: " + response.reference);
        // Redirect to Membership Form page after successful payment
        navigate("/membership-form");
      },
      onClose: function () {
        alert("Payment window closed.");
        setIsProcessing(false);
      },
    });

    handler.openIframe();
  };

  return (
    <div className="min-h-screen  relative">
      <Navbar />
      {/* ================= HERO ================= */}
      <section
        className="h-[40vh] flex items-center justify-center text-center px-6 relative"
        style={{
          backgroundImage: `url(${paymentImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-white max-w-xl">
          <h1 className="text-[32px] lg:text-[42px] font-bold mb-4">
            Activate Your Membership
          </h1>
          <p className="text-[18px] md:text-[20px]">
            Pay ₦2,000 to unlock full EasyBillz benefits and start your journey
            towards savings, investments, loans, and bill management.
          </p>
        </div>
      </section>

      {/* ================= PAYMENT CARD ================= */}
      <section className="py-20 px-4">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8 text-center">
          <h2 className="text-[28px] font-bold mb-4 text-activeColor">
            Membership Fee
          </h2>
          <p className="text-gray-600 mb-6">
            One-time payment to activate your membership.
          </p>
          <div className="text-[40px] font-bold text-activeColor mb-8">
            ₦2,000
          </div>

          <button
            onClick={handlePayment}
            disabled={isProcessing}
            className={`w-full py-3 rounded-lg font-semibold text-white transition ${
              isProcessing ? "bg-gray-400 cursor-not-allowed" : "bg-activeColor hover:opacity-90"
            }`}
          >
            {isProcessing ? "Processing..." : "Proceed to Payment"}
          </button>
          <a href="/membership-form">
          Proceed
          </a>

          <p className="text-gray-500 text-sm mt-4">
            Secure payment powered by Paystack.
          </p>
        </div>
      </section>

      {/* ================= BENEFITS REMINDER ================= */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-[28px] font-bold mb-6">Membership Benefits</h3>
          <p className="text-gray-600 mb-6">
            Once payment is successful, you can access savings plans, SME
            loans, bill management, investment opportunities, and priority
            support.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MembershipPayment;
