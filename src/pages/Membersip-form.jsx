  import { useState } from "react";
  import { useNavigate } from "react-router-dom";

  const MembershipForm = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
      membershipNo: "",
      date: "",
      firstName: "",
      lastName: "",
      otherNames: "",
      maritalStatus: "",
      motherMaiden: "",
      placeOfBirth: "",
      spouseName: "",
      dob: "",
      stateOfOrigin: "",
      homeTown: "",
      gender: "",
      nationality: "",
      lga: "",
      religion: "",
      residenceAddress: "",
      landmark: "",
      localGovResidence: "",
      townCity: "",
      mobileNumber: "",
      email: "",
      meansOfID: "",
      idNumber: "",
      employmentStatus: "",
       annualIncome: "",
    employer: "",
    city: "",
    state: "",
    businessNature: "",
    officePhone: "",
    nextOfKin: { firstName: "", surname: "", otherNames: "", dob: "", relationship: "", phone: "" },
    address: { street: "", city: "", state: "" },
    account: { name: "", number: "", bvn: "", bank: "" },
    signature: "",
    declarationName: "",
    declarationSign: "",
    declarationDate: "",
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setForm(prev => ({ ...prev, [name]: value }));
    };

    const isFormComplete = () => {
      return Object.values(form).every(v => v !== "");
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!isFormComplete()) return alert("Please fill all fields");

      // TODO: Send form data to backend API
      alert("Membership Form submitted successfully!");
      navigate("/membership-dashboard");
    };

    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-[28px] font-bold text-activeColor mb-6 text-center">
            Membership Form
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Membership No & Date */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="membershipNo"
                placeholder="Membership No"
                value={form.membershipNo}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg"
              />
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg"
              />
            </div>

            {/* Personal Info */}
            <div className="grid md:grid-cols-3 gap-4">
              <input type="text" name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
              <input type="text" name="lastName" placeholder="Last Name (Surname)" value={form.lastName} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
              <input type="text" name="otherNames" placeholder="Other Names" value={form.otherNames} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <select name="maritalStatus" value={form.maritalStatus} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg">
                <option value="">Marital Status</option>
                <option value="Married">Married</option>
                <option value="Single">Single</option>
                <option value="Other">Other</option>
              </select>
              <input type="text" name="motherMaiden" placeholder="Mother's Maiden Name" value={form.motherMaiden} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
              <input type="text" name="placeOfBirth" placeholder="Place of Birth" value={form.placeOfBirth} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" name="spouseName" placeholder="Spouse Name (if applicable)" value={form.spouseName} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
              <input type="date" name="dob" placeholder="Date of Birth" value={form.dob} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <input type="text" name="stateOfOrigin" placeholder="State of Origin" value={form.stateOfOrigin} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
              <input type="text" name="homeTown" placeholder="Home Town" value={form.homeTown} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
              <select name="gender" value={form.gender} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg">
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <input type="text" name="nationality" placeholder="Nationality" value={form.nationality} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
              <input type="text" name="lga" placeholder="LGA" value={form.lga} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
              <input type="text" name="religion" placeholder="Religion" value={form.religion} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
            </div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-4">
              <input type="text" name="residenceAddress" placeholder="Residence Address" value={form.residenceAddress} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
              <input type="text" name="landmark" placeholder="Landmark" value={form.landmark} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
              <input type="text" name="localGovResidence" placeholder="Local Govt Residence" value={form.localGovResidence} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" name="townCity" placeholder="Town/City" value={form.townCity} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
              <input type="text" name="mobileNumber" placeholder="Mobile Number" value={form.mobileNumber} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
            </div>

            <div>
              <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
            </div>

            {/* Means of ID & Employment */}
            <div className="grid md:grid-cols-2 gap-4">
              <select name="meansOfID" value={form.meansOfID} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg">
                <option value="">Means of Identification</option>
                <option value="National ID Card">National ID Card</option>
                <option value="International Passport">International Passport</option>
                <option value="Driver's License">Driver's License</option>
                <option value="Voter's Card">Voter's Card</option>
                <option value="Others">Others</option>
              </select>
              <input type="text" name="idNumber" placeholder="ID Number" value={form.idNumber} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
            </div>

            <div>
              <select name="employmentStatus" value={form.employmentStatus} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg">
                <option value="">Employment Status</option>
                <option value="Employed">Employed</option>
                <option value="Self-employed">Self-employed</option>
                <option value="Student">Student</option>
                <option value="Others">Others</option>
              </select>
            </div> 
            {/* Annual Income */}
            <div>
              <label className="block font-medium mb-2">Annual Salary / Income</label>
              <select name="annualIncome" value={form.annualIncome} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg">
                <option value="">Select</option>
                <option value="0-50000">0 – 50,000</option>
                <option value="50000-500000">50,000 – 500,000</option>
                <option value="500000-1000000">500,000 – 1,000,000</option>
                <option value="1M+">1M - Above</option>
              </select>
            </div>

            {/* Employer / City / State */}
            <div className="grid md:grid-cols-3 gap-4">
              <input type="text" name="employer" placeholder="Employer / Business Name" value={form.employer} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
              <input type="text" name="city" placeholder="City / Town" value={form.city} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
              <input type="text" name="state" placeholder="State" value={form.state} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
            </div>

            {/* Nature of Business / Office Phone */}
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" name="businessNature" placeholder="Nature of Business / Company" value={form.businessNature} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
              <input type="text" name="officePhone" placeholder="Office Phone No" value={form.officePhone} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
            </div>

            {/* Next of Kin */}
            <div>
              <h3 className="text-[20px] font-semibold text-activeColor mb-4">Next of Kin</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" name="nextOfKin.firstName" placeholder="First Name" value={form.nextOfKin.firstName} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
                <input type="text" name="nextOfKin.surname" placeholder="Surname" value={form.nextOfKin.surname} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
              </div>
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <input type="text" name="nextOfKin.otherNames" placeholder="Other Names" value={form.nextOfKin.otherNames} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
                <input type="date" name="nextOfKin.dob" placeholder="Date of Birth" value={form.nextOfKin.dob} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
                <input type="text" name="nextOfKin.relationship" placeholder="Relationship" value={form.nextOfKin.relationship} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
              </div>
              <input type="text" name="nextOfKin.phone" placeholder="Phone Number" value={form.nextOfKin.phone} onChange={handleChange} className="w-full mt-4 px-4 py-3 border rounded-lg" />
            </div>

            {/* Home Address */}
            <div>
              <h3 className="text-[20px] font-semibold text-activeColor mb-4">Home Address</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" name="address.street" placeholder="Street / House" value={form.address.street} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
                <input type="text" name="address.city" placeholder="City / Town" value={form.address.city} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
              </div>
              <input type="text" name="address.state" placeholder="State" value={form.address.state} onChange={handleChange} className="w-full mt-4 px-4 py-3 border rounded-lg" />
            </div>

            {/* Email */}
            <div>
              <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
            </div>

            {/* Account Details */}
            <div>
              <h3 className="text-[20px] font-semibold text-activeColor mb-4">Account Details</h3>
              <input type="text" name="account.name" placeholder="Account Name" value={form.account.name} onChange={handleChange} className="w-full px-4 py-3 mb-4 border rounded-lg" />
              <input type="text" name="account.number" placeholder="Account Number" value={form.account.number} onChange={handleChange} className="w-full px-4 py-3 mb-4 border rounded-lg" />
              <input type="text" name="account.bvn" placeholder="BVN" value={form.account.bvn} onChange={handleChange} className="w-full px-4 py-3 mb-4 border rounded-lg" />
              <input type="text" name="account.bank" placeholder="Bank Name" value={form.account.bank} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
            </div>

            {/* Signature & Declaration */}
            <div>
              <input type="text" name="signature" placeholder="Signature" value={form.signature} onChange={handleChange} className="w-full px-4 py-3 mb-4 border rounded-lg" />
              <p className="text-gray-600 mb-4">
                I/WE hereby apply for the opening of account with Easybillz CO-OP and affirm that all the information provided above are correct.
              </p>
              <input type="text" name="declarationName" placeholder="Name" value={form.declarationName} onChange={handleChange} className="w-full px-4 py-3 mb-4 border rounded-lg" />
              <input type="text" name="declarationSign" placeholder="Sign" value={form.declarationSign} onChange={handleChange} className="w-full px-4 py-3 mb-4 border rounded-lg" />
              <input type="date" name="declarationDate" placeholder="Date" value={form.declarationDate} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
            </div> 

            <button type="submit" className="w-full py-3 rounded-lg font-semibold text-white bg-activeColor hover:opacity-90 transition">
              Submit Membership Form
            </button>
            <a href="/membership-dashboard">Proceed to dashboard</a>
          </form>
        </div>
      </div>
    );
  };

  export default MembershipForm;
