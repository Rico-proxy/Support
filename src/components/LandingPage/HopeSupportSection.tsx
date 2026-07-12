import {
  FaArrowRightLong,
  FaCheck,
  FaLocationDot,
  FaPhoneVolume,
  FaPlay,
  FaUsers,
} from "react-icons/fa6"
import { LuNotebookPen } from "react-icons/lu"

import { hero2 } from "@/assets"

const affirmations = [
  "It's okay to ask for help",
  "It's okay to start over",
  "It's okay to take your time",
] as const

const resources = [
  {
    title: "24/7 Helpline",
    description: "Talk to a trained professional anytime.",
    icon: FaPhoneVolume,
    iconClassName: "text-emerald-300",
    glowClassName: "bg-emerald-500/14",
  },
  {
    title: "Online Community",
    description: "Connect with others who understand.",
    icon: FaUsers,
    iconClassName: "text-violet-300",
    glowClassName: "bg-violet-500/14",
  },
  {
    title: "Self-Help Tools",
    description: "Journals, trackers, and practical exercises.",
    icon: LuNotebookPen,
    iconClassName: "text-sky-300",
    glowClassName: "bg-sky-500/14",
  },
  {
    title: "Find Local Support",
    description: "Locate meetings and centers near you.",
    icon: FaLocationDot,
    iconClassName: "text-orange-300",
    glowClassName: "bg-orange-500/14",
  },
] as const

const HopeSupportSection = () => {
  return (
    <section className="px-5 py-6 md:py-10">
      <div className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
        <article className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(12,16,42,0.96),rgba(8,13,33,0.92))] shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_50px_rgba(0,0,0,0.2)]">
          <img
            src={hero2}
            alt="Person finding hope and healing"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,9,24,0.94)_0%,rgba(9,13,34,0.82)_36%,rgba(11,16,38,0.42)_70%,rgba(11,16,38,0.3)_100%)]" />
          <div className="relative z-10 flex h-full min-h-[42rem] max-w-[23rem] flex-col px-6 py-8 md:px-8 md:py-10">
            <div>
              <p className="text-sm font-semibold tracking-[0.22em] text-purple uppercase">
                You Matter
              </p>
              <h2 className="mt-5 text-4xl leading-tight font-semibold text-white">
                You deserve a life filled with hope.
              </h2>
              <p className="mt-6 text-lg leading-9 text-white/70">
                Recovery is not a straight line. It&apos;s a journey-and every
                step forward counts.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-5">
              {affirmations.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 text-white/88"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-purple text-sm text-white shadow-[0_0_24px_rgba(124,58,237,0.28)]">
                    <FaCheck />
                  </span>
                  <span className="text-lg font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-auto border-t border-white/8 pt-7">
              <button className="inline-flex items-center gap-4 text-left text-white transition-opacity hover:opacity-90">
                <span className="flex size-16 items-center justify-center rounded-full border border-purple/40 bg-purple/18 text-xl text-white shadow-[0_0_28px_rgba(124,58,237,0.25)]">
                  <FaPlay className="translate-x-px" />
                </span>
                <span className="text-2xl leading-tight font-medium">
                  Watch Stories
                  <br />
                  of Hope
                </span>
              </button>
            </div>
          </div>
        </article>

        <article className="rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(12,16,42,0.96),rgba(8,13,33,0.92))] px-6 py-8 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_50px_rgba(0,0,0,0.2)] md:px-8 md:py-10">
          <p className="text-sm font-semibold tracking-[0.22em] text-purple uppercase">
            Tools &amp; Support
          </p>
          <h2 className="mt-5 max-w-md text-3xl leading-tight font-semibold text-white">
            Help is here. Right now.
          </h2>

          <div className="mt-8 flex flex-col gap-4">
            {resources.map(
              ({
                title,
                description,
                icon: Icon,
                iconClassName,
                glowClassName,
              }) => (
                <button
                  key={title}
                  className="flex w-full items-center gap-4 rounded-[1.5rem] border border-white/6 bg-white/[0.03] px-4 py-4 text-left transition-colors hover:bg-white/[0.05]"
                >
                  <span
                    className={`flex size-14 shrink-0 items-center justify-center rounded-full border border-white/6 ${glowClassName}`}
                  >
                    <Icon className={`text-2xl ${iconClassName}`} />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-xl leading-tight font-semibold text-white">
                      {title}
                    </span>
                    <span className="mt-2 block text-base leading-7 text-white/62">
                      {description}
                    </span>
                  </span>

                  <span className="text-lg text-white/45">
                    <FaArrowRightLong />
                  </span>
                </button>
              )
            )}
          </div>

          <button className="mt-9 inline-flex items-center gap-3 text-lg font-semibold text-purple transition-colors hover:text-white">
            View All Resources
            <FaArrowRightLong />
          </button>
        </article>
      </div>
    </section>
  )
}

export default HopeSupportSection
