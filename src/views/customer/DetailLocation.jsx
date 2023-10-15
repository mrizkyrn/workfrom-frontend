/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom";
import Container from "../../components/Container";
import PriceCard from "../../components/cards/PriceCard";
import { useStateContext } from "../../contexts/ContextProvider";
import { useEffect, useState } from "react";

const DetailLocation = () => {
   const { userToken } = useStateContext();
   const { id } = useParams();
   const [data, setData] = useState({});
   const navigate = useNavigate();

   useEffect(() => {
      if (!userToken) {
         navigate("/login");
      } else {
         fetch(`http://localhost:8000/customers/showcustid/${id}/?api_token=${userToken}`)
            .then((res) => res.json())
            .then((data) => {
               setData(data);
            })
            .catch((err) => {
               console.log(err);
            });
      }
   }, []);

   const handleClick = () => {
      navigate(`booking`, { state: data });
   };

   return (
      <>
         <Container>
            <div className="flex justify-end items-center mt-10">
               <p>
                  Home &gt; Location &gt; <span className="text-primary">Clapham</span>
               </p>
            </div>
         </Container>

         <Container>
            <div className="flex flex-col justify-center items-center gap-8 mt-32">
               <h1 className="heading-1 text-dark1 !text-center">
                  Clapham <br />
                  Co-Working & Event Space
               </h1>
               <p className="paragraph !text-center">
                  Established from the lack of infrastructure that supports entrepreneurial and creative communities in
                  Medan. Founded in 2015, Clapham Coworking & Event Space paid tribute to the Clapham Sect who was
                  instrumental in eradicating modern slavery in England. Clapham Collective is determined to become a
                  place where world and history changers can break free from the traditional working setting. We seek to
                  empower local business and creative communities to fulfill their true potential.
               </p>
               <button
                  onClick={handleClick}
                  className="rounded-full border-2 border-primary py-3 px-10 font-semibold bg-primary text-white hover:bg-white hover:text-primary cursor-pointer transition duration-500 ease-in-out"
               >
                  Book Now
               </button>
            </div>
         </Container>

         <Container>
            <div className="flex justify-between gap-28 mt-44">
               <div className="basis-1/2">
                  <p className="paragraph mb-1">HARGA</p>
                  <h1 className="special-heading mb-3 !text-3xl">Paket Harga Terjangkau</h1>
                  <p className="paragraph">Kami memberikan beberapa pilihan harga terbaik sesuai kebutuhan Anda.</p>
               </div>
               <div className="basis-full flex flex-col justify-center items-center px-10 border-2 rounded-2xl">
                  <PriceCard />
                  <PriceCard />
                  <PriceCard />
                  <PriceCard />
                  <PriceCard />
               </div>
            </div>
         </Container>
      </>
   );
};

export default DetailLocation;
