import { toast } from "react-toastify";

export default function showToastify(type, message) {
   switch (type) {
      case "success":
         toast.success(message, {
            theme: "colored",
         });
         break;
      case "error":
         toast.error(message, {
            theme: "colored",
         });
         break;
      case "warning":
         toast.warning(message, {
            theme: "colored",
         });
         break;
      default:
         toast.info(message, {
            theme: "colored",
         });
         break;
   }
}
