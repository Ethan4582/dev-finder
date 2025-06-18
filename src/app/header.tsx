"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { ModeToggle } from "@/components/mode-toggle";
import { signIn, signOut, useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { LogInIcon, LogOutIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image";
import Link from "next/link";
 
function AcoountDropdown() {
   // this hwo we check id use is logged in next-auth
    const session =useSession(); 

const isLoggedIn=!!session.data;  

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
         <Button  variant={"outline"}>
            <Avatar className="mr-2">
            <AvatarImage src={session.data?.user?.image ?? ""}/>
            <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {session.data?.user?.name}</Button></DropdownMenuTrigger>
      <DropdownMenuContent>
          {isLoggedIn?(
             <DropdownMenuItem   onClick={() => signOut()}> 
              <LogOutIcon className="mr-2 "/>   Sign Out
               </DropdownMenuItem>
            ):(

             <DropdownMenuItem   onClick={() => signIn("google")}>   <LogInIcon  className="mr-2 " /> Sign In</DropdownMenuItem>
            ) }
       
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export function Header() {
      
   // this hwo we check id use is logged in next-auth
   const session =useSession();

   return (
      <header className="bg-gray-200 dark:bg-gray-900 flex items-center justify-between p-3 text-gray-900 dark:text-white">
         <Link href="/" className="flex items-center gap-2">
            <Image
            src="/logo.png"
            alt="Dev Finder Logo"
            width={32}
            height={32}
            />
            <span>Dev Rooms</span>
         </Link>

         <div className="flex items-center gap-4">
            <AcoountDropdown />
            <ModeToggle />
         </div>
      </header>
   )
}

