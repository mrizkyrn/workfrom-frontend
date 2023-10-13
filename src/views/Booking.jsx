import Container from "../components/Container";
import Tag from "../components/Tag";
import { ArrowBotIcon, BuildingIcon } from "../icons/icons";
import Button from "../components/Button";

const Booking = () => {
   return (
      <>
         <Container>
            <div className="flex justify-end items-center mt-10">
               <p>
                  Home &gt; Use Case &gt; Clapham &gt; <span className="text-primary">Booking</span>
               </p>
            </div>
         </Container>

         <Container>
            <div className="flex justify-center items-center gap-20 mt-16 p-12">
               <div className="basis-full">
                  <img src="/image-11.png" alt="Landing Image" className="w-full" />
               </div>
               <div className="basis-full flex flex-col justify-center items-start gap-8">
                  <div className="flex justify-between items-center w-full">
                     <h1 className="heading-1">Ivory</h1>
                     <p className="paragraph">Medan, Sumatera Utara</p>
                  </div>
                  <div className="flex gap-3 justify-start items-center w-full">
                     <Tag text="Kantor" />
                     <Tag text="Meeting" />
                  </div>
                  <div className="flex justify-between items-center w-full">
                     <div className="flex gap-3">
                        <BuildingIcon />
                        <p>buliding name</p>
                     </div>{" "}
                     <p>30 persons</p>
                  </div>

                  <h2>
                     <span className="font-bold text-2xl text-primary">IDR 1.400.000</span>/year
                  </h2>
               </div>
            </div>
         </Container>

         <Container>
            <div className="flex justify-between items-center shadow-[0_4px_15px_rgba(109,109,109,0.3)] h-[800px] rounded-3xl mt-12">
               <div className="flex flex-col justify-between items-start px-12">
                  <div>
                     <h1 className="heading-1 text-dark1">Form Pemesanan</h1>
                     <p className="paragraph mt-5">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu dolorol egestas morbi sem
                        vulputate etiam facilisis pellentesque ut quis.
                     </p>
                  </div>
                  <div className="flex flex-col justify-between items-start h-full gap-5 mt-10">
                     <p className="paragraph !font-bold">Lama Sewa</p>
                     <div className="relative w-full">
                        <ArrowBotIcon />

                        <select
                           className="w-full border-2 border-gray-300 rounded-full text-gray-600 h-16 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                           placeholder="Regular input"
                           defaultValue=""
                        >
                           <option value="" disabled>
                              Pilih Lama Sewa
                           </option>
                           <option value="1">1 Tahun</option>
                           <option value="2">2 Tahun</option>
                        </select>
                     </div>
                     <p className="paragraph !font-bold">Metode Pembayaran</p>
                     <div className="relative w-full">
                        <ArrowBotIcon />

                        <select
                           className="w-full border-2 border-gray-300 rounded-full text-gray-600 h-16 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                           placeholder="Pilih Metode"
                           defaultValue=""
                        >
                           <option value="" disabled>
                              Pilih Metode
                           </option>
                           <option value="metode 1">Metode 1</option>
                           <option value="metode 2">Metode 2</option>
                           <option value="metode 3">Metode 3</option>
                        </select>
                     </div>
                     <p className="paragraph !font-bold">Total Harga</p>
                     <h2 className="heading-1 text-primary">IDR 5.000.000</h2>
                     <Button text="Book Now" type={1} />
                  </div>
               </div>
               <div className="w-full h-full">
                  <img src="/image-11.png" alt="Case" className="w-auto h-full object-cover rounded-md rounded-e-2xl" />
               </div>
            </div>
         </Container>
      </>
   );
};

export default Booking;
