import { useLoaderData } from 'react-router-dom';
import Container from '../../components/Container';
import UseCaseCard from '../../components/cards/UseCaseCard';
import { ArrowBotIcon, SearchIcon } from '../../icons/icons';
import formatPrice from '../../helpers/formatPrice';
import dummyData from '../../utils/dummyData';

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
   try {
      const res = await fetch('http://localhost:8000/all');
      if (!res.ok) {
         throw new Error('Something went wrong');
      }
      const buildings = await res.json();
      return buildings;
   } catch (error) {
      console.log('failed to fetch data, use dummy data instead');
      return dummyData;
   }
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
                        aria-label="Use Case"
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
                  <button
                     className="border-y-2 border-r-2 border-l-0 border-gray-300 rounded-e-full h-16 px-5"
                     aria-label="search"
                  >
                     <SearchIcon />
                  </button>
               </div>

               <div className="relative inline-flex">
                  <ArrowBotIcon />

                  <select
                     className="w-52 border-2 border-gray-300 rounded-full text-gray-600 h-16 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                     placeholder="Regular input"
                     defaultValue=""
                     aria-label="Capacity"
                  >
                     <option value="" disabled>
                        Capacity
                     </option>
                     <option>1-10</option>
                     <option>10-20</option>
                     <option>20-30</option>
                     <option>30-40</option>
                     <option>40-50</option>
                     <option>&gt;50</option>
                  </select>
               </div>

               <div className="relative inline-flex">
                  <ArrowBotIcon />

                  <select
                     className="w-52 border-2 border-gray-300 rounded-full text-gray-600 h-16 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                     placeholder="Regular input"
                     defaultValue=""
                     aria-label="Price"
                  >
                     <option value="" disabled>
                        Price
                     </option>
                     <option>&lt; Rp. 1.000.000</option>
                     <option>Rp. 1.000.000 - Rp. 2.000.000</option>
                     <option>Rp. 2.000.000 - Rp. 3.000.000</option>
                     <option>Rp. 3.000.000 - Rp. 4.000.000</option>
                     <option>Rp. 4.000.000 - Rp. 5.000.000</option>
                     <option>&gt; Rp. 5.000.000</option>
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
                     price={formatPrice(building.price)}
                     location={building.location}
                  />
               ))}
            </div>
         </Container>
      </>
   );
};

export default UseCase;
