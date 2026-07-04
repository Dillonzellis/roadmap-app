// "use server";
//
// import { db } from "@/db";
// import { tracks } from "@/db/schema";
// import { slugify } from "@/lib/slugify";
// import { revalidatePath } from "next/cache";
//
// export async function createTrack(formData: FormData) {
//   const formTrackName = formData.get("name");
//
//   if (typeof formTrackName !== "string") {
//     throw new Error("");
//   }
//
//   await db
//     .insert(tracks)
//     .values({ name: formTrackName, slug: slugify(formTrackName) });
//   revalidatePath("/tracks");
// }
