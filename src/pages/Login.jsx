import { useState } from "react";
import loginImg from "../assets/Login-bg.png";

const Login = () => {
  const [remember, setRemember] = useState(false);

  return (
    <div className="min-h-screen w-full bg-white">

      {/* Wrapper */}
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">

        {/* ================= IMAGE + OVERLAY ================= */}
        <div className="relative w-full h-[40vh] md:h-auto">
          <img
            src={loginImg}
            alt="EasyBillz Login"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-6 md:px-10">
            <div className="text-white max-w-md text-center md:text-left">
              <h2 className="text-[24px] md:text-[32px] font-bold mb-4 leading-tight">
                Savings catch you when life throws challenges; 
                wise investments secure your family’s future.
              </h2>
              <p className="text-gray-200 text-[18px]">
                🌟👨‍👩‍👧‍👦😊
              </p>
            </div>
          </div>
        </div>

        {/* ================= FORM ================= */}
        <div className="flex items-center justify-center px-6 py-12 md:py-0">
          <div className="w-full max-w-md">

            <p className="text-sm text-gray-500 mb-2 text-center md:text-left">
              Hi, welcome back 👋
            </p>

            <h1 className="text-[32px] font-bold text-activeColor mb-8 text-center md:text-left">
              Login
            </h1>

            <form className="space-y-6">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border rounded-[8px] focus:outline-none focus:ring-2 focus:ring-activeColor"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border rounded-[8px] focus:outline-none focus:ring-2 focus:ring-activeColor"
                />
              </div>

              {/* Remember / Forgot */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={() => setRemember(!remember)}
                    className="accent-activeColor"
                  />
                  Remember me
                </label>

                <a
                  href="/forgot-password"
                  className="text-sm text-activeColor hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-activeColor text-white py-3 rounded-[8px] font-semibold hover:opacity-90 transition"
              >
                Login
              </button>
            </form>

            <p className="text-sm text-gray-600 mt-8 text-center md:text-left">
              Don’t have an account?{" "}
              <a
                href="/register"
                className="text-activeColor font-semibold hover:underline"
              >
                No worries. Register now
              </a>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
