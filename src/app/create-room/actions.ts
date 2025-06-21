"use server";

import { createRoom } from "@/data-access/room";
import { db } from "@/db";
import { room, Room } from "@/db/schema";
import { getSession } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createRoomAction(roomData: Omit<Room, "id" | "userId">) {
  const session = await getSession();

  if (!session) {
    throw new Error("you must be logged in to create this room");
  }

 
  const createdRoom = await createRoom(roomData, session.user.id);

  revalidatePath("/your-rooms");
  return createdRoom.id;

}