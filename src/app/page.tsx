
import { db } from "@/db";
export default async function Home() {

  const rooms = await db.query.room.findMany({})
  return (
    <div >
       {rooms.map((room) => {
        return <div key={room.name} className="flex items-center justify-center">
          {room.name }
          
        </div>
       })}
    </div>
  );
}
