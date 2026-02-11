import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navbar } from "../components/Navbar";
import Client from "../molecules/Client";
import { Footer } from "../components/Footer";

const videos = [
  "https://player.vimeo.com/video/1130653301?h=23105612fb",
  "https://player.vimeo.com/video/1130653262?h=e300679e10",
  "https://player.vimeo.com/video/1130653235?h=674c96c3e5",
  "https://player.vimeo.com/video/1130653207?h=4110b7e01d",
  "https://player.vimeo.com/video/1130653182?h=c3defe933e",
  "https://player.vimeo.com/video/1130653159?h=086ad97c10",
];

import heroBg from '../assets/hero-banner2.png'

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);

  return (
    <>
    <Navbar />
      {/* ================= HERO ================= */}
      <section className="h-[45vh] bg-activeColor relative flex items-center justify-center text-center"
       style={{
                backgroundImage: `linear-gradient(120.47deg,  #10436b 10.32%, rgba(16, 67, 107, 0.53)  50.96%, #020101 122.45%), url(${heroBg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize:  'cover',
                backgroundPosition: 'center',
                borderRadius: '0px'
              }}
      >
        <h1 className="text-white text-[40px] md:text-[56px] font-bold z-10">
          Gallery
        </h1>
        <div className="absolute inset-0 bg-black/50"></div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-[90px] px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Intro */}
          <div className="text-center mb-14" data-aos="fade-up">
            <h2 className="text-[34px] font-bold text-activeColor mb-4">
              Moments & Highlights
            </h2>
            <p className="text-[18px] text-gray-600 max-w-3xl mx-auto">
             Agrovest 2024 farming season
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 px-10">
            {videos.map((src, index) => (
              <div
                key={index}
                className="rounded-[18px] overflow-hidde  border border-[#10436b]  bg-[#10436b]"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="relative w-full pt-[56.25%]">
                  <iframe
                    src={src}
                    title={`EasyBillz Video ${index + 1}`}
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Client />
      <Footer />
    </>
  );
};

export default Gallery;
