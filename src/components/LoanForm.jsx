import { useState } from "react";

const LoanForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    fullName: "",
    address: "",
    loanAmount: "",
    repaymentDate: "",
    securityNature: "",
    vehicleType: "",
    vehicleModel: "",
    vehicleYear: "",
    vehicleOwned: "",
    vehiclePictures: null,
    ownershipProof: null,
  });

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;
    if (type === "file") {
      setForm({ ...form, [name]: files });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      for (let key in form) {
        if (form[key] instanceof FileList) {
          for (let i = 0; i < form[key].length; i++) {
            formData.append(key, form[key][i]);
          }
        } else {
          formData.append(key, form[key]);
        }
      }

      const response = await fetch("https://yourbackend.com/api/vehicle-loans", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to submit vehicle loan");

      const data = await response.json();
      alert("Vehicle loan application submitted successfully!");
      console.log(data);
      if (onSubmit) onSubmit(form);
    } catch (error) {
      console.error(error);
      alert("There was an error submitting your application");
    }
  };

  return (
    <form className="space-y-4 max-h-[70vh] overflow-y-auto">
      {/* Full Name */}
      <div>
        <label className="block mb-1 font-semibold">Full Name</label>
        <input
          name="fullName"
          placeholder="Enter your full name"
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
      </div>

      {/* Address */}
      <div>
        <label className="block mb-1 font-semibold">Address</label>
        <input
          name="address"
          placeholder="Enter your address"
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
      </div>

      {/* Loan Amount */}
      <div>
        <label className="block mb-1 font-semibold">How much do you need</label>
        <input
          name="loanAmount"
          type="number"
          placeholder="Enter loan amount"
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
      </div>

      {/* Repayment Date */}
      <div>
        <label className="block mb-1 font-semibold">When do you intend to repay</label>
        <input
          name="repaymentDate"
          type="date"
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
      </div>

      {/* Nature of Security */}
      <div>
        <label className="block mb-1 font-semibold">Nature of security</label>
        <input
          name="securityNature"
          placeholder="Enter nature of security"
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
      </div>

      {/* Vehicle Type */}
      <div>
        <label className="block mb-1 font-semibold">Vehicle type</label>
        <input
          name="vehicleType"
          placeholder="e.g., Car, Motorcycle"
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
      </div>

      {/* Vehicle Model */}
      <div>
        <label className="block mb-1 font-semibold">Vehicle model</label>
        <input
          name="vehicleModel"
          placeholder="e.g., Toyota Corolla"
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
      </div>

      {/* Vehicle Year */}
      <div>
        <label className="block mb-1 font-semibold">Vehicle year</label>
        <input
          name="vehicleYear"
          type="number"
          placeholder="e.g., 2020"
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
      </div>

      {/* Vehicle Ownership */}
      <div>
        <label className="block mb-1 font-semibold">Is vehicle owned by you?</label>
        <select
          name="vehicleOwned"
          onChange={handleChange}
          className="w-full p-3 border rounded"
        >
          <option value="">Select</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>

      {/* Vehicle Pictures */}
      <div>
        <label className="block mb-1 font-semibold">
          Attach recent pictures of the car: exterior, interior, engine
        </label>
        <input
          name="vehiclePictures"
          type="file"
          multiple
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
      </div>

      {/* Ownership Proof */}
      <div>
        <label className="block mb-1 font-semibold">Attach proof of ownership</label>
        <input
          name="ownershipProof"
          type="file"
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        className="w-full bg-[#0a1a3c] text-white py-3 rounded-lg"
      >
        Submit Vehicle Loan Application
      </button>
    </form>
  );
};

export default LoanForm;
