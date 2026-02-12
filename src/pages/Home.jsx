import { useEffect } from 'react';
// import { FiChevronRight } from "react-icons/fi";
// import { FiChevronLeft } from "react-icons/fi";
// import { Navbar } from './components/Navbar';
import { Footer } from '../components/Footer';
import Carousel from 'react-slick';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { HeroSlide, Services } from '../components/util';
import AboutImg from '../../src/assets/aboutImg.jpg'; 
import howItWorks from '../assets/hero-banner.jpg'


import 'aos/dist/aos.css'; // AOS styles
import AOS from 'aos'
import { Navbar } from '../components/Navbar'; 
import { Car, SearchCheck, Banknote, Zap, Lock, FileText, Shield } from "lucide-react";

import { useState } from "react";
import { FaWhatsapp } from 'react-icons/fa6'; 
import LoanModal from '../components/LoanModal';



const faqs = [
  {
    category: "General Information",
    items: [
      {
        question: "What is CASHMYCAR.NG?",
        answer:
          "We are a specialized credit solution provider offering fast loans using your vehicle’s equity as collateral, helping you unlock immediate cash for business or personal needs.",
      },
      {
        question: "Do I need a high credit score to get a loan?",
        answer:
          "No. Because our loans are secured by your vehicle, we focus more on the value of your car than traditional credit scoring—making the process faster and more accessible than bank loans.",
      },
    ],
  },
  {
    category: "The Loan Process",
    items: [
      {
        question: "How long does it take to get the money?",
        answer:
          "Once the physical inspection is complete and the agreement is signed, funds are typically disbursed to your bank account in under 24 hours.",
      },
      {
        question: "What documents do I need for the physical inspection?",
        answer:
          "You’ll need original proof of ownership, valid vehicle registration documents, and a valid means of identification such as NIN, International Passport, or Driver’s License.",
      },
      {
        question: "Can you come to me for the inspection?",
        answer:
          "Yes. You can visit one of our inspection centers or request a mobile agent to come to your preferred location for a quick 10-minute inspection.",
      },
    ],
  },
  {
    category: "Valuation & Payout",
    items: [
      {
        question: "How much can I borrow against my car?",
        answer:
          "The loan amount is determined by a percentage of your car’s current market value, based on its make, model, year, and physical condition.",
      },
      {
        question: "Is the online estimate the final amount?",
        answer:
          "No. The online valuation is only a preliminary estimate. The final offer is confirmed after a physical inspection verifies the car’s condition.",
      },
    ],
  },
  {
    category: "Repayment & Collateral",
    items: [
      {
        question: "Who keeps the car while I have the loan?",
        answer:
          "The vehicle serves as collateral and is held by CASHMYCAR.NG until the loan is fully repaid.",
      },
      {
        question: "What happens if I cannot repay the loan?",
        answer:
          "We encourage open communication. However, if repayment terms are not met, the vehicle may be permanently retained to settle the debt.",
      },
      {
        question: "Are there any hidden fees?",
        answer:
          "No. We operate with full transparency—interest rates, fees, and repayment schedules are clearly outlined before you sign the agreement.",
      },
    ],
  },
];


  const steps = [
    {
      icon: Car,
      title: "Online Valuation",
      description:
        "Start by filling out our quick online form with your car details (make, model, and year). We’ll give you an instant preliminary estimate of how much cash you can access.",
    },
    {
      icon: SearchCheck,
      title: "Vehicle Inspection",
      description:
        "Bring your car to any of our CASHMYCAR.NG inspection centers or have our agents come to you. We’ll do a quick 10-minute check to verify the vehicle's condition and documentation.",
    },
    {
      icon: Banknote,
      title: "Instant Disbursement",
      description:
        "Once the valuation is finalized and the agreement is signed, we trigger the payment. The funds are sent directly to your bank account often in under 24 hours",
    },
  ];


function Home () {
 useEffect(() =>{
  AOS.init({
    duration: 1000, // Duration of animations
  })
 }, []);
 
 const settings = {
  slidesToShow: 3.2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows: true,
  infinite: true,
  centerMode: true,
  centerPadding: "40px",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2.2,
        centerPadding: "30px",
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1.2,
        centerPadding: "20px",
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.1,
        centerPadding: "15px",
      },
    },
  ],
};

  const heroSettings = {
    infinite: true,
    speed: 5000,
    fade: true, 
    autoplay: true,
    arrows: false
  };


  // FAQ 

  const [openIndex, setOpenIndex] = useState(null);
  const [openLoanModal, setOpenLoanModal] = useState(false);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };



  return (
    <>
    <Navbar />
    <main>
    {/* hero section  */}
      <Slider {...heroSettings}>
        {HeroSlide.map((slide, i) => (
          <div key={i} 
          >
<section className="bg-white py-12 px-4 md:px-10 lg:px-20 text-center lg:text-left md:text-left">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">


{/* LEFT CONTENT */}
<div>
<h1 className="md:text-[57px] text-[30px] font-bold leading-tight font-spaceGrotesk mb-4">
{slide.title} <span className="text-[#0A1A3C]">{slide.span}</span>
</h1>


<p className="text-gray-600 text-lg mb-8 lg:max-w-lg">
{slide.description}
</p>


<div className="flex gap-4 lg:flex-wrap lg:justify-start md:justify-start justify-center">
<button
onClick={() => setOpenLoanModal(true)}
className="bg-[#0A1A3C] text-white lg:font-semibold lg:px-8 px-4 py-3 rounded-full hover:scale-105 transition duration-300 shadow-md"
>
Apply for a Loan
</button>


<a
href="#how-it-works"
className="border border-[#0A1A3C] px-8 py-3 rounded-full text-[#0A1A3C] hover:bg-gray-100 transition duration-300"
>
How It Works
</a>
</div>
</div>


{/* RIGHT IMAGE WITH DECORATIVE SHAPE */}
<div className="relative w-full max-w-lg ml-auto">


{/* Background shape (matches Otega style) */}
<div className="absolute -bottom-6 -right-6 w-full h-full bg-[#0A1A3C] rounded-[32px]" />


{/* Main image */}
<img
src={slide.img}
alt="Happy customer"
className="relative rounded-[32px]  w-full object-cover"
/>
</div>
</div>
</section>
          </div>
        ))}
      </Slider>
    
 
    {/* hero section ending */}
    
    {/* about section  */}
    <section className="about md:grid grid-cols-2 justify-center items-center  md:h-auto    overflow-hidden md:pl-[100px] gap-10 pl-[30px] pr-[30px] pt-[100px] pb-[100px] bg-[#C6FF5E]/20" id='about'>
      <div className="order-2" data-aos="zoom-in" data-aos-delay="300">
        <img src={AboutImg} className='mb-5 w-[97%] rounded-[20px]' alt="" />
      </div>
      <div className=" ">
        <div className=''>
          <h2 className='text-[28px] md:text-[38px] font-bold text-[#000]  font-spaceGrotesk mb-[20px]  ' data-aos="fade-up">About <span className='text-[#0A1A3C]'>CASHMYCAR.NG</span></h2>
          <p className=' text-[17px] font-[400] text-textColor font-manRope leading-[28px] mb-[20px]' data-aos="zoom-in">
       At CASHMYCAR.NG, we believe your assets should work for you. We specialize in providing streamlined credit solutions by leveraging the equity in your vehicle.
          </p>
          <p className=' text-[17px] font-[400] text-textColor font-manRope leading-[28px] mb-[20px]' data-aos="zoom-in">
           Our mission is to offer fast, transparent, and secure loan disbursements, helping Nigerians access capital without the traditional hurdles of unsecured lending. 
          </p>
          <p className=" text-[18px] font-[400] text-textColor font-manRope leading-[28px] mb-[40px]" data-aos="zoom-out">
         Whether you’re looking to grow a business or manage an unexpected expense, we turn your car’s value into immediate opportunity.
          </p>
             <p className=" text-[18px] font-[400] text-textColor font-manRope leading-[28px] mb-[40px]" data-aos="zoom-out">
            At CASHMYCAR.NG, our mission is to empower Nigerians by turning their vehicle’s value into fast, transparent, and secure financial opportunities.
            We simplify the lending process, eliminate unnecessary delays, and ensure every customer has access to reliable, asset-backed loans to grow their business, manage emergencies, or achieve personal goals.
              </p>
          {/* <Link to="/about" className="bg-activeColor text-white text-[16px] font-[400] font-manRope" 
        style={{
          padding: '12px 16px 12px 16px',
          borderRadius: '8px',
          border: '0',
        }}
        >
       See All
        </Link> */}
        </div>
      </div>
    </section>
    {/* about section ending */}

    {/* services section  */}
  <section

    className="service pt-[100px] md:mb-[200px] md:ml-[4em] md:pr-[0px] px-4 overflow-hidden"
    id="services"
  >
    {/* Section Title */}
    <div className="">
      <h2 className="text-[28px] text-center md:text-[38px] font-bold text-[#0A1A3C] font-spaceGrotesk mb-[20px]">
        Our Services
      </h2>
       <p className="text-[17px] text-textColor font-manRope leading-[28px] max-w-[700px] mx-auto text-center mb-[50px]">
   We offer flexible, vehicle-backed financial support designed to give you quick access to cash, while your vehicle is safely kept as collateral until repayment is completed.
  </p>
    </div>

    {/* Services Carousel */}
    <Carousel {...settings}>
      {Services.map((service, i) => (
        <div key={i} className="px-2">
  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group">

    {/* Image */}
    <div className="h-[220px] overflow-hidden">
      <img
        src={service.serviceImg}
        alt={service.text}
        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
      />
    </div>

    {/* Text */}
    <div className="p-6 text-center">
      <h3 className="text-[20px] font-semibold text-[#0A1A3C] font-manRope">
        {service.text}
      </h3>

      <p className="text-sm text-gray-500 mt-2">
        {service.desc}
      </p>
    </div>
  </div>
</div>

      ))}
    </Carousel>
  </section>



{/* How it works section */}
<section
  id="how-it-works"
  className="relative py-[100px] px-4 md:px-[4em] overflow-hidden my-10"
  style={{
    backgroundImage: `url(${howItWorks})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Background Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#0A1A3C]/90 via-[#0A1A3C]/60 to-black/90"></div>

  {/* Content */}
  <div className="relative z-10 max-w-6xl mx-auto text-center">
    {/* Section Heading */}
   
     <h2 className="text-2xl lg:text-4xl font-bold  text-white mb-4">
          How <span className="text-[#C6FF5E]">CASHMYCAR.NG</span> Works
        </h2>
        <p className="text-white/70  max-w-xl text-center mx-auto mb-16 lg:text-lg">
         Getting the cash you need is as easy as 1-2-3. No mountains of paperwork—just your car and your goals.
        </p>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 justify-center h-i-w"
      >
        {steps.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className=" bg-white flex flex-col justify-center  rounded-xl shadow hover:shadow-lg transition h-[250px] gap-2"
              style={{
                padding: '18px'
              }}
            >
              <div className="text-[#0A1A3C] mx-auto rounded-full bg-[#0A1A3C]/10 w-16 h-16 flex justify-center items-center mb-4 ">
                <Icon className="w-10 h-10" />
              </div>
              <h3 className="font-semibold text-xl text-[#0A1A3C] mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </div>
          );
        })}
   </div>
   </div>
</section>

{/* Why Choose Us   */}

<section id="why-choose-us" className="py-[100px] px-4 md:px-[4em] bg-[#f9fafb]">
  <div className="max-w-6xl mx-auto text-center">
    {/* Heading */}
    <h2 className="text-[28px] md:text-[38px] font-bold text-activeColor font-spaceGrotesk mb-4">
      Why Choose CASHMYCAR.NG?
    </h2>

    <p className="text-gray-600 max-w-2xl mx-auto mb-[60px]">
      Fast. Transparent. Secure. We turn your car’s value into immediate cash
      while giving you a seamless, stress-free experience.
    </p>

    {/* Features */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* Feature 1 */}
      <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition duration-300 text-center">
        <div className="w-16 h-16 flex items-center justify-center bg-activeColor text-white rounded-full mx-auto mb-4 text-xl font-bold">
            <Zap size={28} />
        </div>
        <h3 className="font-semibold text-lg mb-2">Instant Cash</h3>
        <p className="text-gray-600 text-sm">
          Receive funds in under 24 hours — no long waits or unnecessary delays.
        </p>
      </div>

      {/* Feature 2 */}
      <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition duration-300 text-center">
        <div className="w-16 h-16 flex items-center justify-center bg-activeColor text-white rounded-full mx-auto mb-4 text-xl font-bold">
          <Lock size={28} />
        </div>
        <h3 className="font-semibold text-lg mb-2">Secure Loans</h3>
        <p className="text-gray-600 text-sm">
          Asset-backed lending guarantees safe, reliable, and trustworthy
          financial transactions.
        </p>
      </div>

      {/* Feature 3 */}
      <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition duration-300 text-center">
        <div className="w-16 h-16 flex items-center justify-center bg-activeColor text-white rounded-full mx-auto mb-4 text-xl font-bold">
          <FileText size={28} />
        </div>
        <h3 className="font-semibold text-lg mb-2">Transparent Process</h3>
        <p className="text-gray-600 text-sm">
          Clear terms, honest communication, and absolutely no hidden fees or
          surprises.
        </p>
      </div>

    </div>
  </div>
</section>


 

{/* FAQ SECTION  */}
 
<section id="faq" className="py-[100px] px-4 md:px-[4em] bg-white">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-[28px] md:text-[38px] font-bold text-activeColor font-spaceGrotesk mb-12">
      Frequently Asked Questions
    </h2>

    <div className="space-y-10 text-left">
      {faqs.map((group, gIndex) => (
        <div key={gIndex}>
          {/* Category Title */}
          <h3 className="text-xl font-semibold text-[#10436b] mb-4">
            {group.category}
          </h3>

          <div className="space-y-4">
            {group.items.map((faq, index) => {
              const currentIndex = `${gIndex}-${index}`;

              return (
                <div
                  key={currentIndex}
                  className="border border-[#10436b] rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggle(currentIndex)}
                    className="w-full text-left px-6 py-4 bg-gray-100 hover:bg-gray-200 text-activeColor transition flex justify-between items-center"
                  >
                    <span className="font-medium">{faq.question}</span>
                    <span className="text-xl">
                      {openIndex === currentIndex ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    className={`px-6 text-[#10436b] transition-all duration-300 overflow-hidden ${
                      openIndex === currentIndex ? "max-h-40 py-4" : "max-h-0 py-0"
                    }`}
                  >
                    {faq.answer}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



    {/* services section ending */} 

    {/* client Section ending*/}
    <Footer />

   <button
  onClick={() => window.open('https://wa.me/2349133822666', '_blank')}
  className="fixed bottom-6 right-4 z-50 bg-[#0A1A3C] hover:scale-[1.1] text-white px-5 py-3 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2"
>
  <FaWhatsapp size={20} />
  Chat Us
</button>
<LoanModal
  isOpen={openLoanModal}
  onClose={() => setOpenLoanModal(false)}
/>
  </main>
  </>
  )
}


export default Home;
