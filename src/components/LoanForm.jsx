
import { useState } from "react";

const LoanForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    fullName: "",
    gender: "",
    age: "",
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
      <input
        name="fullName"
        placeholder="Full Name"
        onChange={handleChange}
        className="w-full p-3 border rounded"
      />

      <select name="gender" onChange={handleChange} className="w-full p-3 border rounded">
        <option value="">Gender</option>
        <option>Male</option>
        <option>Female</option>
      </select>

      <input
        name="age"
        placeholder="Age"
        type="number"
        onChange={handleChange}
        className="w-full p-3 border rounded"
      />

      <input
        name="address"
        placeholder="Address"
        onChange={handleChange}
        className="w-full p-3 border rounded"
      />

      <input
        name="loanAmount"
        placeholder="How much do you need"
        type="number"
        onChange={handleChange}
        className="w-full p-3 border rounded"
      />

      <input
        name="repaymentDate"
        placeholder="When do you intend to repay"
        type="date"
        onChange={handleChange}
        className="w-full p-3 border rounded"
      />

      <input
        name="securityNature"
        placeholder="Nature of security"
        onChange={handleChange}
        className="w-full p-3 border rounded"
      />

      <input
        name="vehicleType"
        placeholder="Vehicle type"
        onChange={handleChange}
        className="w-full p-3 border rounded"
      />

      <input
        name="vehicleModel"
        placeholder="Vehicle model"
        onChange={handleChange}
        className="w-full p-3 border rounded"
      />

      <input
        name="vehicleYear"
        placeholder="Vehicle year"
        type="number"
        onChange={handleChange}
        className="w-full p-3 border rounded"
      />

      <select name="vehicleOwned" onChange={handleChange} className="w-full p-3 border rounded">
        <option value="">Is vehicle owned by you?</option>
        <option>Yes</option>
        <option>No</option>
      </select>

      <input
        name="vehiclePictures"
        type="file"
        multiple
        onChange={handleChange}
        className="w-full p-3 border rounded"
      />

      <input
        name="ownershipProof"
        type="file"
        onChange={handleChange}
        className="w-full p-3 border rounded"
      />

      <button
        type="button"
        onClick={handleSubmit}
        className="w-full bg-[#c6ff5e] text-white py-3 rounded-lg"
      >
        Submit Vehicle Loan Application
      </button>
    </form>
  );
};

export default LoanForm;
