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
import { getRooms } from "@/data-access/room";
import TagList from "@/components/tag-list";


function RoomCard({ room }: { room: Room }) {
  return (
    <Card>
  <CardHeader>
    <CardTitle>{String(room.name)}</CardTitle>
    <CardDescription>{String(room.description)}</CardDescription>
  </CardHeader>
  <CardAction>
    <div className="flex items-center justify-between px-4 py-2">
      <TagList
        languages={String(room.language)
          .split(",")
          .map((lang: string) => lang.trim())}
      />
    </div>
  </CardAction>

  <CardContent>
    {room.githubRepo && (
      <Link
        href={room.githubRepo}
        className="flex items-center gap-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon />
        Github Link
      </Link>
    )}
  </CardContent>


  <CardFooter>
    <Button asChild>
      <Link href={`/rooms/${room.id}`}>Join Room</Link>
    </Button>
  </CardFooter>
</Card>
  );
}
export default async function Home() {

  const rooms = await getRooms(); // this enruse the dynamic update on the page
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
      <div className="mt-8 grid grid-cols-3 gap-4 ">
        {rooms.map((room) => (
          <RoomCard key={String(room.id)} room={room} />
        ))}
      </div>
    </div>
  );
}
