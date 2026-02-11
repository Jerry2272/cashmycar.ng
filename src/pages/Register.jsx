import { useState } from "react";
import registerImg from "../assets/Register-bg.png"; // Replace with your image

const Register = () => {
  const [form, setForm] = useState({
    firstName: "",
    surname: "",
    middleName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen w-full bg-white">

      {/* Wrapper */}
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 relative">

        {/* ================= LEFT IMAGE + OVERLAY ================= */}
        <div className="relative w-full h-full">
          <img
            src={registerImg}
            alt="EasyBillz Register"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-10">
            <div className="text-white max-w-md text-center">
              <h2 className="text-[32px] font-bold mb-4 leading-tight">
                Freedom starts with financial security. Grow yours today.
              </h2>
              <p className="text-gray-200 text-[18px]">🌟😊</p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT FORM ================= */}
        <div className="relative flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md">

            <p className="text-sm text-gray-500 mb-2 text-center">
              Hello there 😊,
            </p>

            <h1 className="text-[32px] font-bold text-activeColor mb-8 text-center">
              Register
            </h1>

            <form className="space-y-6">
              {/* First Name */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={form.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-[8px] focus:outline-none focus:ring-2 focus:ring-activeColor"
                />
              </div>

              {/* Surname */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Surname
                </label>
                <input
                  type="text"
                  name="surname"
                  placeholder="Enter your surname"
                  value={form.surname}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-[8px] focus:outline-none focus:ring-2 focus:ring-activeColor"
                />
              </div>

              {/* Middle Name */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Middle Name
                </label>
                <input
                  type="text"
                  name="middleName"
                  placeholder="Enter your middle name"
                  value={form.middleName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-[8px] focus:outline-none focus:ring-2 focus:ring-activeColor"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
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
                  name="password"
                  placeholder="Password should be at least 8 characters long"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-[8px] focus:outline-none focus:ring-2 focus:ring-activeColor"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-[8px] focus:outline-none focus:ring-2 focus:ring-activeColor"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-activeColor text-white py-3 rounded-[8px] font-semibold hover:opacity-90 transition"
              >
                Register
              </button>
            </form>

            <p className="text-sm text-gray-600 mt-6 text-center">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-activeColor font-semibold hover:underline"
              >
                That's nice. Login
              </a>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
