import Container from "../components/Container";
import { SearchIcon } from "../icons/icons";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import PropertyCard from "../components/cards/PropertyCard";
import { useStateContext } from "../contexts/ContextProvider";
import { useEffect, useState } from "react";

const OwnerDashboard = () => {
   const [buildings, setBuildings] = useState(null);

   const { userToken } = useStateContext();

   useEffect(() => {
      fetch(`http://localhost:8000/buildings/allbuild?api_token=${userToken}`, {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
         },
      })
         .then((res) => res.json())
         .then((data) => {
            setBuildings(data);
         })
         .catch((err) => {
            console.log(err);
         });
   }, [userToken, buildings]);


   return (
      <>
         <Container>
            <h1 className="heading-1 text-dark1 mt-12">Selamat Datang, Owner!</h1>

            <div className="flex justify-between items-center w-full mt-12">
               <h2 className="special-heading">Properti Saya</h2>
               <div className="flex gap-5">
                  <div className="flex justify-start items-center h-12 w-60 border-2 border-primary rounded-full px-5">
                     <SearchIcon className="w-5 h-5 text-primary" />
                     <input type="text" className="pl-3" placeholder="Regular input" />
                  </div>
                  <Link to={"add-property"}>
                     <Button text="Tambah Properti" type={1} />
                  </Link>
               </div>
            </div>

            {buildings ? (
               <div className="flex justify-center items-center gap-10 flex-wrap w-full mt-16 mb-44">
                  {buildings.map((building) => (
                     <PropertyCard
                        key={building.user_id}
                        id={building.user_id}
                        name={building.name}
                        accommodate={building.accommodate}
                        price={building.price}
                        location={building.location}
                     />
                  ))}
               </div>
            ) : (
               <div className="flex flex-col justify-center items-center mt-16">
                  <img src="/vector-1.svg" alt="Vector" className="w-1/3 mt-10" />
                  <p className="paragraph text-center">
                     Anda belum memiliki properti. <br /> Silahkan tambahkan properti anda.
                  </p>
               </div>
            )}
         </Container>
      </>
   );
};

export default OwnerDashboard;
