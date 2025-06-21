

import { getServerSession } from "next-auth";
import { CreateRoomForm } from "./create-room-form";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function CreateRoomPage() {
   //! middleware logic as we are in next-auth v-4
    const session = await getServerSession(authOptions);
  
    if (!session) {
     
      return redirect(`/api/auth/signin?callbackUrl=/edit-room`);
    }
  return (
    <div className="flex h-full w-full items-center justify-center p-4">
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-2xl font-bold">Create Room</h1>
        <CreateRoomForm  />
      </div>
    </div>
  );
}