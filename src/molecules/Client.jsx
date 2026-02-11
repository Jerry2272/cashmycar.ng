import { clientLogo} from '../components/util';
const Client = () => {
  return (
    <section className='md:pl-[100px] md:mb-[40px] p-[40px] pl-[10px]'>
    <h2 className='text-[28px] md:text-[38px] font-bold text-activeColor font-spaceGrotesk mb-[40px]' data-aos="fade-up">Our Clients</h2>
      <div className='flex'>
    {
      clientLogo.map((logo, i) =>(
<div key={i} >
          <img src={logo.logo} className={`${i % 2 ? ' ml-[10px]'  : ''}`} alt="" />
        </div>
      ))
    }
        </div>
    </section>
  )
}

export default Client 