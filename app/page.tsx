import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";

import HeroContent from "./components/HeroContent";
import CardsInfo from "./components/CardsInfo";
import Biography from "./components/Biography";

export default async function Home() {
  const profile: ProfileType[] = await getProfile();

  const info = profile.map((data) => ({
    fullName: data.fullName,
    headline: data.headline,
    shortBio: data.shortBio,
    resumeUrl: data.resumeURL,
  }));

  return (
    <main className="flex flex-col max-w-7xl mx-auto gap-10">
      <HeroContent info={[info[0].fullName, info[0].headline]} />
      <CardsInfo />
      <Biography info={[info[0].shortBio, info[0].resumeUrl]} />
    </main>
  );
}
