

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {  getUserRooms } from "@/data-access/room";
import { unstable_noStore } from "next/cache";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import RoomCard from "../browse/room-card";

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
    
     
            <div className="mt-8 grid grid-cols-3 p-10 gap-4">
          {rooms.length === 0 ? (
            <div className="col-span-3 text-center text-white-500">
              <Image
                src="/no-data_.svg"
                alt="No rooms found"
                width={200}
                height={200}
                className="mx-auto mb-4"
              />
              <p>No rooms Yet!</p>
                <Button asChild className="mt-4">
          <Link href="/create-room">
            Create Room
          </Link>
        </Button>
            </div>
          ) : (
            rooms.map((room) => (
              <RoomCard key={String(room.id)} room={room} />
            ))

          )}
        </div>
    </div>
  );
}
