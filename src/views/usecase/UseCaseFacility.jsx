import { FacilityIcon } from "../../icons/icons"

const UseCaseFacility = () => {
  return (
    <div className="grid grid-cols-4 gap-6">
      <div className="flex flex-col justify-between items-center h-52 w-64 shadow-lg py-10 px-5 text-center">
         <FacilityIcon />
         <p className="paragraph">High Speed Internet</p>
      </div>
      <div className="flex flex-col justify-between items-center h-52 w-64 shadow-lg py-10 px-5 text-center">
         <FacilityIcon />
         <p className="paragraph">Events & Meeting Rooms</p>
      </div>
      <div className="flex flex-col justify-between items-center h-52 w-64 shadow-lg py-10 px-5 text-center">
         <FacilityIcon />
         <p className="paragraph">Mails & Packaging Handling</p>
      </div>
      <div className="flex flex-col justify-between items-center h-52 w-64 shadow-lg py-10 px-5 text-center">
         <FacilityIcon />
         <p className="paragraph">Front Desk Service</p>
      </div>
      <div className="flex flex-col justify-between items-center h-52 w-64 shadow-lg py-10 px-5 text-center">
         <FacilityIcon />
         <p className="paragraph">Printing Service</p>
      </div>
      <div className="flex flex-col justify-between items-center h-52 w-64 shadow-lg py-10 px-5 text-center">
         <FacilityIcon />
         <p className="paragraph">Access to Common Area</p>
      </div>
      <div className="flex flex-col justify-between items-center h-52 w-64 shadow-lg py-10 px-5 text-center">
         <FacilityIcon />
         <p className="paragraph">Walk-in Pantries</p>
      </div>
      <div className="flex flex-col justify-between items-center h-52 w-64 shadow-lg py-10 px-5 text-center">
         <FacilityIcon />
         <p className="paragraph">Mineral Water, Tea</p>
      </div>
    </div>
  )
}

export default UseCaseFacility