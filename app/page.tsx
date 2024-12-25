// import MenuList from "@/components/dataList/menuList";
import { CreateMenu } from "@/components/form/createMenu";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[url('/Rectangle103.png')] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center">
      <div>
        <CreateMenu />
      </div>
      {/* <MenuList /> */}
     <div className="flex w-full justify-center my-5">
     <Button asChild>
        <Link href="/menulist">Menu</Link>
      </Button>
     </div>
    </div>
  );
}

