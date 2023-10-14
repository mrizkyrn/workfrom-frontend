/* eslint-disable react-hooks/exhaustive-deps */
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import Container from "../components/Container";
import Tag from "../components/Tag";
import { BuildingIcon } from "../icons/icons";
import { useEffect, useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import formatPrice from "../helpers/formatPrice";

const DetailUseCase = () => {
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
   }

   return (
      <>
         <Container>
            <div className="flex justify-end items-center mt-10">
               <p>
                  Home &gt; Use Case &gt; <span className="text-primary">Clapham</span>
               </p>
            </div>
         </Container>

         <Container>
            <div className="flex justify-center items-center gap-20 mt-16">
               <div className="basis-full">
                  <img src="/image-10.png" alt="Landing Image" className="w-full" />
               </div>
               <div className="basis-2/3 flex flex-col justify-center items-start gap-5">
                  <div className="flex flex-col justify-start items-start w-full">
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
                     <p>{data.accomodate} persons</p>
                  </div>

                  <h2>
                     <span className="font-bold text-2xl text-primary">IDR {formatPrice(data.price)}</span>/year
                  </h2>

                  <button onClick={handleClick} className="w-full rounded-full border-2 border-primary py-3 px-6 font-semibold bg-primary text-white hover:bg-white hover:text-primary cursor-pointer transition duration-500 ease-in-out">
                     Book Now
                  </button>
               </div>
            </div>
         </Container>

         <Container>
            <div className="flex justify-center items-center gap-16 font-semibold text-dark2 mt-24 mb-10">
               <NavLink to="." end className={({ isActive }) => (isActive ? "text-primary font-bold" : "text-dark2")}>
                  Gambar
               </NavLink>
               <NavLink
                  to="facility"
                  className={({ isActive }) => (isActive ? "text-primary font-bold" : "text-dark2")}
               >
                  Fasilitas
               </NavLink>
               <NavLink to="review" className={({ isActive }) => (isActive ? "text-primary font-bold" : "text-dark2")}>
                  Review
               </NavLink>
               <NavLink
                  to="location"
                  className={({ isActive }) => (isActive ? "text-primary font-bold" : "text-dark2")}
               >
                  Lokasi
               </NavLink>
            </div>
         </Container>

         <Container>
            <div className="min-h-[500px]">
               <Outlet context={data} />
            </div>
         </Container>
      </>
   );
};

export default DetailUseCase;
