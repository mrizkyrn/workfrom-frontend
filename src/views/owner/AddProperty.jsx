import { useState } from "react";
import Container from "../../components/Container";
import { ArrowBotIcon } from "../../icons/icons";
import { useStateContext } from "../../contexts/ContextProvider";
import showToastify from "../../helpers/showToastify";
import { ToastContainer } from "react-toastify";

const AddProperty = () => {
   const { userToken } = useStateContext();

   const [name, setName] = useState("");
   const [facility, setFacility] = useState("");
   const [location, setLocation] = useState("");
   const [city, setCity] = useState("");
   const [province, setProvince] = useState("");
   const [capacity, setCapacity] = useState("");
   const [description, setDescription] = useState("");
   const [price, setPrice] = useState("");
   const [useCase, setUseCase] = useState("");
   const size = "100 x 100";

   const resetForm = () => {
      document.getElementById("add-property-form").reset();
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      fetch(`http://localhost:8000/buildings/addbuild?api_token=${userToken}`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            name: name,
            facility: facility,
            location: location,
            city: city,
            provinc: province,
            size: size,
            accommodate: capacity,
            description: description,
            price: price,
            category: useCase,
         }),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            if (data.message === "success") {
               console.log("success");
               showToastify("success", "Properti berhasi ditambahkan");
               resetForm();
            } else {
               showToastify("error", "Properti gagal ditambahkan");
            }
         })
         .catch((err) => {
            console.log(err);
         });
   };

   return (
      <>
         <ToastContainer />

         <Container>
            <div className="flex justify-between items-center mt-10">
               <h1 className="heading-1">Tambah Properti</h1>
               <p>
                  Home &gt; <span className="text-primary">Tambah Properti</span>
               </p>
            </div>
         </Container>

         <Container>
            <form
               className="flex flex-col justify-between items-end gap-10 mt-12"
               id="add-property-form"
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
                           id="city"
                           name="city"
                           className="w-full border-2 border-gray-300 rounded-full text-gray-600 h-16 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                           defaultValue=""
                        >
                           <option value="" disabled>
                              Pilih Kota
                           </option>
                           <option value="Jakarta Pusat">Jakarta Pusat</option>
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
                           id="province"
                           name="province"
                           className="w-full border-2 border-gray-300 rounded-full text-gray-600 h-16 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                           defaultValue=""
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
                              checked={useCase === "Event"}
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
                              checked={useCase === "Meeting"}
                           />
                           <label htmlFor="meeting" className="text-xl text-dark1">
                              Meeting
                           </label>
                        </div>
                        <div>
                           <input
                              type="radio"
                              name="usecase"
                              id="photoshoot"
                              value="Photo Shoot"
                              className="mr-3"
                              onChange={(e) => setUseCase(e.target.value)}
                              checked={useCase === "Photo Shoot"}
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
                              checked={useCase === "Video Shoot"}
                           />
                           <label htmlFor="videoshoot" className="text-xl text-dark1">
                              Video Shoot
                           </label>
                        </div>
                     </div>
                  </div>

                  <div className="w-full flex justify-between items-start gap-8">
                     <div className="flex flex-col justify-start items-start w-full gap-5">
                        <label htmlFor="properti" className="text-lg font-bold tracking-wider text-primary">
                           NAMA PROPERTI
                        </label>
                        <input
                           onChange={(e) => setName(e.target.value)}
                           type="text"
                           name="properti"
                           id="properti"
                           className="w-full border-2 border-gray-300 rounded-full text-gray-600 h-16 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                        />

                        <label htmlFor="location" className="text-lg font-bold tracking-wider text-primary">
                           LOKASI
                        </label>
                        <textarea
                           onChange={(e) => setLocation(e.target.value)}
                           name="location"
                           id="location"
                           className="w-full border-2 border-gray-300 rounded-3xl text-gray-600 h-40 p-5 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                        ></textarea>

                        <label htmlFor="price" className="text-lg font-bold tracking-wider text-primary">
                           HARGA
                        </label>
                        <input
                           onChange={(e) => setPrice(e.target.value)}
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
                           name="description"
                           id="description"
                           className="w-full border-2 border-gray-300 rounded-3xl text-gray-600 h-40 p-5 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                        ></textarea>

                        <label htmlFor="facility" className="text-lg font-bold tracking-wider text-primary">
                           FASILITAS
                        </label>
                        <input
                           onChange={(e) => setFacility(e.target.value)}
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
                  value="Tambah Properti"
                  className="bg-primary text-white rounded-full py-5 px-10 mt-10 cursor-pointer hover:bg-white hover:text-primary hover:border-primary border-2 border-primary transition duration-300 ease-in-out"
               />
            </form>
         </Container>
      </>
   );
};

export default AddProperty;
