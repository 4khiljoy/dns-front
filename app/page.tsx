// import MenuList from "@/components/dataList/menuList";
import { CreateMenu } from "@/components/form/createMenu";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[85vh] bg-cover">
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
