import { unstable_noStore } from 'next/cache';
import { db } from '../db';
import { or, like } from 'drizzle-orm';

export async function getRooms(search?: string) {
  unstable_noStore(); // This ensures that the data is not cached and always fetched fresh
  if (search && search.trim() !== "") {
    const rooms = await db.query.room.findMany({
      where: (room, { like, or }) =>
        or(
          like(room.name, `%${search}%`),
          like(room.description, `%${search}%`),
          like(room.language, `%${search}%`),
          like(room.githubRepo, `%${search}%`)
        ),
    });
    return rooms;
  }
  // No search: return all rooms
  return await db.query.room.findMany({});
}

export async function getRoom(roomId: string) {
   unstable_noStore(); // This ensures that the data is not cached and always fetched fresh
  return await db.query.room.findFirst({
   where: (room, { eq }) => eq(room.id, roomId),
   //  where: eq(room.id, roomId),
  });

}
