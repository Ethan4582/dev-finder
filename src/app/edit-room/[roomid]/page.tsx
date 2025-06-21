import { getRoom } from "@/data-access/room";
import { EditRoomForm } from "./edit-room-form";
import { unstable_noStore } from "next/cache";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";



export default async function EditRoomPage({
  params,
}: {
  params: { roomid: string };
}) {
  unstable_noStore();
  
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect(`/api/auth/signin?callbackUrl=/edit-room/${params.roomid}`);
  }
  
 
  const room = await getRoom(params.roomid);
  
  if (!room) {
    return <div>Room not found</div>;
  }
 
  if (room.userId !== session.user.id) {
    return redirect("/your-rooms");
  }

  return (
    <div className="flex h-full w-full items-center justify-center p-4">
      <div className="flex flex-col items-center justify-center space-y-4 w-full max-w-md">
        <h1 className="text-2xl font-bold">Edit Room</h1>
        
        <EditRoomForm room={room} />
      </div>
    </div>
  );
}