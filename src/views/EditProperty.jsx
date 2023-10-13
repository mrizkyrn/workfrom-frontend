import { useEffect, useState } from "react";
import Container from "../components/Container";
import { ArrowBotIcon } from "../icons/icons";
import { useStateContext } from "../contexts/ContextProvider";
import { useNavigate, useParams } from "react-router-dom";

const EditProperty = () => {
   const { userToken } = useStateContext();
   const { id } = useParams();
   const navigate = useNavigate();
   const [data, setData] = useState({});

   useEffect(() => {
      if (!userToken) {
         navigate("/login");
      } else {
         fetch(`http://localhost:8000/buildings/showbuild/${id}?api_token=${userToken}`)
            .then((res) => res.json())
            .then((data) => {
               console.log(data);
               setData(data);
            })
            .catch((err) => {
               console.log(err);
            });
      }
   }, []);

   const [name, setName] = useState("");
   const [facility, setFacility] = useState("");
   const [location, setLocation] = useState("");
   const [city, setCity] = useState("");
   const [province, setProvince] = useState("");
   const [capacity, setCapacity] = useState("");
   const [description, setDescription] = useState("");
   const [price, setPrice] = useState("");
   const [useCase, setUseCase] = useState("");
   const size = "";

   const handleSubmit = (e) => {
      e.preventDefault();
      const payload = {
         name: name,
         facility: facility,
         location: location,
         city: city,
         province: province,
         accommodate: capacity,
         description: description,
         price: price,
         category: useCase,
         size: size,
      };

      fetch(`http://localhost:8000//buildings/updatebuild/${id}?api_token=${userToken}`, {
         method: "PUT",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(payload),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
         })
         .catch((err) => {
            console.log(err);
         });
   };

   return (
      <>
         <Container>
            <div className="flex justify-between items-center mt-10">
               <h1 className="heading-1">Edit Properti</h1>
               <p>
                  Home &gt; <span className="text-primary">Edit Properti</span>
               </p>
            </div>
         </Container>

         <Container>
            <form
               className="flex flex-col justify-between items-end gap-10 mt-12"
               method="POST"
               onSubmit={handleSubmit}
            >
               <div className="flex justify-between items-start gap-10 w-full">
                  <div className="basis-1/4 flex flex-col gap-5">
                     <label htmlFor="city" className="text-lg font-bold tracking-wider text-primary">
                        KOTA
                     </label>
                     <div className="relative w-full">
                        <ArrowBotIcon />

                        <select
                           onChange={(e) => setCity(e.target.value)}
                           defaultValue={data.city}
                           id="city"
                           name="city"
                           className="w-full border-2 border-gray-300 rounded-full text-gray-600 h-16 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                        >
                           <option value="" disabled>
                              Pilih Kota
                           </option>
                           <option value="Jakarta Selatan">Jakarta Selatan</option>
                           <option value="Jakarta Utara">Jakarta Utara</option>
                           <option value="Jakarta Barat">Jakarta Barat</option>
                           <option value="Jakarta Timur">Jakarta Timur</option>
                           <option value="Bandung">Bandung</option>
                           <option value="Surabaya">Surabaya</option>
                           <option value="Medan">Medan</option>
                        </select>
                     </div>

                     <label htmlFor="province" className="text-lg font-bold tracking-wider text-primary">
                        PROVINSI
                     </label>
                     <div className="relative w-full">
                        <ArrowBotIcon />

                        <select
                           onChange={(e) => setProvince(e.target.value)}
                           defaultValue={data.province}
                           id="province"
                           name="province"
                           className="w-full border-2 border-gray-300 rounded-full text-gray-600 h-16 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                        >
                           <option value="" disabled>
                              Pilih Provinsi
                           </option>
                           <option value="DKI Jakarta">DKI Jakarta</option>
                           <option value="Sumatera Utara">Sumatera Utara</option>
                           <option value="Jawa Barat">Jawa Barat</option>
                           <option value="Jawa Timur">Jawa Timur</option>
                        </select>
                     </div>

                     <label className="text-lg font-bold tracking-wider text-primary">USE CASE</label>
                     <div className="flex flex-col gap-3">
                        <div>
                           <input
                              type="radio"
                              name="usecase"
                              id="event"
                              value="Event"
                              className="mr-3"
                              onChange={(e) => setUseCase(e.target.value)}
                              checked={data.category === "Event"}
                           />
                           <label htmlFor="event" className="text-xl text-dark1">
                              Event
                           </label>
                        </div>
                        <div>
                           <input
                              type="radio"
                              name="usecase"
                              id="meeting"
                              value="Meeting"
                              className="mr-3"
                              onChange={(e) => setUseCase(e.target.value)}
                              checked={data.category === "Meeting"}
                           />
                           <label htmlFor="meeting" className="text-xl text-dark1">
                              Meeting
                           </label>
                        </div>
                        <div>
                           <input
                              type="radio"
                              name="usecase"
                              id="Photo shoot"
                              value="photoshoot"
                              className="mr-3"
                              onChange={(e) => setUseCase(e.target.value)}
                              checked={data.category === "Photo Shoot"}
                           />
                           <label htmlFor="photoshoot" className="text-xl text-dark1">
                              Photo Shoot
                           </label>
                        </div>
                        <div>
                           <input
                              type="radio"
                              name="usecase"
                              id="videoshoot"
                              value="Video Shoot"
                              className="mr-3"
                              onChange={(e) => setUseCase(e.target.value)}
                              checked={data.category === "Video Shoot"}
                           />
                           <label htmlFor="videoshoot" className="text-xl text-dark1">
                              Video Shoot
                           </label>
                        </div>
                     </div>
                  </div>

                  <div className="w-full flex justify-between items-start gap-8">
                     <div className="flex flex-col justify-start items-start w-full gap-5">
                        <label htmlFor="name" className="text-lg font-bold tracking-wider text-primary">
                           NAMA PROPERTI
                        </label>
                        <input
                           onChange={(e) => setName(e.target.value)}
                           defaultValue={data.name}
                           type="text"
                           name="name"
                           id="name"
                           className="w-full border-2 border-gray-300 rounded-full text-gray-600 h-16 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                        />

                        <label htmlFor="location" className="text-lg font-bold tracking-wider text-primary">
                           LOKASI
                        </label>
                        <textarea
                           onChange={(e) => setLocation(e.target.value)}
                           defaultValue={data.location}
                           name="location"
                           id="location"
                           className="w-full border-2 border-gray-300 rounded-3xl text-gray-600 h-40 p-5 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                        ></textarea>

                        <label htmlFor="price" className="text-lg font-bold tracking-wider text-primary">
                           HARGA
                        </label>
                        <input
                           onChange={(e) => setPrice(e.target.value)}
                           defaultValue={data.price}
                           type="text"
                           name="price"
                           id="price"
                           className="w-full border-2 border-gray-300 rounded-full text-gray-600 h-16 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                        />
                     </div>
                     <div className="flex flex-col justify-start items-start w-full gap-5">
                        <label htmlFor="capacity" className="text-lg font-bold tracking-wider text-primary">
                           KAPASITAS
                        </label>
                        <input
                           onChange={(e) => setCapacity(e.target.value)}
                           defaultValue={data.accommodate}
                           type="text"
                           name="capacity"
                           id="capacity"
                           className="w-full border-2 border-gray-300 rounded-full text-gray-600 h-16 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                        />

                        <label htmlFor="description" className="text-lg font-bold tracking-wider text-primary">
                           DESKRIPSI
                        </label>
                        <textarea
                           onChange={(e) => setDescription(e.target.value)}
                           defaultValue={data.description}
                           name="description"
                           id="description"
                           className="w-full border-2 border-gray-300 rounded-3xl text-gray-600 h-40 p-5 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                        ></textarea>

                        <label htmlFor="facility" className="text-lg font-bold tracking-wider text-primary">
                           FASILITAS
                        </label>
                        <input
                           onChange={(e) => setFacility(e.target.value)}
                           defaultValue={data.facility}
                           type="text"
                           name="facility"
                           id="facility"
                           className="w-full border-2 border-gray-300 rounded-full text-gray-600 h-16 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                        />
                     </div>
                  </div>
               </div>
               <input
                  type="submit"
                  value="Edit Properti"
                  className="bg-primary text-white rounded-full py-5 px-10 mt-10"
               />
            </form>
         </Container>
      </>
   );
};

export default EditProperty;
