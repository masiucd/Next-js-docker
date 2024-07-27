// import {db, users} from "@/db/d";

import {eq} from "drizzle-orm";

import {db} from "@/db";
import {task, user} from "@/db/schema";

export default async function Home() {
  let xs = await db
    .select({
      id: user.id,
      name: user.name,
      task: {
        title: task.task,
        completed: task.completed,
      },
    })
    .from(user)
    .leftJoin(task, eq(user.id, task.userId));
  // .where(eq(user.id, 1));
  console.log("xs", xs);

  return (
    <>
      <h1>home</h1>
      <ul>{task}</ul>
    </>
  );
}

// let foodRecordsStatement = await db
// .selectDistinct({
//   foodId: f.foodId,
//   foodName: f.name,
//   lowerName: sql`lower(${f.name})`,
//   description: f.description,
//   calories: fn.calories,
//   carbs: fn.carbohydrates,
//   totalFat: fn.fat,
//   protein: fn.protein,
//   foodType: dt.name,
//   foodTypeId: dt.id,
// })
// .from(f)
// .leftJoin(fn, eq(f.foodId, fn.foodId))
// .leftJoin(dt, eq(f.type_id, dt.id))
// .where(eq(f.foodId, foodID))
// .get();
