type Props = {
    className?: string
}

export function TopNav(props:Props) {

    return (
        <div className={`bg-red-700 ${props.className}`}>hello from TopNav</div>
    );
}