import { useState } from "react";

const LoanForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    fullName: "",
    gender: "",
    age: "",
    address: "",
    loanAmount: "",
    repaymentDate: "",
    security: "",
    vehicleType: "",
    vehicleModel: "",
    vehicleYear: "",
    vehicleOwned: "",
    vehiclePhotos: null,
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      // Append all form fields
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

      if (!response.ok) throw new Error("Failed to submit loan application");

      const data = await response.json();
      alert("Loan application submitted successfully!");
      console.log(data);
      if (onSubmit) onSubmit(data);
    } catch (error) {
      console.error(error);
      alert("Error submitting your application");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-h-[80vh] overflow-y-auto p-4 bg-white rounded-lg shadow-md">
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        onChange={handleChange}
        className="w-full p-3 border rounded"
        required
      />

      <select name="gender" onChange={handleChange} className="w-full p-3 border rounded" required>
        <option value="">Gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>

      <input type="number" name="age" placeholder="Age" onChange={handleChange} className="w-full p-3 border rounded" required />
      <input type="text" name="address" placeholder="Address" onChange={handleChange} className="w-full p-3 border rounded" required />
      <input type="number" name="loanAmount" placeholder="How much do you need" onChange={handleChange} className="w-full p-3 border rounded" required />
      <input type="date" name="repaymentDate" placeholder="When do you intend to repay" onChange={handleChange} className="w-full p-3 border rounded" required />
      <input type="text" name="security" placeholder="Nature of security" onChange={handleChange} className="w-full p-3 border rounded" />

      <input type="text" name="vehicleType" placeholder="Vehicle Type" onChange={handleChange} className="w-full p-3 border rounded" />
      <input type="text" name="vehicleModel" placeholder="Vehicle Model" onChange={handleChange} className="w-full p-3 border rounded" />
      <input type="number" name="vehicleYear" placeholder="Vehicle Year" onChange={handleChange} className="w-full p-3 border rounded" />

      <select name="vehicleOwned" onChange={handleChange} className="w-full p-3 border rounded">
        <option value="">Is vehicle owned by you?</option>
        <option>Yes</option>
        <option>No</option>
      </select>

      <label className="block">
        Attach recent pictures of the car (exterior, interior, engine)
        <input type="file" name="vehiclePhotos" onChange={handleChange} multiple className="mt-2 w-full" />
      </label>

      <label className="block">
        Attach proof of vehicle ownership
        <input type="file" name="ownershipProof" onChange={handleChange} className="mt-2 w-full" />
      </label>

      <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
        Submit Vehicle Loan Application
      </button>
    </form>
  );
};

export default LoanForm;
