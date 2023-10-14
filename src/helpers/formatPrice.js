export default function formatPrice(price) {
   if (price === undefined) {
      return;
   }
   const reverse = price.toString().split("").reverse().join("");
   const ribuan = reverse.match(/\d{1,3}/g);
   const result = ribuan.join(".").split("").reverse().join("");
   return result;
}
