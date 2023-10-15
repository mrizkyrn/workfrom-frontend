import Container from "../components/Container";
import Tag from "../components/Tag";
import { BuildingIcon } from "../icons/icons";
import { useLocation } from "react-router-dom";
import formatPrice from "../helpers/formatPrice";
import { useEffect, useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import showToastify from "../helpers/showToastify";
import { ToastContainer } from "react-toastify";

const Booking = () => {
   const { userToken } = useStateContext();
   const location = useLocation();
   const building = location.state;

   const [date1, setDate1] = useState(null);
   const [date2, setDate2] = useState(null);
   const [totalPrice, setTotalPrice] = useState(0);

   useEffect(() => {
      if (date1 && date2) {
         const date1Arr = date1.split("-");
         const date2Arr = date2.split("-");
         const date1Obj = new Date(date1Arr[0], date1Arr[1], date1Arr[2]);
         const date2Obj = new Date(date2Arr[0], date2Arr[1], date2Arr[2]);
         const diffTime = Math.abs(date2Obj - date1Obj);
         const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
         setTotalPrice(Math.ceil((building.price * diffDays) / 30));
      }
   }, [building.price, date1, date2]);

   const handleBooking = () => {
      if (date1 && date2) {
         fetch(`http://localhost:8000/orders/addorders/${building.user_id}?api_token=${userToken}`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            start: date1,
            finish: date2,
            price: totalPrice,
         }),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.message === "success") {
               console.log(data.data);
               showToastify("success", "Properti berhasil dipesan");
            } else {
               showToastify("error", "Properti gagal dipesan");
            }
         })
         .catch((err) => {
            console.log(err);
         });
      } else {
         showToastify("error", "Tanggal tidak boleh kosong");
      }
      
   };

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
                     <h1 className="heading-1">{building.name}</h1>
                     <p className="paragraph">
                        {building.city}, {building.provinc}
                     </p>
                  </div>
                  <div className="flex gap-3 justify-start items-center w-full">
                     <Tag text="Kantor" />
                     <Tag text="Meeting" />
                  </div>
                  <div className="flex justify-between items-center w-full">
                     <div className="flex gap-3">
                        <BuildingIcon />
                        <p>{building.name}</p>
                     </div>{" "}
                     <p>{building.accommodate} persons</p>
                  </div>

                  <h2>
                     <span className="font-bold text-2xl text-primary">IDR {formatPrice(building.price)}</span>/month
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
                     />

                     <label className="paragraph !font-bold">Tanggal Berakhir</label>
                     <input
                        onChange={(e) => setDate2(e.target.value)}
                        type="date"
                        className="w-full border-2 border-gray-300 rounded-full text-gray-600 h-16 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                        placeholder="Regular input"
                     />

                     <p className="paragraph !font-bold">Total Harga</p>
                     <h2 className="heading-1 text-primary">IDR {formatPrice(totalPrice)}</h2>
                     <button
                        className="rounded-full border-2 py-3 px-10 font-semibold bg-primary text-white hover:bg-[#bf3a37] cursor-pointer transition duration-500 ease-in-out"
                        onClick={handleBooking}
                     >
                        Book Now
                     </button>
                  </div>
               </div>
               <div className="w-full h-full">
                  <img src="/image-11.png" alt="Case" className="w-auto h-full object-cover rounded-md rounded-e-2xl" />
               </div>
            </div>
         </Container>

         <ToastContainer />
      </>
   );
};

export default Booking;
