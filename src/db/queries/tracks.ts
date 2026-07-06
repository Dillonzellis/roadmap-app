import { asc } from "drizzle-orm";
import { db } from "@/db";
import { tracksTable } from "../schema";

export async function getTracks() {
  return db.select().from(tracksTable).orderBy(asc(tracksTable.name));
}
