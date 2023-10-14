import Container from "../components/Container";
import Tag from "../components/Tag";
import { BuildingIcon } from "../icons/icons";
import Button from "../components/Button";
import { useLocation } from "react-router-dom";
import formatPrice from "../helpers/formatPrice";
import { useEffect, useState } from "react";

const Booking = () => {
   const location = useLocation();
   const data = location.state;

   const [date1, setDate1] = useState("");
   const [date2, setDate2] = useState("");
   const [totalPrice, setTotalPrice] = useState(0);

   useEffect(() => {
      if (date1 && date2) {
         const date1Arr = date1.split("-");
         const date2Arr = date2.split("-");
         const date1Obj = new Date(date1Arr[0], date1Arr[1], date1Arr[2]);
         const date2Obj = new Date(date2Arr[0], date2Arr[1], date2Arr[2]);
         const diffTime = Math.abs(date2Obj - date1Obj);
         const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
         console.log(diffDays);
         setTotalPrice(Math.ceil((data.price * diffDays) / 365));
      }
   }, [data.price, date1, date2]);

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
                     <h1 className="heading-1">{data.name}</h1>
                     <p className="paragraph">
                        {data.city}, {data.provinc}
                     </p>
                  </div>
                  <div className="flex gap-3 justify-start items-center w-full">
                     <Tag text="Kantor" />
                     <Tag text="Meeting" />
                  </div>
                  <div className="flex justify-between items-center w-full">
                     <div className="flex gap-3">
                        <BuildingIcon />
                        <p>{data.name}</p>
                     </div>{" "}
                     <p>{data.accommodate} persons</p>
                  </div>

                  <h2>
                     <span className="font-bold text-2xl text-primary">IDR {formatPrice(data.price)}</span>/year
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
                  <div className="flex flex-col justify-between items-start h-full gap-5 mt-10 w-full">
                     <label className="paragraph !font-bold">Tanggal Mulai</label>
                     <input
                        onChange={(e) => setDate1(e.target.value)}
                        type="date"
                        className="w-full border-2 border-gray-300 rounded-full text-gray-600 h-16 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                        placeholder="Regular input"
                        defaultValue=""
                     />

                     <label className="paragraph !font-bold">Tanggal Berakhir</label>
                     <input
                        onChange={(e) => setDate2(e.target.value)}
                        type="date"
                        className="w-full border-2 border-gray-300 rounded-full text-gray-600 h-16 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                        placeholder="Regular input"
                        defaultValue=""
                     />

                     <p className="paragraph !font-bold">Total Harga</p>
                     <h2 className="heading-1 text-primary">IDR {formatPrice(totalPrice)}</h2>
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
