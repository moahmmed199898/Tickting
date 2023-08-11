"use client"
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Link from "next/link";
import { ReactNode } from "react";

export type Props = {
    icon: ReactNode
    itemName: string,
    href: string
}

export function NavGroupItem(props:Props) {
    return (
        <Link href={props.href}>
            <ListItem>
                <ListItemButton>
                    <ListItemIcon>{props.icon}</ListItemIcon>
                    <ListItemText>{props.itemName}</ListItemText>
                </ListItemButton>
            </ListItem>
        </Link>
    )
}