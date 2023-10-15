/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import Container from "../../components/Container";
import OrderCard from "../../components/cards/OrderCard";
import { SearchIcon } from "../../icons/icons";

const MyOrder = () => {
   const { userToken } = useStateContext();
   const [orders, setOrders] = useState([]);

   useEffect(() => {
      fetch(`http://localhost:8000/orders/allorders?api_token=${userToken}`)
         .then((res) => res.json())
         .then((data) => {
            if (data.message === "Success") {
               setOrders(data.data);
            }
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);

   console.log(orders);

   return (
      <>
         <Container>
            <div className="flex justify-between items-center mt-10">
               <h1 className="heading-1">Location</h1>
               <p>
                  Home &gt; <span className="text-primary">Pesanan Saya</span>
               </p>
            </div>
         </Container>

         <Container>
            <div className="w-full flex justify-end mt-10">
               <div className="flex justify-start items-center h-12 w-80 border-2 border-primary rounded-full px-5">
                  <SearchIcon className="w-5 h-5 text-primary" />
                  <input type="text" className="pl-3" placeholder="Regular input" />
               </div>
            </div>

            <div className="flex flex-col w-full gap-5 mt-12">
               {orders.length > 0 ? (
                  orders.map((order, i) => (
                     <OrderCard
                        key={i}
                        category={order.category}
                        name={order.name}
                        accommodate={order.accommodate}
                        city={order.city}
                        province={order.provinc}
                     />
                  ))
               ) : (
                  <div className="flex flex-col justify-center items-center">
                     <img src="/vector-1.svg" alt="Vector" className="w-1/3 mt-10" />
                     <p className="paragraph text-center">
                        Belum ada properti yang anda pesan. <br /> Silahkan pesan properti.
                     </p>
                  </div>
               )}
            </div>
         </Container>
      </>
   );
};

export default MyOrder;
