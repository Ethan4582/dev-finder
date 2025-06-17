"use server";

import { db } from "@/db";
// import { createRoom } from "@/data-access/rooms";
import { room, Room  } from "@/db/schema";
import { getSession } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function createRoomAction(roomData: Omit<Room, "id" | "userId">) {
  const session = await getSession();

  console.log( session);

  if (!session) {
    throw new Error("you must be logged in to create this room");
  }

//   const room = await createRoom(roomData, session.user.id);

//   revalidatePath("/browse");

//   return room;

await db.insert(room).values({
  userId: session.user.id,
  name: roomData.name,
  description: roomData.description,
 language: roomData.language ?? "english",  
  githubRepo: roomData.githubRepo,
});

// console.log(roomData);
}