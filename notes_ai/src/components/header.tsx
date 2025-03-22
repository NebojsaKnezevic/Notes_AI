"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from '../../public/vercel.svg'
import { shadow } from "@/styles/utils";
import { Button } from "./ui/button";
import ModeToggle from "./dark-mode-toggle";
import LogoutButton from "./logout-button";


const Header: React.FC = () => {
    const user = 1;

    return (
        <header className="bg-popover relative flex h-24 w-full items-center justify-between px-3 sm:px-8"
            style={{
                boxShadow: shadow
            }}
        >
            <Link href={"/"} className="flex items-end gap-2">
                <Image
                    src={logo}
                    height={60}
                    width={60}
                    alt="logo"
                    className="rounded-full"
                    priority />
                <h1 className="flex flex-col pb-1 text-2xl font-semibold loading-4">
                    AI <span>Notes</span>
                </h1>
            </Link>

            <div className="flex  gap-4">
                {
                    user ? 
                    (<LogoutButton/>) :
                    (<>
                    <Button asChild className="hidden sm:block">
                        <Link href={'/sign-up'}>Sign up</Link>
                    </Button>
                    <Button asChild variant={'outline'}>
                        <Link href={'/login'}>Login</Link>
                    </Button>
                    </>)
                }
                <ModeToggle/>
            </div>
        </header>
    );
}

export default Header;