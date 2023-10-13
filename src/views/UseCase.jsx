import { useLoaderData } from "react-router-dom";
import Container from "../components/Container";
import UseCaseCard from "../components/cards/UseCaseCard";
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

const UseCase = () => {
   const buildings = useLoaderData();

   return (
      <>
         <Container>
            <div className="flex justify-between items-center mt-10">
               <h1 className="heading-1">Use Case</h1>
               <p>
                  Home &gt; <span className="text-primary">Use Case</span>
               </p>
            </div>
         </Container>

         <Container>
            <div className="flex justify-center items-center w-full mt-10 gap-5">
               <div className="flex justify-start items-center w-full">
                  <div className="relative inline-flex">
                     <ArrowBotIcon />
                     <select
                        className="border-y-2 border-l-2 border-gray-300 rounded-s-full text-gray-600 h-16 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                        placeholder="Regular input"
                        defaultValue=""
                     >
                        <option value="" disabled>
                           Use Case
                        </option>
                        <option>Event</option>
                        <option>Meeting</option>
                        <option>Photo Shoot</option>
                        <option>Video Shoot</option>
                     </select>
                  </div>

                  <input
                     type="text"
                     className="w-full border-y-2 border-r-0 border-l border-gray-300 text-gray-600 h-16 pl-5 pr-10 bg-white focus:outline-none appearance-none"
                     placeholder="Regular input"
                  />
                  <button className="border-y-2 border-r-2 border-l-0 border-gray-300 rounded-e-full h-16 px-5">
                     <SearchIcon />
                  </button>
               </div>

               <div className="relative inline-flex">
                  <ArrowBotIcon />

                  <select
                     className="border-2 border-gray-300 rounded-full text-gray-600 h-16 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                     placeholder="Regular input"
                     defaultValue=""
                  >
                     <option value="" disabled>
                        Capacity
                     </option>
                     <option>Without options</option>
                     <option>Without options</option>
                  </select>
               </div>

               <div className="relative inline-flex">
                  <ArrowBotIcon />

                  <select
                     className="border-2 border-gray-300 rounded-full text-gray-600 h-16 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                     placeholder="Regular input"
                     defaultValue=""
                  >
                     <option value="" disabled>
                        Price
                     </option>
                     <option>Without options</option>
                     <option>Without options</option>
                  </select>
               </div>
            </div>
         </Container>

         <Container>
            <div className="flex justify-center items-center gap-10 flex-wrap w-full mt-16 mb-44">
               {buildings.map((building) => (
                  <UseCaseCard
                     key={building.user_id}
                     id={building.user_id}
                     category={building.category}
                     name={building.name}
                     accommodate={building.accommodate}
                     price={building.price}
                     location={building.location}
                  />
               ))}
            </div>
         </Container>
      </>
   );
};

export default UseCase;
