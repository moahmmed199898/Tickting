import { SideNav } from "../Components/Nav/SideNav/SideNav";
import { TopNav } from "../Components/Nav/TopNav/TopNav";

export function Layout() {

    return (
        <div className="grid grid-cols-[17vw_minmax(70vw,_90vw)] grid-rows-[6vh_100%]">
            <SideNav className="min-h-screen row-span-2"/>
            <TopNav className=""/>
            <div className="bg-green-900 ">Children</div>
        </div>
    );
}