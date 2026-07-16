// Add a topics table and create a seed script that inserts your initial tracks and topics.

import { db } from ".";
import { tracksTable } from "./schema";

async function main() {
  const tracks: (typeof tracksTable.$inferInsert)[] = [
    {
      name: "DSA / LeetCode",
      slug: "dsa",
      description: "data structures and algos",
    },
    {
      name: "CS Fundamentals",
      slug: "cs-fundamentals",
      description: "insert here",
    },

    //   CS fundamentals
    //   Frontend/platform depth
    //   Architecture and system design
    //   Code quality and engineering habits
    //   Projects and applied learning
    //   Mock interviews and communication
  ];

  await db.insert(tracksTable).values(tracks);
}

main();
