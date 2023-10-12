import { useState } from "react";
import Container from "../components/Container";
import SpaceCard from "../components/cards/SpaceCard";
import { useLoaderData } from "react-router-dom";
import { ArrowBotIcon, SearchIcon } from "../icons/icons";

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
   const res = await fetch("http://localhost:8000/all");
   if (!res.ok) {
      throw new Error("Something went wrong");
   }
   const buildings = await res.json();
   return buildings;
}

const Location = () => {
   const buildings = useLoaderData();
   const [location, setLocation] = useState("");
   const [keyword, setKeyword] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(location, keyword);
   };

   return (
      <>
         <Container>
            <div className="flex justify-between items-center mt-10">
               <h1 className="heading-1">Location</h1>
               <p>
                  Home &gt; <span className="text-primary">Location</span>
               </p>
            </div>
         </Container>

         <Container>
            <div className="flex justify-center items-center w-full mt-10">
               <div className="relative inline-flex">
                  <ArrowBotIcon />
                  <select
                     onChange={(e) => setLocation(e.target.value)}
                     className="w-40 border-y-2 border-l-2 border-gray-300 rounded-s-full text-gray-600 h-16 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                     placeholder="Regular input"
                  >
                     <option value="" disabled selected>
                        Location
                     </option>
                     <option value="Jakarta">Jakarta</option>
                     <option value="Bandung">Bandung</option>
                     <option value="Surabaya">Medan</option>
                  </select>
               </div>

               <input
                  onChange={(e) => setKeyword(e.target.value)}
                  type="text"
                  className="border-y-2 border-r-0 border-l border-gray-300 text-gray-600 h-16 w-1/2 pl-5 pr-10 bg-white focus:outline-none appearance-none"
                  placeholder="Regular input"
               />
               <button
                  onClick={handleSubmit}
                  className="border-y-2 border-r-2 border-l-0 border-gray-300 rounded-e-full h-16 px-5"
               >
                  <SearchIcon />
               </button>
            </div>
         </Container>

         <Container>
            <div className="flex justify-center items-center gap-10 flex-wrap w-full mt-16 mb-44">
               {buildings.map((building) => (
                  <SpaceCard
                     key={building.user_id}
                     id={building.user_id}
                     title={building.name}
                     location={building.location}
                     address={building.category}
                  />
               ))}
            </div>
         </Container>
      </>
   );
};

export default Location;
