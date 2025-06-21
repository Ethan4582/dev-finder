

import { Button } from "@/components/ui/button";
import Link from "next/link";

import { GithubIcon } from "lucide-react";
import { getRooms, getUserRooms } from "@/data-access/room";
import UserRoomCard from "./user-room-card"; 
import { unstable_noStore } from "next/cache";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function YourRoomPage() {
    unstable_noStore(); 

   
   //! middleware logic as we are in next-auth v-4
  const session = await getServerSession(authOptions);

  if (!session) {
   
    return redirect(`/api/auth/signin?callbackUrl=/your-rooms`);
  }


  const rooms = await getUserRooms(); 
  return (
    <div className="min-h-screen p-16">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold mb-4">Your Room</h1>
        <Button asChild>
          <Link href="/create-room">
            Create Room
          </Link>
        </Button>
      </div>
    
      <div className="mt-8 grid grid-cols-3 gap-4 ">
        {rooms.map((room) => (
          <UserRoomCard key={String(room.id)} room={room} />
        ))}
      </div>
    </div>
  );
}
