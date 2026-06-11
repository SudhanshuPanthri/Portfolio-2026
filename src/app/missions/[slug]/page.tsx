import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MISSIONS, getMission } from "@/data/missions";
import MissionDetail from "@/components/MissionDetail";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return MISSIONS.map((mission) => ({ slug: mission.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const mission = getMission(slug);
  if (!mission) return { title: "Issue Not Found" };
  return {
    title: `${mission.title} ${mission.issue} — Sudhanshu Panthri`,
    description: mission.blurb,
    openGraph: {
      title: `${mission.title} ${mission.issue}`,
      description: mission.blurb,
      type: "article",
    },
  };
}

export default async function MissionPage({ params }: Props) {
  const { slug } = await params;
  const mission = getMission(slug);
  if (!mission) notFound();

  const index = MISSIONS.findIndex((m) => m.slug === mission.slug);
  const prev = MISSIONS[(index - 1 + MISSIONS.length) % MISSIONS.length];
  const next = MISSIONS[(index + 1) % MISSIONS.length];

  return <MissionDetail mission={mission} prev={prev} next={next} />;
}
