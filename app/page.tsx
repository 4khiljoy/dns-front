import MenuList from "@/components/dataList/menuList";
import { CreateMenu } from "@/components/form/createMenu";


export default function Home() {
  return (
    <div>
     <div>
      <CreateMenu />
     </div>
     <MenuList />
    </div>
  );
}
