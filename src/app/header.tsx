"use client";
import { ModeToggle } from "@/components/mode-toggle";
import { signIn, signOut, useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";
export function Header() {

   // this hwo we check id use is logged in next-auth
   const session =useSession();

   return (
      <header className="flex items-center justify-between p-4 bg-blue-950-800 text-white">
         <div>
            {session.data?(
               < Button  onClick={() => signOut()}
               >
                  Sign Out
               </ Button >
            ):
            < Button   onClick={() => signIn("google")} >
                  Sign IN
               </ Button>
               }
             <ModeToggle /> 
         </div>
      </header>   
   )
}