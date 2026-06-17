// import { addProduct } from "../prisma-db";

// async function createProduct(formdata: FormData) {
//   "use server";

//   const title = formdata.get("title") as string;
//   const price = Number(formdata.get("price"));
//   const description = formdata.get("description") as string;

//   await addProduct(title, price, description);
// }

// export default function ProductForm() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form
//         action={createProduct}
//         className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-4"
//       >
//         <h2 className="text-2xl font-bold text-center">Add Product</h2>

//         <input
//           type="text"
//           name="title"
//           placeholder="Product title"
//           className="w-full border px-4 py-2 rounded-lg"
//         />

//         <input
//           type="number"
//           name="price"
//           placeholder="Price"
//           className="w-full border px-4 py-2 rounded-lg"
//         />

//         <textarea
//           name="description"
//           placeholder="Description"
//           className="w-full border px-4 py-2 rounded-lg"
//         />

//         <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }