import Button from "../components/Button";
import Container from "../components/Container";
import SlideShow from "../components/SlideShow";
import SpaceCard from "../components/SpaceCard";
import UseCaseCard from "../components/CaseCard";

const Landing = () => {
   return (
      <>
         <Container>
            <div className="flex justify-center items-center gap-10 mt-16">
               <div className="basis-full flex flex-col justify-center items-start gap-8">
                  <h1 className="heading-1 text-dark1">Temukan Ruangan Untuk Setiap Pekerjaan</h1>
                  <p className="paragraph">
                     Dengan berbagai pilihan ruangan yang dapat disesuaikan dengan kebutuhan Anda, kami akan membantu
                     anda mencari ruangan kerja yang sesuai dengan anggaran dan kebutuhan Anda. Temukan ruangan kerja
                     Anda sekarang dan tingkatkan produktivitas kerja Anda!
                  </p>
                  <Button text="Book Now" type={1} />
               </div>
               <div className="basis-2/3">
                  <img src="/vite.svg" alt="Landing Image" className="w-full h-auto" />
               </div>
            </div>
         </Container>

         <Container>
            <div className="flex flex-col justify-center items-center gap-16 mt-44">
               <div className="flex flex-col justify-center items-center gap-8 max-w-4xl">
                  <h1 className="heading-1 text-dark1">Layanan Kami</h1>
                  <p className="paragraph text-center">
                     Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu egestas morbi sem vulputate etiam
                     facilisis pellentesque ut quis.
                  </p>
                  <div className="flex gap-5">
                     <Button text="As Customer" type={1} />
                     <Button text="As Owner Building" type={2} />
                  </div>
               </div>
               <div className="flex justify-center items-center gap-20 w-full">
                  <div className="w-1/2">
                     <SlideShow />
                  </div>
                  <div className="basis-full flex flex-col justify-center items-start gap-5">
                     <h1 className="heading-2 text-primary">Space Terbaik untuk Semua Tim dan Pekerjaan Anda</h1>
                     <p className="paragraph">
                        Dengan berbagai pilihan ruangan yang dapat disesuaikan dengan kebutuhan Anda, kami akan membantu
                        anda mencari ruangan kerja yang sesuai dengan anggaran dan kebutuhan Anda. Temukan ruangan kerja
                        Anda sekarang dan tingkatkan produktivitas kerja Anda!
                     </p>
                     <Button text="Book Now" type={2} />
                  </div>
               </div>
            </div>
         </Container>

         <Container>
            <div className="flex flex-col justify-center items-center gap-8 mt-44">
               <h1 className="heading-1 text-dark1">Partner Kami</h1>
               <div className="flex justify-between items-center gap-24 opacity-50">
                  <img src="https://workfrom.id/wp-content/uploads/2023/06/image-9.png" alt="Partner 1" />
                  <img src="https://workfrom.id/wp-content/uploads/2023/06/image-10.png" alt="Partner 2" />
                  <img src="https://workfrom.id/wp-content/uploads/2023/06/image-11.png" alt="Partner 3" />
                  <img src="https://workfrom.id/wp-content/uploads/2023/06/image-12.png" alt="Partner 4" />
               </div>
            </div>
         </Container>

         <Container>
            <div className="flex flex-col justify-center items-center gap-8 mt-44">
               <div className="flex flex-col justify-center items-center gap-3">
                  <h1 className="heading-1 text-dark1">Sesuaikan dengan Kebutuhan</h1>
                  <p className="paragraph w-2/3 text-center ">
                     Rayakan perayaan dan acara terbaik dengan tempat pilihan terbaik dan akses lebih mudah.
                  </p>
               </div>
               <div className="grid grid-cols-2 gap-10">
                  <UseCaseCard
                     title="Event"
                     description="Rayakan perayaan dan acara terbaik dengan tempat pilihan terbaik dan akses lebih mudah."
                  />
                  <UseCaseCard
                     title="Meeting"
                     description="Rayakan perayaan dan acara terbaik dengan tempat pilihan terbaik dan akses lebih mudah."
                  />
                  <UseCaseCard
                     title="Office"
                     description="Rayakan perayaan dan acara terbaik dengan tempat pilihan terbaik dan akses lebih mudah."
                  />
                  <UseCaseCard
                     title="Cafe"
                     description="Rayakan perayaan dan acara terbaik dengan tempat pilihan terbaik dan akses lebih mudah."
                  />
               </div>
            </div>
         </Container>

         <Container>
            <div className="flex flex-col justify-center items-center gap-8 mt-44 mb-44">
               <div className="flex flex-col justify-center items-center gap-3">
                  <h1 className="heading-1 text-dark1">Pilih Space Terdekat</h1>
                  <p className="paragraph w-2/3 text-center ">
                     Rayakan perayaan dan acara terbaik dengan tempat pilihan terbaik dan akses lebih mudah.
                  </p>
               </div>
               <div className="flex justify-between items-center gap-5">
                  <SpaceCard
                     title="Space 1"
                     location="Jakarta Selata, DKI Jakarta"
                     address="Kawasan, Jl. Mega Kuningan Barat Jl. DR. Ide Anak Agung Gde Agung No.1, RT.5/RW.2, Kuningan, Kuningan Tim., Kecamatan Setiabudi, 12950"
                  />
                  <SpaceCard
                     title="Space 1"
                     location="Jakarta Selata, DKI Jakarta"
                     address="Kawasan, Jl. Mega Kuningan Barat Jl. DR. Ide Anak Agung Gde Agung No.1, RT.5/RW.2, Kuningan, Kuningan Tim., Kecamatan Setiabudi, 12950"
                  />
                  <SpaceCard
                     title="Space 1"
                     location="Jakarta Selata, DKI Jakarta"
                     address="Kawasan, Jl. Mega Kuningan Barat Jl. DR. Ide Anak Agung Gde Agung No.1, RT.5/RW.2, Kuningan, Kuningan Tim., Kecamatan Setiabudi, 12950"
                  />
               </div>
            </div>
         </Container>
      </>
   );
};

export default Landing;
