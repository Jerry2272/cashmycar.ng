import { Navbar } from '../components/Navbar'
import contactBg from '../assets/bgContac.png'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import { Footer } from '../components/Footer';

const Contact = () => {
  return (
    <div className="bg-[#FFF7F6]">
      <Navbar />

      <section
        className="h-[60vh] flex items-center justify-start text-center px-4 lg:px-[100px]"
        style={{
          backgroundImage: `linear-gradient(120.47deg,  #10436b 10.32%, rgba(16, 67, 107, 0.53)  50.96%, #020101 122.45%),url(${contactBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
         
      >
        <h1 className="font-manRope font-[700] text-3xl md:text-5xl lg:text-6xl text-white">
          Contact Us
        </h1>
      </section>

      <section className="flex flex-col lg:flex-row gap-10 px-6 md:px-[100px] py-12 justify-center items-center">
        <div className="flex-1 space-y-6">
          <h2 className="text-[#020101] font-manRope font-[600] text-[28px] md:text-[34px]">
            Precision Begins Here. <br /> Get in Touch with Easy Billz.
          </h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-4 text-[#1A1423] font-manRope text-[18px]">
              <span className="flex items-center justify-center h-[36px] w-[36px] rounded-full bg-[#10436b] text-white text-[18px]">
                <FaEnvelope />
              </span>
              Easybillz@gmail.com
            </li>
            <li className="flex items-center gap-4 text-[#1A1423] font-manRope text-[18px]">
              <span className="flex items-center justify-center h-[36px] w-[36px] rounded-full bg-[#10436b] text-white text-[18px]">
                <FaPhoneAlt />
              </span>
              +234 70 3702 1175 || +234 81 0426 3860
            </li>
            <li className="flex items-center gap-4 text-[#1A1423] font-manRope text-[18px]">
              <span className="flex items-center justify-center h-[36px] w-[36px] rounded-full bg-[#10436b] text-white text-[18px]">
                <MdLocationOn />
              </span>
             57 Woji Road, GRA phase 2 Port Harcourt.
            </li>
          </ul>
        </div>

        <form className="bg-white  p-6 rounded-xl w-full lg:w-[500px] space-y-5">
          <h3 className="text-[28px] font-semibold font-manRope mb-4 text-[#10436b]">Send a Message</h3>
          <div className="flex flex-col">
            <label className="text-[#1A1423] mb-2">Your Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#10436b]"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[#1A1423] mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter Email address"
              className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#10436b]"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[#1A1423] mb-2">Your Message</label>
            <textarea
              rows={5}
              placeholder="Type your message..."
              className="border p-3 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#10436b]"
            ></textarea>
          </div>

          <button className="bg-[#10436b] text-white px-6 py-3 w-full rounded-md font-semibold  ">
            Send Message
          </button>
        </form>
      </section>
      <Footer />
    </div>
  )
}

export default Contact
