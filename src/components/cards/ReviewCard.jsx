import { StarIcon } from "../../icons/icons";

const ReviewCard = () => {
   return (
      <div className="flex flex-col justify-between items-start h-[350px] w-[350px] p-8 border-2 border-gray-300 rounded-2xl">
         <div className="flex text-yellow-500 gap-2">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
         </div>
         <p className="paragraph">
            Comfy, Cozy, and Clean co working space, With helpful and friendly staff. Surrounded by nice restaurants ,
            and Free Nice Coffee to start my day. PARFAIT!!!
         </p>
         <div>
            <p className="text-2xl font-bold">John Carter</p>
            <p className="paragraph">CEO of Apple</p>
         </div>
      </div>
   );
};

export default ReviewCard;
