import Link from "next/link";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import {Navbar} from "~/app/_components/navbar"
import {SigninLink} from "~/app/_components/signlink"

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      <header>
        {session ? <Navbar session={session}/> : <SigninLink/>}
      </header>

    </HydrateClient>
  );
}
