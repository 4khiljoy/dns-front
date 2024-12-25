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
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Adding a transparent black background on top of the image
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
