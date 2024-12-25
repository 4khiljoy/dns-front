import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CiMenuBurger } from "react-icons/ci";

const Menu = () => {
  return (
    <div>
      <div className="hidden md:flex gap-4 uppercase">
        <p className="text-white">HOME</p>
        <p className="text-blue-500">Menu</p>
        <p className="text-white">Make a Reservation</p>
        <p className="text-white">Contact Us</p>
      </div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <CiMenuBurger size={30} className="text-white" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>MENU</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 uppercase">
              <p className="text-black">HOME</p>
              <p className="text-blue-500">Menu</p>
              <p className="text-black">Make a Reservation</p>
              <p className="text-black">Contact Us</p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Menu;
