"use server";

import { db } from "@/db";
import { tracks } from "@/db/schema";
import { revalidatePath } from "next/cache";

export async function createTrack(formData: FormData) {
  const formTrackName = formData.get("name");

  if (typeof formTrackName !== "string") {
    throw new Error("");
  }

  await db.insert(tracks).values({ name: formTrackName, slug: formTrackName });
  revalidatePath("/tracks");
}
