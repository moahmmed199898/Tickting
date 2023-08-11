"use client"
import { SideNavBar } from '@/Components/Nav/SideNav/SideNav'
import { TopNav } from '@/Components/Nav/TopNav/TopNav'
import { useState } from 'react'

export function Nav() {

    const [openSideBar, setOpenSideBar] = useState(false)

    return (
        <>
            <TopNav onMenuButtonClick={() => setOpenSideBar(true)} />
            <SideNavBar sideBarOpen={openSideBar} />
        </>
    )
}
