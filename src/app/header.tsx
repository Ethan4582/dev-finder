"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { ModeToggle } from "@/components/mode-toggle";
import { signIn, signOut, useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { DeleteIcon, LogInIcon, LogOutIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image";
import Link from "next/link";

 
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import { deleteAccountAction } from "./actions";


function AccountDropdown() {
  const session = useSession();
  const [open, setOpen] = useState(false);

  return (
    <>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently remove your
              account and any data your have.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={async () => {
                await deleteAccountAction();
                signOut({ callbackUrl: "/" });
              }}
            >
              Yes, delete my account
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"link"}>
            <Avatar className="mr-2">
              <AvatarImage src={session.data?.user?.image ?? ""} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            {session.data?.user?.name}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={() =>
              signOut({
                callbackUrl: "/",
              })
            }
          >
            <LogOutIcon className="mr-2" /> Sign Out
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => {
              setOpen(true);
            }}
          >
            <DeleteIcon className="mr-2" /> Delete Account
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
} 






export function Header() {
   const session = useSession();
   const isLoggedIn = !!session.data;

   return (
      <header className="bg-slate-100 dark:bg-slate-900 flex items-center justify-between p-3 text-slate-900 dark:text-white relative border-b border-slate-200 dark:border-slate-800">
         <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Dev Finder Logo"
              width={32}
              height={32}
            />
            <span className="font-semibold">Dev Rooms</span>
         </Link>

         <nav>
            {isLoggedIn && (
               <ul className="flex items-center gap-4">
                  <Link href="/browse" className="hover:underline">
                     Browse
                  </Link>
                  <Link href="/your-rooms" className="hover:underline">
                     Your Rooms
                  </Link>
               </ul>
            )}
         </nav>

         <div className="flex items-center gap-4">
            {session.data && <AccountDropdown />}
            {!session.data && (
               <Button 
                  variant="link" 
                  onClick={() => signIn()}
                  className="text-slate-900 dark:text-white"
               >
                  <LogInIcon className="mr-2" />
                  Sign In 
               </Button>
            )}
            <ModeToggle />
         </div>
      </header>
   )
}


