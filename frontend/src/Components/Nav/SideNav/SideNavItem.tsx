import { Link } from "react-router-dom"
type Props = {
    name: string,
    icon: JSX.Element,
    path: string,
    selected?: boolean
}
export function SideNavItem(props:Props) {

    return (
        <Link to={props.path} className={`flex items-center gap-4 px-4 py-2 rounded-sm cursor-pointer my-4
                        hover:font-bold hover:bg-lightblack hover:text-white transition-all duration-400
                        ${props.selected ? "bg-lightblack text-white font-bold" : "text-gray"}
                        `}>

            {props.icon}
            {props.name}
        </Link>
    );
}