const PriceCard = () => {
   return (
      <div className="flex justify-between items-center gap-5 border-b-2 py-8">
         <h1 className="text-lg font-bold">PRIVATE OFFICE</h1>
         <p className="paragraph">Private and secure offices for teams of any size.</p>
         <div>
            <p className="paragraph !text-sm">Starts from</p>
            <h1 className="text-lg font-bold">IDR 5.000.000</h1>
            <p className="paragraph !text-sm">/month</p>
         </div>
      </div>
   );
};

export default PriceCard;
