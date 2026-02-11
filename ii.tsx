import { useState } from "react";
import paymentImg from "../assets/hero-banner3.png";

const MembershipPayment:React.FC = () => {
  const [form, setForm] = useState({
    annualIncome: "",
    employer: "",
    city: "",
    state: "",
    businessNature: "",
    officePhone: "",
    nextOfKin: { firstName: "", surname: "", otherNames: "", dob: "", relationship: "", phone: "" },
    address: { street: "", city: "", state: "" },
    email: "",
    account: { name: "", number: "", bvn: "", bank: "" },
    signature: "",
    declarationName: "",
    declarationSign: "",
    declarationDate: "",
  });

  const [isPaid, setIsPaid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("nextOfKin.")) {
      setForm(prev => ({ ...prev, nextOfKin: { ...prev.nextOfKin, [name.split(".")[1]]: value } }));
    } else if (name.startsWith("address.")) {
      setForm(prev => ({ ...prev, address: { ...prev.address, [name.split(".")[1]]: value } }));
    } else if (name.startsWith("account.")) {
      setForm(prev => ({ ...prev, account: { ...prev.account, [name.split(".")[1]]: value } }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  // Check if all fields are filled
  const isFormComplete = () => {
    // Flatten all values
    const values = [
      form.annualIncome, form.employer, form.city, form.state,
      form.businessNature, form.officePhone,
      ...Object.values(form.nextOfKin),
      ...Object.values(form.address),
      form.email,
      ...Object.values(form.account),
      form.signature,
      form.declarationName, form.declarationSign, form.declarationDate
    ];
    return values.every(v => v !== "");
  };

  const handlePayment = () => {
    if (!isFormComplete()) return;

    // TODO: Integrate Paystack / Flutterwave here
    setTimeout(() => {
      setIsPaid(true);
    }, 1000);
  };

  if (isPaid) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
        <h1 className="text-[36px] md:text-[48px] font-bold text-activeColor mb-4 text-center">
          🎉 Congratulations!
        </h1>
        <p className="text-gray-700 text-lg text-center max-w-lg">
          Your payment was successful. You are now a full member of EasyBillz CO-OP. Enjoy all benefits including savings, SME loans, bill management, investments, and priority support.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* ================= HERO ================= */}
      <section
        className="h-[35vh] flex items-center justify-center text-center px-6 relative"
        style={{
          backgroundImage: `url(${paymentImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-white max-w-xl">
          <h1 className="text-[36px] md:text-[48px] font-bold mb-4">
            Become a Member
          </h1>
          <p className="text-[18px] md:text-[20px]">
            Fill your membership details below and pay ₦2,000 to activate.
          </p>
        </div>
      </section>

      {/* ================= FORM + PAYMENT ================= */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-[28px] font-bold text-activeColor mb-6 text-center">
            Membership Form
          </h2>

          <form className="space-y-6">
            {/* Annual Salary / Income */}
            <div>
              <label className="block font-medium mb-2">Annual Salary / Income</label>
              <select name="annualIncome" value={form.annualIncome} onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-activeColor">
                <option value="">Select</option>
                <option value="0-50000">0 – 50,000</option>
                <option value="50000-500000">50,000 – 500,000</option>
                <option value="500000-1000000">500,000 – 1,000,000</option>
                <option value="1M+">1M - Above</option>
              </select>
            </div>

            {/* Employer / Business */}
            <div>
              <label className="block font-medium mb-2">Employer / Business Name</label>
              <input type="text" name="employer" value={form.employer} onChange={handleChange}
                     className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-activeColor"/>
            </div>

            {/* City / State */}
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" name="city" placeholder="City / Town" value={form.city} onChange={handleChange}
                     className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-activeColor"/>
              <input type="text" name="state" placeholder="State" value={form.state} onChange={handleChange}
                     className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-activeColor"/>
            </div>

            {/* Nature of Business / Office Phone */}
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" name="businessNature" placeholder="Nature of Business / Company"
                     value={form.businessNature} onChange={handleChange}
                     className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-activeColor"/>
              <input type="text" name="officePhone" placeholder="Office Phone No"
                     value={form.officePhone} onChange={handleChange}
                     className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-activeColor"/>
            </div>

            {/* Next of Kin */}
            <div>
              <h3 className="text-[20px] font-semibold text-activeColor mb-4">Next of Kin</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" name="nextOfKin.firstName" placeholder="First Name"
                       value={form.nextOfKin.firstName} onChange={handleChange}
                       className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-activeColor"/>
                <input type="text" name="nextOfKin.surname" placeholder="Surname"
                       value={form.nextOfKin.surname} onChange={handleChange}
                       className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-activeColor"/>
              </div>
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <input type="text" name="nextOfKin.otherNames" placeholder="Other Names"
                       value={form.nextOfKin.otherNames} onChange={handleChange}
                       className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-activeColor"/>
                <input type="date" name="nextOfKin.dob" value={form.nextOfKin.dob} onChange={handleChange}
                       className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-activeColor"/>
                <input type="text" name="nextOfKin.relationship" placeholder="Relationship"
                       value={form.nextOfKin.relationship} onChange={handleChange}
                       className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-activeColor"/>
              </div>
              <input type="text" name="nextOfKin.phone" placeholder="Phone Number"
                     value={form.nextOfKin.phone} onChange={handleChange}
                     className="w-full mt-4 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-activeColor"/>
            </div>

            {/* Home Address */}
            <div>
              <h3 className="text-[20px] font-semibold text-activeColor mb-4">Home Address</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" name="address.street" placeholder="Street / House" value={form.address.street} onChange={handleChange}
                       className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-activeColor"/>
                <input type="text" name="address.city" placeholder="City / Town" value={form.address.city} onChange={handleChange}
                       className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-activeColor"/>
              </div>
              <input type="text" name="address.state" placeholder="State" value={form.address.state} onChange={handleChange}
                     className="w-full mt-4 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-activeColor"/>
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium mb-2">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange}
                     className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-activeColor"/>
            </div>

            {/* Account Details */}
            <div>
              <h3 className="text-[20px] font-semibold text-activeColor mb-4">Account Details</h3>
              <input type="text" name="account.name" placeholder="Account Name" value={form.account.name} onChange={handleChange}
                     className="w-full px-4 py-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-activeColor"/>
              <input type="text" name="account.number" placeholder="Account Number" value={form.account.number} onChange={handleChange}
                     className="w-full px-4 py-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-activeColor"/>
              <input type="text" name="account.bvn" placeholder="BVN" value={form.account.bvn} onChange={handleChange}
                     className="w-full px-4 py-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-activeColor"/>
              <input type="text" name="account.bank" placeholder="Bank Name" value={form.account.bank} onChange={handleChange}
                     className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-activeColor"/>
            </div>

            {/* Signature & Declaration */}
            <div>
              <label className="block font-medium mb-2">Signature</label>
              <input type="text" name="signature" value={form.signature} onChange={handleChange}
                     className="w-full px-4 py-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-activeColor"/>
              <h3 className="text-[20px] font-semibold text-activeColor mb-4">Declaration</h3>
              <p className="text-gray-600 mb-4">
                I/WE hereby apply for the opening of account with Easybillz CO-OP and affirm that all the information provided above are correct.
              </p>
              <input type="text" name="declarationName" placeholder="Name" value={form.declarationName} onChange={handleChange}
                     className="w-full px-4 py-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-activeColor"/>
              <input type="text" name="declarationSign" placeholder="Sign" value={form.declarationSign} onChange={handleChange}
                     className="w-full px-4 py-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-activeColor"/>
              <input type="date" name="declarationDate" value={form.declarationDate} onChange={handleChange}
                     className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-activeColor"/>
            </div>

            <button type="button" onClick={handlePayment}
                    disabled={!isFormComplete()}
                    className={`w-full py-3 rounded-lg font-semibold text-white transition ${
                      isFormComplete() ? "bg-activeColor hover:opacity-90" : "bg-gray-400 cursor-not-allowed"
                    }`}
            >
              Proceed to Payment
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default MembershipPayment;
