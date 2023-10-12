import Container from "../components/Container";

const AddProperty = () => {
   return (
      <>
         <Container>
            <div className="flex justify-between items-center mt-10">
               <h1 className="heading-1">Tambah Properti</h1>
               <p>
                  Home &gt; <span className="text-primary">Tambah Properti</span>
               </p>
            </div>
         </Container>
      </>
   );
};

export default AddProperty;
