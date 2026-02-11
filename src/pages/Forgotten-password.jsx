import { useState } from "react";
import forgotImg from "../assets/Login-bg.png";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen w-full bg-white">

      {/* WRAPPER */}
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 relative">

        {/* ================= LEFT IMAGE ================= */}
        <div className="relative md:block hidden">
          <img
            src={forgotImg}
            alt="Forgot Password"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 flex items-center px-10">
            <div className="text-white max-w-md">
              <h2 className="text-[32px] font-bold mb-4 leading-tight">
                Don’t worry, we’ve got you covered.
              </h2>
              <p className="text-gray-200 text-[18px]">
                Reset your password securely and continue your journey 🔐
              </p>
            </div>
          </div>
        </div>

        {/* ================= FORM SECTION ================= */}
        <div className="relative flex items-center justify-center px-6">

          {/* MOBILE IMAGE OVERLAY */}
          <div className="absolute inset-0 md:hidden">
            <img
              src={forgotImg}
              alt="Forgot Password"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>

          {/* FORM CARD */}
          <div className="relative z-10 w-full max-w-md bg-white/90 backdrop-blur-md rounded-[12px] p-8 shadow-lg">

            <p className="text-sm text-gray-500 mb-2">
              Forgot your password?
            </p>

            <h1 className="text-[32px] font-bold text-activeColor mb-6">
              Reset Password
            </h1>

            <p className="text-sm text-gray-600 mb-6">
              Enter the email address associated with your account and we’ll send you instructions.
            </p>

            <form className="space-y-6">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border rounded-[8px] focus:outline-none focus:ring-2 focus:ring-activeColor"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-activeColor text-white py-3 rounded-[8px] font-semibold hover:opacity-90 transition"
              >
                Send Reset Link
              </button>
            </form>

            <p className="text-sm text-gray-600 mt-6 text-center">
              Remembered your password?{" "}
              <a
                href="/login"
                className="text-activeColor font-semibold hover:underline"
              >
                Login
              </a>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
