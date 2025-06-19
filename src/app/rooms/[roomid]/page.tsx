import { GithubIcon } from "lucide-react";
import Link from "next/link";
import { unstable_noStore } from "next/cache";
import { getRoom } from "@/data-access/room";
import TagList from "@/components/tag-list";
import { DevfinderVideo } from "./video-player";

export default async function RoomPage(props: { params: { roomid: string } }) {
  unstable_noStore();
  const roomid = props.params.roomid;
  const room = await getRoom(roomid);

  if (!room) return <div>No room of this ID found</div>;

  return (
    <div className="grid grid-cols-4 min-h-screen">
      <div className="col-span-3 p-4 pr-2">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 min-h-screen">
          <DevfinderVideo room={room} />
        </div>
      </div>

      <div className="col-span-1 p-4 pl-2">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 flex flex-col gap-4">
          <h1 className="text-lg font-semibold">{room.name}</h1>
          <p className="text-sm text-muted-foreground">{room.description}</p>

          {room.githubRepo && (
            <Link
              href={room.githubRepo}
              className="flex items-center gap-2 text-sm text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon size={16} />
              Github Project
            </Link>
          )}

          <div className="pt-2">
            <TagList
              languages={room.language
                .split(",")
                .map((lang: string) => lang.trim())}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
