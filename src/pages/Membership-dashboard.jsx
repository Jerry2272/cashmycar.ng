import { useState } from "react";  
import LoanForm from "../components/LoanForm";

const formsTemplate = [
  { name: "Membership Form" },
  { name: "Savings Form" },
  { name: "Loan Application Form" },
  { name: "Bill Management Form" },
  { name: "Investment Form" },
];

const MembershipDashboard = () => {
  const [modalOpen, setModalOpen] = useState(null);
  const [status, setStatus] = useState({});

  const handleSuccess = (formName) => {
    setStatus(prev => ({ ...prev, [formName]: "Submitted" }));
    setModalOpen(null);
    alert(`${formName} submitted successfully`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* HEADER */}
      <header className="bg-activeColor text-white py-6 px-4 shadow-md">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold">
            Welcome to Your Member Dashboard
          </h1>
          <p className="text-sm opacity-90">
            Complete your onboarding and access cooperative services
          </p>
        </div>
      </header>

      {/* DASHBOARD CARDS */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-activeColor mb-8 text-center">
          Onboarding Forms
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {formsTemplate.map(form => (
            <div
              key={form.name}
              className="bg-white rounded-2xl shadow-md p-6 text-center"
            >
              <h3 className="text-xl font-semibold mb-3">{form.name}</h3>

              <button
                onClick={() => setModalOpen(form.name)}
                className="bg-activeColor text-white px-4 py-2 rounded-lg hover:opacity-90"
              >
                {status[form.name] ? "View / Edit" : "Fill Form"}
              </button>

              {status[form.name] && (
                <p className="mt-3 text-green-600 text-sm">
                  ✅ {status[form.name]}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl p-6 relative">

            <button
              onClick={() => setModalOpen(null)}
              className="absolute top-4 right-4 text-gray-500 font-bold"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-activeColor mb-6">
              {modalOpen}
            </h2>

            {/* MEMBERSHIP FORM */}
            {/* {modalOpen === "Membership Form" && (
              <MembershipForm onSuccess={() => handleSuccess("Membership Form")} />
            )} */}

            {/* LOAN FORM */}
            {modalOpen === "Loan Application Form" && (
              <LoanForm onSubmit={() => handleSuccess("Loan Application Form")} />
            )}

            {/* PLACEHOLDERS FOR OTHERS */}
            {["Savings Form", "Bill Management Form", "Investment Form"].includes(modalOpen) && (
              <div className="text-center py-12 text-gray-600">
                <p className="mb-4">
                  This form will be available shortly.
                </p>
                <button
                  onClick={() => handleSuccess(modalOpen)}
                  className="bg-activeColor text-white px-6 py-2 rounded-lg"
                >
                  Mark as Submitted (Demo)
                </button>
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
};

export default MembershipDashboard;
