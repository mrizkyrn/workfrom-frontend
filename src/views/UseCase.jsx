import Container from "../components/Container";
import UseCaseCard from "../components/UseCaseCard";

const UseCase = () => {
   return (
      <>
         <Container>
            <div className="flex justify-between items-center mt-10">
               <h1 className="heading-1">Use Case</h1>
               <p>
                  Home &gt; <span>Use Case</span>
               </p>
            </div>
         </Container>

         <Container>
            <div className="flex justify-center items-center w-full mt-10 gap-5">
               <div className="flex justify-start items-center w-full">
                  <div className="relative inline-flex">
                     <svg
                        className="w-2 h-2 absolute top-3 right-0 m-4 pointer-events-none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 412 232"
                     >
                        <path d="M412 0L206 232 0 0h412z" fill="currentColor" fillRule="evenodd" />
                     </svg>
                     <select
                        className="border-y-2 border-l-2 border-gray-300 rounded-s-full text-gray-600 h-16 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                        placeholder="Regular input"
                     >
                        <option>Without options</option>
                        <option>Without options</option>
                     </select>
                  </div>

                  <input
                     type="text"
                     className="w-full border-y-2 border-r-0 border-l border-gray-300 text-gray-600 h-16 pl-5 pr-10 bg-white focus:outline-none appearance-none"
                     placeholder="Regular input"
                  />
                  <button className="border-y-2 border-r-2 border-l-0 border-gray-300 rounded-e-full h-16 px-5">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                     </svg>
                  </button>
               </div>

               <div className="relative inline-flex">
                  <svg
                     className="w-2 h-2 absolute top-3 right-0 m-4 pointer-events-none"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 412 232"
                  >
                     <path d="M412 0L206 232 0 0h412z" fill="currentColor" fillRule="evenodd" />
                  </svg>
                  <select
                     className="border-2 border-gray-300 rounded-full text-gray-600 h-16 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                     placeholder="Regular input"
                  >
                     <option>Without options</option>
                     <option>Without options</option>
                  </select>
               </div>

               <div className="relative inline-flex">
                  <svg
                     className="w-2 h-2 absolute top-3 right-0 m-4 pointer-events-none"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 412 232"
                  >
                     <path d="M412 0L206 232 0 0h412z" fill="currentColor" fillRule="evenodd" />
                  </svg>
                  <select
                     className="border-2 border-gray-300 rounded-full text-gray-600 h-16 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                     placeholder="Regular input"
                  >
                     <option>Without options</option>
                     <option>Without options</option>
                  </select>
               </div>
            </div>
         </Container>

         <Container>
            <div className="flex justify-center items-center gap-10 flex-wrap w-full mt-16 mb-44">
               <UseCaseCard />
               <UseCaseCard />
               <UseCaseCard />
               <UseCaseCard />
               <UseCaseCard />
               <UseCaseCard />
            </div>
         </Container>
      </>
   );
};

export default UseCase;
