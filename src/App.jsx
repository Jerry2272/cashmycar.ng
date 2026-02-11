import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageLayout from "./layouts/PageLayout"; 
// import Survey from "./pages/Survey";
import ProcureMent, { Investment } from "./pages/Investment"; 
import About from "./pages/About";
import Geo, { Savings } from "./pages/Savings";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import EasyBillzInvestment from "./pages/EasyBillz";
import { BillManagement } from "./pages/Bill-Management";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/Forgotten-password";
import SMELoan from "./pages/Sme";
import Gallery from "./pages/Gallery";
import Membership from "./pages/Membership";
import MembershipPayment from "./pages/Membership-payment";
import MembershipForm from "./pages/Membersip-form";
import MembershipDashboard from "./pages/Membership-dashboard";

 

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes> 
              <Route path="/" element={<Home />} /> 
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} /> 
              <Route path="/login" element={<Login />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/register" element={<Register />} /> 
               <Route path="/membership" element={<Membership />} /> 
               <Route path="/membership-payment" element={<MembershipPayment />} /> 
              <Route path="/membership-form" element={<MembershipForm />} />
              <Route path="/membership-dashboard" element={<MembershipDashboard />} />
              <Route path="/services" element={<PageLayout />} >
                <Route path="easybillz-flexpay" element={<EasyBillzInvestment  />} />
                <Route path="investment" element={<Investment />} />
                <Route path="bill-management" element={<BillManagement />} />
                <Route path="procurement" element={<ProcureMent />} />
                <Route path="savings" element={<Savings />} />
                <Route path="loan" element={<SMELoan />} />
              </ Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
