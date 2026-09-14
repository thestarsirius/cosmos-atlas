import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/EntryDetail";

export const metadata: Metadata = {
  title: "Cosmic Timeline",
  description: "From the Big Bang to the present day — the major milestones in the history of the universe."
};

interface Era {
  title: string;
  time: string;
  description: string;
  status: "observed" | "model" | "open question";
}

const eras: Era[] = [
  { title: "The Big Bang", time: "≈ 13.8 billion years ago", description: "The universe begins expanding from an extremely hot, dense state. What happened in the very first fraction of a second remains an open area of research.", status: "model" },
  { title: "Cosmic Microwave Background", time: "≈ 380,000 years after", description: "The universe cools enough for light to travel freely for the first time. This afterglow is still detectable today and is one of the strongest pieces of evidence for the Big Bang model.", status: "observed" },
  { title: "First Stars", time: "≈ 100–250 million years after", description: "Gravity pulls primordial hydrogen and helium into the first stars, ending the universe's 'dark ages.'", status: "model" },
  { title: "First Galaxies", time: "≈ 400 million years after", description: "Stars and gas cluster into the earliest galaxies — some of the most distant ones have been directly imaged by the James Webb Space Telescope.", status: "observed" },
  { title: "The Milky Way Forms", time: "≈ 13 billion years ago (onward)", description: "Our home galaxy begins assembling, growing over billions of years through star formation and mergers with smaller galaxies.", status: "model" },
  { title: "The Solar System Forms", time: "≈ 4.6 billion years ago", description: "A cloud of gas and dust collapses under gravity, forming the Sun and, from the leftover disk, the planets.", status: "observed" },
  { title: "Earth & Early Life", time: "≈ 4.5 billion years ago onward", description: "Earth forms and cools; the earliest evidence of life dates back roughly 3.5–3.8 billion years, though the exact timing is still debated.", status: "open question" },
  { title: "Today", time: "Now", description: "We observe the universe from a single small planet, using light that in some cases left its source billions of years ago.", status: "observed" }
];

const statusColor: Record<Era["status"], string> = {
  observed: "border-stellar/40 text-stellar",
  model: "border-purple/40 text-purple-soft",
  "open question": "border-white/20 text-mute"
};

export default function TimelinePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 pt-28 pb-16">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Timeline" }]} />
      <h1 className="font-display text-3xl sm:text-5xl text-starlight mt-4 text-balance">Cosmic Timeline</h1>
      <p className="mt-3 text-mute max-w-prose leading-8">
        From the Big Bang to today. Labels distinguish direct observation from scientific models and open
        questions — the timeline doesn't present speculation as settled fact.
      </p>

      <ol className="mt-12 relative border-s border-white/10 ps-6 space-y-10">
        {eras.map((era) => (
          <li key={era.title} className="relative">
            <span
              className="absolute -start-[27px] top-1 h-3 w-3 rounded-full bg-purple"
              style={{ boxShadow: "0 0 10px #6C4FD1" }}
              aria-hidden="true"
            />
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="font-display text-lg text-starlight">{era.title}</h2>
              <span className={`rounded-full border px-2 py-0.5 text-[11px] ${statusColor[era.status]}`}>
                {era.status}
              </span>
            </div>
            <p className="text-sm text-faint mt-0.5">{era.time}</p>
            <p className="mt-2 text-mute leading-7 max-w-prose">{era.description}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
