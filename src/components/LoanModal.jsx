// import { useState } from "react"; 
import { X } from "lucide-react"; 
import LoanForm from "./LoanForm";

 
export default function LoanModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl relative overflow-y-auto max-h-[90vh]">

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X size={24} />
        </button>

        {/* Title */}
        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold text-[#0A1A3C]">
            Apply for a Loan
          </h2>
          <p className="text-gray-500 text-sm">
            Fill the form below and our team will contact you shortly.
          </p>
        </div>

        {/* Form */}
        <div className="p-6">
          <LoanForm />
        </div>
      </div>
    </div>
  );
}
