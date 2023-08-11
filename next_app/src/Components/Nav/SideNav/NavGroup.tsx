"use client"
import { ReactElement } from "react";
import { Props as NavGroupItemProps } from "./NavGroupItem";
import { Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Typography from '@mui/joy/Typography';

type Props = {
    title: string
    children: ReactElement<NavGroupItemProps> | ReactElement<NavGroupItemProps>[]
}

export function NavGroup(props: Props) {
    return (
        <>
            <Typography textAlign={"center"} level="h3">{props.title}</Typography>
            <Divider />
            {props.children}
        </>
    )
}