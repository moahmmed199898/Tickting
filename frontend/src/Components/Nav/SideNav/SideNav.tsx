import { SideNavItem } from "./SideNavItem";
import { HomeIcon } from "../../../Assets/Icons/HomeIcon";
import { WorkplaceIcon } from "../../../Assets/Icons/WorkplaceIcon";
import { ArchiveIcon } from "../../../Assets/Icons/ArchiveIcon";
import { InboxIcon } from "../../../Assets/Icons/InboxIcon";
import { PiChartIcon } from "../../../Assets/Icons/PiChartIcon";
import { DocumentsIcon } from "../../../Assets/Icons/DocumentsIcon";
import { GearIcon } from "../../../Assets/Icons/GearIcon";
import { LogoutIcon } from "../../../Assets/Icons/LogoutIcon";

type Props = {
    className?: string
}
export function SideNav(props:Props) {

    return (
        <div className={`bg-black px-2 py-10 ${props.className}`}>
            <div className="text-white text-5xl text-center mb-20">Logo</div>
            <SideNavItem name="Home" icon={<HomeIcon />} selected path="/"/>
            <SideNavItem name="Work Order" icon={<WorkplaceIcon />} path="/"/>
            <SideNavItem name="Requests" icon={<ArchiveIcon />} path="/"/>
            <SideNavItem name="Assets" icon={<InboxIcon />} path="/"/>
            <SideNavItem name="Report" icon={<PiChartIcon />} path="/"/>
            <SideNavItem name="Documents" icon={<DocumentsIcon />} path="/"/>

            <hr className="text-gray bg-gray" />

            <SideNavItem name="Settings" icon={<GearIcon />} path="/"/>
            <SideNavItem name="Logout" icon={<LogoutIcon />} path="/"/>
        </div>
    );
}