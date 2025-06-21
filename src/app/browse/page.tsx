
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getRooms } from "@/data-access/room";
import SearchBar from "./searchbar";
import RoomCard from "./room-card";
import { unstable_noStore } from "next/cache";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function Home({ searchParams }: { searchParams: { search?: string } }) {
//! some issue with searchParams in nextjs 14, it is not working as expected
 
 unstable_noStore(); 

  const session = await getServerSession(authOptions);
   
     if (!session) {
      
       return redirect(`/api/auth/signin?callbackUrl=/browse`);
     }


  const rooms = await getRooms(searchParams?.search); 
  return (
    <div className="min-h-screen p-16">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold mb-4">Find Dev Room</h1>
        <Button asChild>
          <Link href="/create-room">
            Create Room
          </Link>
        </Button>
      </div>
      <SearchBar/>
     

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



