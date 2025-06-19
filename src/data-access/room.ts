
import { unstable_noStore } from 'next/cache';
import { db } from '../db';
export async function getRooms() {
   unstable_noStore(); // This ensures that the data is not cached and always fetched fresh
  const rooms = await db.query.room.findMany({});
  return rooms;
}

export async function getRoom(roomId: string) {
   unstable_noStore(); // This ensures that the data is not cached and always fetched fresh
  return await db.query.room.findFirst({
   where: (room, { eq }) => eq(room.id, roomId),
   //  where: eq(room.id, roomId),
  });

}
