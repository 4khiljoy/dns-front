// import MenuList from "@/components/dataList/menuList";
import { CreateMenu } from "@/components/form/createMenu";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" bg-[url('/Rectangle103.png')] bg-cover bg-center">
      <div>
        <CreateMenu />
      </div>
      {/* <MenuList /> */}
     <div className="flex w-full justify-center my-5">
     <Button asChild>
        <Link href="/menulist">menu</Link>
      </Button>
     </div>
    </div>
  );
}
