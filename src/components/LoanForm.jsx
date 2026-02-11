import { useState } from "react";

 

const LoanForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    loanCategory: "",
    bvn: "",
    nin: "",
    surname: "",
    firstName: "",
    middleName: "",
    phone: "",
    maritalStatus: "",
    spouseName: "",
    spouseContact: "",
    address: "",
    stateResidence: "",
    lgaResidence: "",
    stateOrigin: "",
    nationality: "",
    businessName: "",
    businessType: "",
    businessDescription: "",
    businessPhone: "",
    monthlyRevenue: "",
    experience: "",
    position: "",
    staffCount: "",
    loanAmount: "",
    loanPurpose: "",
    repaymentMode: "",
    bankName: "",
    accountName: "",
    accountNumber: "",
  });

  const handleChange  = () => {
    setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = async () => {
  try {
    const response = await fetch("https://yourbackend.com/api/loans", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (!response.ok) {
      throw new Error("Failed to submit loan application");
    }

    const data = await response.json();
    alert("Loan application submitted successfully!");
    console.log(data);
  } catch (error) {
    console.error(error);
    alert("There was an error submitting your application");
  }
};

  };

  return (
    <form className="space-y-4 max-h-[70vh] overflow-y-auto">
     
      {/* Loan Category */}
      <select name="loanCategory" onChange={handleChange} className="w-full p-3 border bg-black/60 rounded">
        <option value="">Loan Category</option>
        <option>Personal Loan</option>
        <option>Business Loan</option>
        <option>Salary Advance</option>
        <option>POS Loan</option>
        <option>Project Loan</option>
      </select>

      <input name="bvn" placeholder="BVN" onChange={handleChange} className="w-full p-3 border rounded" />
      <input name="nin" placeholder="NIN" onChange={handleChange} className="w-full p-3 border rounded" />

      {/* Bio Data */}
      <div className="grid grid-cols-2 gap-4">
        <input name="surname" placeholder="Surname" onChange={handleChange} className="p-3 border rounded" />
        <input name="firstName" placeholder="First Name" onChange={handleChange} className="p-3 border rounded" />
      </div>

      <input name="middleName" placeholder="Middle Name" onChange={handleChange} className="w-full p-3 border rounded" />
      <input name="phone" placeholder="Phone Number" onChange={handleChange} className="w-full p-3 border rounded" />

      <select name="maritalStatus" onChange={handleChange} className="w-full p-3 border rounded">
        <option value="">Marital Status</option>
        <option>Single</option>
        <option>Married</option>
      </select>

      <input name="spouseName" placeholder="Spouse Name" onChange={handleChange} className="w-full p-3 border rounded" />
      <input name="spouseContact" placeholder="Spouse Contact" onChange={handleChange} className="w-full p-3 border rounded" />

      {/* Business Info */}
      <input name="businessName" placeholder="Business Name" onChange={handleChange} className="w-full p-3 border rounded" />
      <input name="businessDescription" placeholder="Business Description" onChange={handleChange} className="w-full p-3 border rounded" />
      <input name="monthlyRevenue" placeholder="Avg Monthly Revenue" onChange={handleChange} className="w-full p-3 border rounded" />

      {/* Loan Info */}
      <input name="loanAmount" placeholder="Loan Amount Requested" onChange={handleChange} className="w-full p-3 border rounded" />
      <input name="loanPurpose" placeholder="Purpose of Loan" onChange={handleChange} className="w-full p-3 border rounded" />

      <select name="repaymentMode" onChange={handleChange} className="w-full p-3 border rounded">
        <option value="">Repayment Mode</option>
        <option>Weekly</option>
        <option>Monthly</option>
      </select>

      {/* Bank */}
      <input name="bankName" placeholder="Bank Name" onChange={handleChange} className="w-full p-3 border rounded" />
      <input name="accountName" placeholder="Account Name" onChange={handleChange} className="w-full p-3 border rounded" />
      <input name="accountNumber" placeholder="Account Number" onChange={handleChange} className="w-full p-3 border rounded" />
      <button
        type="button"
        onClick={() => onSubmit?.(form)}
        className="w-full bg-activeColor text-white py-3 rounded-lg"
      >
        Submit Loan Application
      </button>
    </form>
  );
};

export default LoanForm;
