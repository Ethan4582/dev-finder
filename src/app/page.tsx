
import { db } from "@/db";
export default async function Home() {

  const iteams = await db.query.users.findMany({})
  return (
    <div >
       {iteams.map((item) => {
        return <div key={item.id} className="flex items-center justify-center">
          {item.name }
          
        </div>
       })}
    </div>
  );
}
