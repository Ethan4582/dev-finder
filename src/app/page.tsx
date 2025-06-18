import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { db } from "@/db";
import { Room } from "@/db/schema";
import { GithubIcon } from "lucide-react";


function RoomCard({ room }: { room: Room }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{String(room.name)}</CardTitle>
        <CardDescription>{String(room.description)}</CardDescription>
        <CardAction>Card Action</CardAction>
      </CardHeader>
      <CardContent>
        {room.githubRepo &&  
         <Link href={room.githubRepo}
          className="flex items-center gap-2"
        // to a new tab
        tarhet="_blank"
        rel="noopener noreferrer "
        
        ><GithubIcon/>
          Github Link
        </Link>}
      </CardContent>
      <CardFooter>
       <Button asChild>
          <Link href={`/rooms/${room.id}`}>
            Join Room
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
export default async function Home() {

  const rooms = await db.query.room.findMany({});
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
      <div className="mt-8 grid gap-4">
        {rooms.map((room) => (
          <RoomCard key={String(room.id)} room={room} />
        ))}
      </div>
    </div>
  );
}
