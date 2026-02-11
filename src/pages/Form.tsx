import { useState, ChangeEvent, FormEvent } from "react";

interface LoanFormData {
  fullName?: string;
  phone?: string;
  email?: string;
  address?: string;
  amount?: string;
  repayDate?: string;
  security?: string;
  vehicleType?: string;
  vehicleModel?: string;
  vehicleYear?: string;
  owned?: string;
}

export default function LoanForm() {
  const [form, setForm] = useState<LoanFormData>({});
  const [files, setFiles] = useState<File[]>([]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData();

    Object.entries(form).forEach(([key, value]) => {
      if (value) data.append(key, value);
    });

    files.forEach((file) => {
      data.append("images", file);
    });

    try {
      const res = await fetch("/api/loan", {
        method: "POST",
        body: data,
      });

      const result = await res.json();
      alert(result.message || "Submitted successfully");
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">

      <input name="fullName" placeholder="Full Name" onChange={handleChange} className="input" />
      <input name="phone" placeholder="Phone Number" onChange={handleChange} className="input" />
      <input name="email" placeholder="Email Address" onChange={handleChange} className="input" />
      <input name="address" placeholder="Home Address" onChange={handleChange} className="input" />

      <input name="amount" placeholder="Amount Needed" onChange={handleChange} className="input" />
      <input name="repayDate" type="date" onChange={handleChange} className="input" />

      <input name="security" placeholder="Nature of Security" onChange={handleChange} className="input" />
      <input name="vehicleType" placeholder="Vehicle Type" onChange={handleChange} className="input" />
      <input name="vehicleModel" placeholder="Vehicle Model" onChange={handleChange} className="input" />
      <input name="vehicleYear" placeholder="Vehicle Year" onChange={handleChange} className="input" />

      <select name="owned" onChange={handleChange} className="input">
        <option value="">Is vehicle owned by you?</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      <input type="file" multiple onChange={handleFileChange} />

      <button
        type="submit"
        className="bg-[#0A1A3C] text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
      >
        Apply for Loan
      </button>
    </form>
  );
}
