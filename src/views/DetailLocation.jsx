import { Link } from "react-router-dom";
import Button from "../components/Button";
import Container from "../components/Container";
import PriceCard from "../components/cards/PriceCard";
// import { useEffect, useState } from "react";
// import { useStateContext } from "../contexts/ContextProvider";

const DetailLocation = () => {
   // const { userToken } = useStateContext();
   // const { id } = useParams();
   // const navigate = useNavigate();
   // const [data, setData] = useState({});

   // useEffect(() => {
   //    if (!userToken) {
   //       navigate("/login");
   //    } else {
   //       fetch(`http://localhost:8000/buildings/show/${id}?api_token=${userToken}`)
   //          .then((res) => res.json())
   //          .then((data) => {
   //             setData(data.data);
   //          })
   //          .catch((err) => {
   //             console.log(err);
   //          });
   //    }
   // }, []);

   // if (data) {
   //    console.log(data);
   // }

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
               <Link to={"booking"}>
                  <Button text="Book Now" type={1} />
               </Link>
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
