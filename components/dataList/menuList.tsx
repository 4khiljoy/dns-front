"use client";
import React, { useEffect } from "react";
import { Separator } from "../ui/separator";
import { useRouter } from "next/navigation";

type Item = {
  id: string;
  name: string;
  description: string;
};

const MenuList = () => {
  const route = useRouter();
  const fetchData = async () => {
    const res = await fetch("https://dns-back.onrender.com/menu", {
      method: "GET",
    });
    const data = await res.json();
    return data;
  };

  const [data, setData] = React.useState([]);
  useEffect(() => {
    fetchData().then((data) => setData(data));
  }, []);

  return (
    <div className="min-h-screen w-full bg-[url('/qwer.jpg')] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center">
      <div className="flex flex-col gap-4 p-5 border-2 shadow-lg m-5 rounded-2xl border-white text-white">
        <p className="text-2xl font-bold uppercase text-white items-center">
          Menu List
        </p>
        {data.map((item: Item) => {
          return (
            <div
              key={item.id}
              onClick={() => route.push(`/menu/${item.id}`)}
              className="hover:bg-black hover:text-white rounded-2xl cursor-pointer p-2"
            >
              <div className="flex flex-col md:flex-row gap-5">
                <p>Menu Name: {item.name}</p>
                <p>Menu Description: {item.description}</p>
              </div>
              <Separator />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuList;
