

import { CreateRoomForm } from "./create-room-form";

export default function CreateRoomPage() {
  return (
    <div className="flex h-full w-full items-center justify-center p-4">
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-2xl font-bold">Create Room</h1>
        <CreateRoomForm  />
      </div>
    </div>
  );
}