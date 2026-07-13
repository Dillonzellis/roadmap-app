import { getTracks } from "@/db/queries/tracks";
// import { createTrack } from "../actions";
import { Input } from "@/components/ui/input";

// Add a topics table and create a seed script that inserts your initial tracks and topics.

export default async function TracksPage() {
  const tracks = await getTracks();

  return (
    <main className="mx-auto max-w-3xl p-6 bg-stone-900 text-stone-100">
      <h1 className="text-2xl font-semibold">Learning Tracks</h1>

      <ul className="mt-6 space-y-3">
        {tracks &&
          tracks.map((track) => (
            <li key={track.id} className="rounded-lg border p-4">
              <h2 className="font-medium">{track.name}</h2>
              {track.description ? (
                <p className="mt-1 text-sm text-muted-foreground">
                  {track.description}
                </p>
              ) : null}
            </li>
          ))}
      </ul>

      <div>
        <div>Add Track</div>
        {/* <form action={createTrack}> */}
        {/*   <Input type="text" name="name" required /> */}
        {/*   <input type="text" name="description" /> */}
        {/*   <button type="submit">Create</button> */}
        {/* </form> */}
      </div>
    </main>
  );
}
