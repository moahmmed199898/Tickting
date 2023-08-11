import { Drawer, List} from "@mui/material";
import LayersIcon from '@mui/icons-material/Layers';
import { useState } from 'react'
import { NavGroup } from "./NavGroup";
import { NavGroupItem } from "./NavGroupItem";

type Props = {
  sideBarOpen: boolean
}

export function SideNavBar(props:Props) {

  return (
    <Drawer variant="temporary" anchor="left" open={props.sideBarOpen} >
        <List>
            <NavGroup title="Report Stacks">
                <NavGroupItem href="/" icon={<LayersIcon />} itemName="Technology Services"></NavGroupItem>
            </NavGroup>
            
            <NavGroup title="Forms">
                <NavGroupItem href="/forms/order" icon={<LayersIcon />} itemName="Order Request Form"></NavGroupItem>
            </NavGroup>

        </List>
    </Drawer>
  );
};

