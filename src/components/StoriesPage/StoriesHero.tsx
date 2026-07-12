import { storyHero } from "@/assets"
import { FaArrowRightLong, FaPlay } from "react-icons/fa6"

const StoriesHero = () => (
  <section className="m-4 grid gap-8 px-5 pt-10 md:grid-cols-[0.8fr_1.2fr] md:items-center md:px-10 md:pt-14 lg:m-12 lg:px-16">
    <div>
      <h1 className="text-4xl leading-[1.08] font-semibold text-white md:text-6xl">
        Real Stories.
        <br />
        Real Hope.
      </h1>
      <p className="mt-6 max-w-sm text-base leading-7 text-white/65">
        Every story is unique. Every journey matters. Be inspired by those who
        are rising.
      </p>
      <div className="mt-7 flex flex-wrap gap-3">
        <button className="rounded-lg bg-linear-to-r from-purple to-blue-500 px-5 py-3 text-sm font-semibold text-white">
          Share Your Story
        </button>
        <button className="inline-flex items-center gap-2 rounded-lg border border-purple/40 px-5 py-3 text-sm font-semibold text-white">
          Watch All Videos <FaArrowRightLong />
        </button>
      </div>
    </div>
    <article className="relative min-h-64 overflow-hidden rounded-[1.5rem] border border-purple/25 bg-[#11133b] md:min-h-72">
      <img
        src={storyHero}
        alt="A recovery story"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-linear-to-r from-[#100b35] via-[#100b35]/70 to-transparent" />
      <div className="relative z-10 max-w-xs px-6 py-7 md:px-8">
        <p className="text-xs font-semibold tracking-[0.18em] text-purple uppercase">
          Featured Story
        </p>
        <h2 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
          From Darkness
          <br />
          to Light
        </h2>
        <p className="mt-4 text-sm leading-6 text-white/65">
          Mark&apos;s story of finding hope and a new life in recovery.
        </p>
        <button className="mt-5 inline-flex items-center gap-3 text-sm font-semibold text-purple hover:text-white">
          <span className="flex size-9 items-center justify-center rounded-full bg-purple text-white">
            <FaPlay className="text-xs" />
          </span>
          Watch Story
        </button>
      </div>
    </article>
  </section>
)

export default StoriesHero
