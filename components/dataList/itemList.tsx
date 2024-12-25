// "use client"
// import React, { useEffect } from "react"
// import { Separator } from "../ui/separator"
// import { useRouter } from "next/navigation"

// type Item = {
// 	id: string
// 	name: string
// 	description: string
// 	price: number
// }

// const ItemList = ({ id }: { id: string }) => {
// 	const route = useRouter()
// 	const fetchData = async () => {
// 		const res = await fetch("https://dns-back.onrender.com/items", {
// 			method: "POST",
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 			body: JSON.stringify({ id }),
// 		})
// 		const data = await res.json()
// 		return data
// 	}

// 	const [data, setData] = React.useState([])

// 	useEffect(() => {
// 		console.log(id)
// 		fetchData().then((data) => setData(data))
// 	}, [])

// 	return (
// 		<div className="min-h-screen w-full bg-[url('/asdf.jpg')] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center">
//       <div className="flex flex-col gap-4 p-5 border-2 shadow-lg m-5 rounded-2xl border-white text-white">
		
// 		<div className='flex flex-col gap-4 p-5 border-2 shadow-lg m-5 rounded-2xl border-black'>
// 			<p className='text-2xl font-bold uppercase'>menuList</p>
// 			{data.map((item: Item) => {
// 				return (
// 					<div
// 						key={item.id}
// 						onClick={() => route.push(`/menu/${item.id}`)}
// 						className='hover:bg-slate-100 rounded-2xl cursor-pointer p-2'>
// 						<div className='flex flex-col md:flex-row gap-5'>
// 							<p>Item Name: {item.name}</p>
// 							<p>Item Description: {item.description}</p>
// 							<p>Item Price: {item.price}</p>
// 						</div>
// 						<Separator />
// 					</div>
// 				)
// 			})}
// 		</div>
// 		</div>
// 		</div>
// 	)
// }

// export default ItemList

// "use client";
// import React, { useEffect } from "react";
// import { Separator } from "../ui/separator";
// import { useRouter } from "next/navigation";

// type Item = {
//   id: string;
//   name: string;
//   description: string;
//   price: number;
// };

// const ItemList = ({ id }: { id: string }) => {
//   const router = useRouter();
//   const fetchData = async () => {
//     const res = await fetch("https://dns-back.onrender.com/items", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ id }),
//     });
//     const data = await res.json();
//     return data;
//   };

//   const [data, setData] = React.useState<Item[]>([]);

//   useEffect(() => {
//     fetchData().then((data) => setData(data));
//   }, [id]);

//   return (
//     <div className="min-h-screen bg-black flex justify-center items-center p-5">
//       {/* Form Container */}
//       <div className="flex flex-col gap-4 p-5 border-2 shadow-lg rounded-2xl border-gray-700 bg-gray-900">
//         {/* Heading */}
//         <p className="text-2xl font-bold uppercase text-gray-100">Menu List</p>
        
//         {/* Menu Items */}
//         {data.length === 0 ? (
//           <p className="text-gray-300">No items found. Please try again later.</p>
//         ) : (
//           data.map((item: Item) => (
//             <div
//               key={item.id}
//               onClick={() => router.push(`/menu/${item.id}`)}
//               className="hover:bg-gray-700 rounded-2xl cursor-pointer p-2"
//             >
//               <div className="flex flex-col md:flex-row gap-5 text-gray-200">
//                 <p>Item Name: {item.name}</p>
//                 <p>Item Description: {item.description}</p>
//                 <p>Item Price: ₹{item.price}</p>
//               </div>
//               <Separator />
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default ItemList;


// "use client";
// import React, { useEffect } from "react";
// import { Separator } from "../ui/separator";
// import { useRouter } from "next/navigation";

// type Item = {
//   id: string;
//   name: string;
//   description: string;
//   price: number;
// };

// const ItemList = ({ id }: { id: string }) => {
//   const route = useRouter();
  
//   const fetchData = async () => {
//     const res = await fetch("https://dns-back.onrender.com/items", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ id }),
//     });
//     const data = await res.json();
//     return data;
//   };

//   const [data, setData] = React.useState([]);

//   useEffect(() => {
//     console.log(id);
//     fetchData().then((data) => setData(data));
//   }, []);

//   return (
//     <div className="min-h-screen w-full bg-[url('/qwer.jpg')] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center">
//       <div className="flex flex-col gap-4 p-5 border-2 shadow-lg m-5 rounded-2xl border-white text-white">
        
//         <p className="text-2xl font-bold uppercase text-white items-center">
//           Item List
//         </p>

//         <div className="flex flex-col gap-4 p-5">
//           {data.map((item: Item) => {
//             return (
//               <div
//                 key={item.id}
//                 onClick={() => route.push(`/menu/${item.id}`)}
//                 className="hover:bg-black hover:text-white rounded-2xl cursor-pointer p-2"
//               >
//                 <div className="flex flex-col md:flex-row gap-5">
//                   <p>Item Name: {item.name}</p>
//                   <p>Item Description: {item.description}</p>
//                   <p>Item Price: ${item.price}</p>
//                 </div>
//                 <Separator />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ItemList;

"use client";
import React, { useEffect } from "react";
import { Separator } from "../ui/separator";
import { useRouter } from "next/navigation";

type Item = {
  id: string;
  name: string;
  description: string;
  price: number;
};

const ItemList = ({ id }: { id: string }) => {
  const route = useRouter();

  const fetchData = async () => {
    const res = await fetch("https://dns-back.onrender.com/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    const data = await res.json();
    return data;
  };

  const [data, setData] = React.useState([]);

  useEffect(() => {
    console.log(id);
    fetchData().then((data) => setData(data));
  }, []);

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('/qwer.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundColor: "rgba(0, 0, 0, 0.5)",  // Adding a transparent black background on top of the image
      }}
    >
      <div className="flex flex-col gap-4 p-5 border-2 shadow-lg m-5 rounded-2xl border-white text-white bg-opacity-90">
        <p className="text-2xl font-bold uppercase text-white items-center">
          Item List
        </p>

        <div className="flex flex-col gap-4 p-5">
          {data.map((item: Item) => {
            return (
              <div
                key={item.id}
                onClick={() => route.push(`/menu/${item.id}`)}
                className="hover:bg-black hover:text-white rounded-2xl cursor-pointer p-2"
              >
                <div className="flex flex-col md:flex-row gap-5">
                  <p>Item Name: {item.name}</p>
                  <p>Item Description: {item.description}</p>
                  <p>Item Price: {item.price}</p>
                </div>
                <Separator />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ItemList;
