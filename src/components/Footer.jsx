import { Link } from "react-router-dom";
import Container from "./Container";

const Footer = () => {
   return (
      <Container>
         <div className="flex justify-between items-center py-10 w-full mt-44">
            <div className="flex flex-col justify-center items-start gap-5 w-1/3">
               <img src="/Logo-WF.png" alt="Logo" className="w-40" />
               <p className="text-[#6C757D]">
                  Komp. Ruko Centre Point Medan Jalan Timor Blok G No. III/IV 2nd Floor, Gang Buntu, Medan Timur, Medan
                  City, North Sumatra 20231
               </p>
               <p className="text-primary font-semibold">(+6261) 805 109 77</p>
            </div>
            <div className="flex justify-center items-start gap-16">
               <div>
                  <Link to="/use-case" className="text-primary font-semibold">
                     Use Case
                  </Link>
                  <p className="text-[#6C757D] mb-2 mt-5">Event</p>
                  <p className="text-[#6C757D] mb-2">Meeting</p>
                  <p className="text-[#6C757D] mb-2">Photoshoot</p>
                  <p className="text-[#6C757D] mb-2">Videoshoot</p>
               </div>
               <div>
                  <Link to="/use-case" className="text-primary font-semibold">
                     Location
                  </Link>
                  <p className="text-[#6C757D] mb-2 mt-5">Clampham</p>
                  <p className="text-[#6C757D] mb-2">The 101</p>
                  <p className="text-[#6C757D] mb-2">Yafurni</p>
                  <p className="text-[#6C757D] mb-2">Kalingga</p>
               </div>
               <div>
                  <Link to="/use-case" className="text-primary font-semibold">
                     Company
                  </Link>
                  <p className="text-[#6C757D] mb-2 mt-5">Contact Us</p>
                  <p className="text-[#6C757D] mb-2">Blog</p>
               </div>
            </div>
         </div>
      </Container>
   );
};

export default Footer;
