import { Link } from "react-router-dom";
import Button from "../components/Button";
import Container from "../components/Container";
import Tag from "../components/Tag";
import { BuildingIcon } from "../icons/icons";

const DetailUseCase = () => {
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

                  <Link to={"booking"} className="w-full">
                     <Button text="Book Now" type={1} classname="text-center" />
                  </Link>
               </div>
            </div>
         </Container>
      </>
   );
};

export default DetailUseCase;
