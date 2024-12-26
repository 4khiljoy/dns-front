import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CiMenuBurger } from "react-icons/ci";
import Link from "next/link";

const Menu = () => {
  return (
    <div>
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-4 uppercase">
        <Link href={"/"} className="text-white">
          HOME
        </Link>
        <Link href={"/menulist"} className="text-blue-500">
          Menu
        </Link>
        <p className="text-white">Make a Reservation</p>
        <Link href={"/contact-us"} className="text-white">
          Contact Us
        </Link>
      </div>

      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <CiMenuBurger
              size={30}
              className="text-white hover:text-blue-500 transition duration-300"
            />
          </SheetTrigger>
          <SheetContent className="bg-gradient-to-b from-gray-800 to-gray-900 text-white">
            <SheetHeader>
              <SheetTitle className="text-2xl font-bold text-center text-blue-500 border-b border-gray-600 pb-4">
                MENU
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col items-center gap-6 mt-6">
              <Link
                href={"/"}
                className="text-xl font-medium text-white hover:text-blue-400 transition duration-300"
              >
                HOME
              </Link>
              <Link
                href={"/menulist"}
                className="text-xl font-medium text-blue-500 hover:text-blue-400 transition duration-300"
              >
                Menu
              </Link>
              <p className="text-xl font-medium text-white hover:text-blue-400 transition duration-300">
                Make a Reservation
              </p>
              <Link
                href={"/contact-us"}
                className="text-xl font-medium text-white hover:text-blue-400 transition duration-300"
              >
                Contact Us
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Menu;
