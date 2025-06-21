"use server";

import { createRoom } from "@/data-access/room";
import { db } from "@/db";
// import { createRoom } from "@/data-access/rooms";
import { room, Room  } from "@/db/schema";
import { getSession } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function createRoomAction(roomData: Omit<Room, "id" | "userId">) {
  const session = await getSession();

  if (!session) {
    throw new Error("you must be logged in to create this room");
  }

  await createRoom(roomData, session.user.id);
await db.insert(room).values({
  userId: session.user.id,
  name: roomData.name,
  description: roomData.description,
  language: roomData.language,
  githubRepo: roomData.githubRepo,
});


 revalidatePath("/"); //to clear the cache and revalidate the page
}