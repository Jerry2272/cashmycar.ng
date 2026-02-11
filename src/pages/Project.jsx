import proBg from '../assets/projectBg.png';
import { Navbar } from '../components/Navbar';
import { projectGallery, projectLocationDetails } from '../components/util';
import { Footer } from '../components/Footer';

const Project = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="h-[60vh] flex items-center justify-start text-center px-4 lg:px-[100px]"
        style={{
          backgroundImage: `linear-gradient(#02010166, #02010166), url(${proBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="font-manRope font-[700] text-3xl md:text-5xl lg:text-6xl text-white">
          Projects
        </h1>
      </section>

      {/* Project & Location Display  */}
      <section className="py-10 px-4 md:px-[100px]">
  <div
    className="flex items-center mb-[40px] text-[#020101] font-bold text-[18px] font-manRope px-4 md:px-10 bg-[#FDE7E7] py-3"
    style={{
      borderBottom: '1px solid #ED2625',
    }}
  >
    <span className="mr-4 md:mr-10">#</span>
    <span>Projects undertaken</span>
    <span className="ml-auto">Locations</span>
  </div>

  {projectLocationDetails.map((item, i) => (
    <div
      key={i}
      className={`flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-0 px-4 md:px-10 text-[#101828] font-[400] text-[16px] md:text-[18px] font-manRope ${
        i % 2 === 0 ? 'bg-white h-auto md:h-[86px]' : 'bg-[#F6F6F6] h-auto md:h-[100px]'
      } py-4 md:py-0`}
    >
      <span className="mr-4 md:mr-10">{item.span}</span>
      <p className="lg:w-[740px] leading-7">{item.project}</p>
      <span className="ml-auto">{item.location}</span>
    </div>
  ))}
</section>


      {/* Project Image Gallery */}
      <section className="py-10 px-4 md:px-[100px]">
        <h2 className="text-[28px] md:text-[38px] font-bold text-activeColor font-spaceGrotesk mb-[40px]">
          Project Gallery
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px]">
    {projectGallery.map((item, i) => (
      <div key={i} className="w-full h-[120px] sm:h-[140px] md:h-[180px] overflow-hidden rounded-[8px]">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
    ))}
  </div>
</section>


<Footer />
    </>
  );
};

export default Project;
