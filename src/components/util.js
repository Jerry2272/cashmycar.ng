
// hero background slide 
import bg1 from '../assets/hero-bg.jpg';
import bg2 from '../assets/hero-banner2.png';
import bg3 from '../assets/hero-banner1.png';
import bg4 from '../assets/hero-banner3.png';

// client logo image 
import cl1 from '../assets/clientLogo1.png';
import cl2 from '../assets/clientLogo2.png';

// services image carousel 
import serImage1 from '../assets/sme.webp';
import serImage2 from '../assets/savings.webp'; 
import serImage3 from '../assets/investment.webp'; 
import serImage4 from '../assets/bills-management.webp'; 
import serImage5 from '../assets/flexpay.webp'; 


// other services images display in grid in hydro section 
import otherServices1 from '../assets/hydroService1.png'; 
import otherServices2 from '../assets/hydroService2.png'; 
import otherServices3 from '../assets/hydroService3.png'; 
import otherServices4 from '../assets/hydroService4.png'; 
import otherServices5 from '../assets/hydroService5.png'; 

// other services images display in grid in survey section 
import survey1 from '../assets/survey1.png'; 
import survey2 from '../assets/survey2.png'; 
import survey3 from '../assets/survey3.png'; 
import survey4 from '../assets/survey4.png'; 
import survey5 from '../assets/survey5.png'; 


// other services images display in grid in Procurement section 
import proMent1 from '../assets/proImg1.png'; 
import proMent2 from '../assets/proImg2.png'; 
import proMent3 from '../assets/proImg3.png'; 
import proMent4 from '../assets/proImg4.png'; 
import proMent5 from '../assets/proImg5.png'; 

// Project IMages display 
import pr1 from '../../src/assets/pr1.png';
import pr2 from '../../src/assets/pr2.png';
import pr3 from '../../src/assets/pr3.png';
import pr4 from '../../src/assets/pr4.png';
import pr5 from '../../src/assets/pr5.png';
import pr6 from '../../src/assets/proengImg.jpg';
import pr7 from '../../src/assets/pr7.png';
import pr8 from '../../src/assets/pr8.png';
import pr9 from '../../src/assets/pr9.png';
import pr10 from '../../src/assets/pr10.png';
import pr11 from '../../src/assets/pr11.png';
import pr12 from '../../src/assets/pr12.png';
import pr13 from '../../src/assets/pr13.png';
import pr14 from '../../src/assets/pr14.png';
import pr15 from '../../src/assets/pr15.png';
import pr16 from '../../src/assets/pr16.png';
import pr17 from '../../src/assets/pr17.png';
import pr18 from '../../src/assets/pr18.png';
import pr19 from '../../src/assets/pr19.png';
import pr20 from '../../src/assets/pr20.png';



// hero background slide 
export const HeroSlide = [
  {
    img: bg1,
    title: 'Unlock Fast Cash from Your Car with',
    span: 'CASHMYCAR.NG',
    description: 'Access instant, secure, and transparent vehicle-backed loans. Turn your car’s value into real financial opportunities without the stress of traditional banking.'
  },
  {
    img: bg2,
    title: 'Get Funded in Less Than 24 Hours with',
    span: 'CASHMYCAR.NG',
    description: 'Say goodbye to long waits. Our streamlined loan process ensures you get the money you need quickly, safely, and reliably.'
  },
  {
    img: bg3,
    title: 'Secure, Transparent, and Stress-Free Loans with',
    span: 'CASHMYCAR.NG',
    description: 'Your car becomes your financial leverage. We provide fast approvals, clear terms, and zero hidden fees for every loan.'
  },
  {
    img: bg4,
    title: 'Empowering Nigerians to Access Instant Capital with',
    span: 'CASHMYCAR.NG',
    description: 'Whether it’s business growth or emergency expenses, we help you unlock your car’s value safely, efficiently, and confidently.'
  }
];



// client logo image 
export const clientLogo = [
    {
        logo: cl1,
    },
    {
        logo: cl2,
    }
]

// service page section 
export const Services = [
  {
    serviceImg: serImage1,
    text: "SME Financing",
    link: "/services/loan",
  },
  {
    serviceImg: serImage2,
    text: "Smart Savings",
    link: "/services/savings",
  },
  {
    serviceImg: serImage3,
    text: "Investment Opportunities",
    link: "/services/investment",
  },
  {
    serviceImg: serImage4,
    text: "Bill Management",
    link: "/services/bill-management",
  },
  {
    serviceImg: serImage5,
    text: "EasyBillz FlexiPay",
    link: "/services/easybillz-flexpay",
  },
];



// service page section background: ;backdrop-filter: blur(6px)

export const hyDroservices =[
    {
        id: 1,
        img: otherServices1
    },
    {
        id: 2,
        img: otherServices2
    },
    {
        id: 3,
        img: otherServices3
    },
    {
        id: 4,
        img: otherServices4
    },
    {
        id: 5,
        img: otherServices5
    }
]

// other services images display in grid in survey section
export const  survey =[
    {
        id: 1,
        img: survey1
    },
    {
        id: 2,
        img: survey2
    },
    {
        id: 3,
        img: survey3
    },
    {
        id: 4,
        img: survey5
    },
    {
        id: 5,
        img: survey4
    }
]

// other services images display in grid in Procurement section
export const  Procurement =[
    {
        id: 1,
        img: proMent1
    },
    {
        id: 2,
        img: proMent2
    },
    {
        id: 3,
        img: proMent3
    },
    {
        id: 4,
        img: proMent5
    },
    {
        id: 5,
        img: proMent4
    }
]

// project Location and project name display in project page
export const projectLocationDetails =[
    {
        id: 1,
        span: 1,
        project: 'Mercury Risk Vulnerability Indicator Tracker for Keffi',
        location: 'Nasarawa State.',
    },
    {
        id: 2,
        span: 2,
        project: 'Geophysical survey and Wreck Removal Survey of Badagry Creek',
        location: 'Lagos State.',
    },
    {
        id: 3,
        span: 3,
        project: 'Geotechnical Investigation soil testing and Positioning Survey for the construction of road from Jakpa village Daleketa village Utonilla village and Oboro village. Warri North L.G.A' , 
        location: 'Delta State.'
    },
    {
        id: 4,
        span: 4,
        project: 'Geotechnical Investigation, soil testing and Positioning Survey for NDDC at Ogbia Nembe Road Construction',
        location: 'Bayelsa State.',
    },
    {
        id: 5,
        span: 5,
        project: 'Geophysical survey of 50km route from Apapa to Epe for Dangote Refinery. ',
        location: 'Lagos State.',
    },
    {
        id: 6,
        span: 6,
        project: 'Bathymetric Survey for the Construction of Jetty at Obama and Tebidaba Flow Station',
        location: 'Bayelsa State.',
    },
    {
        id: 7,
        span: 7,
        project: '17km 12" Pipeline As-Built Survey of Tebidaba-Clough Creek, i',
        location: 'Bayelsa State.',
    },
    {
        id: 8,
        span: 8,
        project: 'SEWOP Positioning of Leasi Bourg in Forcados Cluster 3 for Fabric Renewal.',
        location: 'Delta State.',
    },
    {
        id: 9,
        span: 9,
        project: '83km Bathymetric survey, Shore protection and topographic survey for Asaba super highway project from Onitsha to Asaba road, Utchokpai-Aboh Town',
        location: 'Imo State - Delta State',
    },
    {
        id: 10,
        span: 10,
        project: 'Soil Test/Analysis of 11 Hectares Convention Ground for the Apostlic Church Nigeria, Warri Area, LAWNA Territory at Okwejeba, Okpe LGA.',
        location: 'Delta State.',
    },
    {
        id: 11,
        span: 11,
        project: 'Engineering Survey of 11 Hectares Convention Ground for the Apostlic Church Nigeria, Warri Area, LAWNA Territory at Okwejeba, Okpe LGA.',
        location: 'Delta State.',
    },
    {
        id: 12,
        span: 12,
        project: 'Development of Nigeria Mining Cadastral Office Dashboara.',
        location: '',
    },
    {
        id: 13,
        span: 13,
        project: 'Setting out and mapping of Ugborodo New Town (perimeter and Detail survey), Warri North L.G.A. ',
        location: 'Delta State.',
    },
    {
        id: 14,
        span: 14,
        project: 'Dimension control / Engineering Survey for the Rehabilitation of Four Silos, Port Harcourt.',
        location: 'Rivers State.',
    },
    {
        id: 15,
        span: 15,
        project: 'Geophysical Survey (1km x 1.5km) for SBM Replacement in Forcados CLP for Michharry Nig.Ltd.',
        location: '---',
    },
    {
        id: 16,
        span: 16,
        project: 'Development of Nigeria Mining Cadastral Office Dashboara.',
        location: '---',
    },
    {
        id: 17,
        span: 17,
        project: 'Development of USAID West Africa Trade map & Investment Hub Partners Dashboard.',
        location: '---',
    },
    {
        id: 18,
        span: 18,
        project: 'Route survey for the construction of Ofagbe Township Road. Isoko LGA. ',
        location: 'Delta State.',
    },
    {
        id: 19,
        span: 19,
        project: 'Topography survey (grid levelling of Warri City Stadium)',
        location: 'Delta State.',
    },
    {
        id: 20,
        span: 20,
        project: 'Route survey for the construction of Agbowhiame Primary School Road. Ughelli South LGA',
        location: 'Delta State.',
    },
    {
        id: 21,
        span: 21,
        project: 'Cadastral Survey & Fencing Esanma Primary School, Bomadi LGA. ',
        location: 'Delta State.',
    },
    {
        id: 22,
        span: 22,
        project: 'Land Reclamation / Construction of 50,000sqm capacity stacking area of Intels Ltd at Delta Port, Warri. ',
        location: 'Delta State.',
    },
    {
        id: 23,
        span: 23,
        project: 'Cadastral Survey & Fencing of Okpokuno Secondary Grammar School, Burutu LGA.',
        location: 'Delta State.',
    },
    {
        id: 24,
        span: 24,
        project: 'Web-based map app production showing the location of Elementary Schools',
        location: 'Gombe State.',
    },
    {
        id: 25,
        span: 25,
        project: 'Cadastral Survey & Fencing King Palace Ogbudugbudu town Warri North LGA.',
        location: 'Delta State.',
    },
    {
        id: 26,
        span: 26,
        project: 'Oil Palm Growers Association of Nigeria Dashboard.',
        location: '---',
    },
    {
        id: 27,
        span: 27,
        project: 'Cadastral Survey & Fencing of Ogbeinama Epiekiri Primary School, Bomadi LGA.',
        location: 'Delta State.',
    },
    {
        id: 28,
        span: 28,
        project: 'Production of Rural Electrification Operations Dashboard.',
        location: '--',
    },
    {
        id: 29,
        span: 29,
        project: 'Web map production for Abuja Central Business District Cadastre Mapping, ',
        location: 'Abuja',
    },
    {
        id: 30,
        span: 30,
        project: 'Detail survey in Auchi 35km road from (Ayogiri-Igodorokpekpe-Okpella).',
        location: 'Edo State.',
    },
    {
        id: 31,
        span: 31,
        project: 'Cadastral Survey & Fencing of Ogbeinama Epiekiri Primary School, Bomadi LGA.',
        location: 'Delta State.',
    },
    {
        id: 32,
        span: 32,
        project: 'Detail survey of Federal University of Petroleum Resources (Ugbomro)',
        location: 'Delta State.',
    },
    {
        id: 33,
        span: 33,
        project: 'Cadastral Survey & Fencing of Okpokuno Secondary Grammar School, Burutu LGA.',
        location: 'Delta State.',
    },
    {
        id: 34,
        span: 34,
        project: 'Route survey for the canalization of Warri River Channels',
        location: 'Delta State.',
    },
    {
        id: 35,
        span: 35,
        project: 'Cadastral Survey & Fencing of Ogbeinama Epiekiri Primary School, Bomadi LGA.',
        location: 'Delta State.',
    },
    {
        id: 36,
        span: 36,
        project: 'Web-based map app production showing the location of Elementary Schools ',
        location: 'Gombe State.',
    },
    {
        id: 37,
        span: 37,
        project: 'Shore protection and land reclamation of Ode-Itsekiri',
        location: 'Delta State.',
    },
    {
        id: 38,
        span: 38,
        project: 'Sieve analysis services for Bayelsa State Governement house extension dredging operations.',
        location: 'Bayelsa State.',
    },
    {
        id: 39,
        span: 39,
        project: 'Development of Nigeria Agriculture Crop Produce Sales Dashboard.',
        location: '--',
    },
    {
        id: 40,
        span: 40,
        project: 'Survey for the construction of Edukugho Road Drain. Warri South LGA',
        location: 'Delta State.',
    },
    {
        id: 41,
        span: 41,
        project: 'Cadastral Survey & Fencing of Ayakoromo Health Centre Burutu LGA',
        location: '--',
    },
]


export const projectGallery = [
    {  id: 1, img: pr1},
    { id: 2, img: pr2 },
    { id: 3, img: pr3 },
    { id: 4, img: pr4 },
    { id: 5, img: pr5 },
    { id: 6, img: pr6 },
    { id: 7, img: pr7 },
    { id: 8, img: pr8 },
    { id: 9, img: pr9 },
    { id: 10, img: pr10 },
    { id: 11, img: pr11 },
    { id: 12, img: pr12 },
    { id: 13, img: pr13 },
    { id: 14, img: pr14 },
    { id: 15, img: pr15 },
    { id: 16, img: pr16 },
    { id: 17, img: pr17 },
    { id: 18, img: pr18 },
    { id: 19, img: pr19 },
    { id: 20, img: pr20 },
] 


export const homeGallery = [
    {  id: 1, img: pr1},
    { id: 2, img: pr2 },
    { id: 3, img: pr3 },
    { id: 4, img: pr4 },
    { id: 5, img: pr5 },
    { id: 6, img: pr6 },
    { id: 7, img: pr7 },
    { id: 8, img: pr8 },
    { id: 9, img: pr9 },
    { id: 10, img: pr10 },
    { id: 11, img: pr11 },
    { id: 12, img: pr12 },
] 