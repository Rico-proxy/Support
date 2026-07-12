import { FaArrowRightLong, FaCheck, FaPlay } from "react-icons/fa6"

import { hero2 } from "@/assets"

import { affirmations, resources } from "./data"

const HopeSupportDesktop = () => {
  return (
    <section className="m-12 px-5 py-6 md:py-10">
      <div className="gap-6 grid xl:grid-cols-[1.08fr_0.92fr]">
        <article className="relative bg-[linear-gradient(180deg,rgba(12,16,42,0.96),rgba(8,13,33,0.92))] shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_50px_rgba(0,0,0,0.2)] border border-white/8 rounded-[2rem] overflow-hidden">
          <img
            src={hero2}
            alt="Person finding hope and healing"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,9,24,0.94)_0%,rgba(9,13,34,0.82)_36%,rgba(11,16,38,0.42)_70%,rgba(11,16,38,0.3)_100%)]" />
          <div className="z-10 relative flex flex-col px-6 md:px-8 py-8 md:py-10 max-w-[23rem] h-full min-h-[42rem]">
            <div>
              <p className="font-semibold text-purple text-sm uppercase tracking-[0.22em]">
                You Matter
              </p>
              <h2 className="mt-5 font-semibold text-white text-4xl leading-tight">
                You deserve a life filled with hope.
              </h2>
              <p className="mt-6 text-white/70 text-lg leading-9">
                Recovery is not a straight line. It&apos;s a journey-and every
                step forward counts.
              </p>
            </div>
            <div className="flex flex-col gap-5 mt-8">
              {affirmations.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 text-white/88"
                >
                  <span className="flex justify-center items-center bg-purple shadow-[0_0_24px_rgba(124,58,237,0.28)] rounded-full size-8 text-white text-sm shrink-0">
                    <FaCheck />
                  </span>
                  <span className="font-medium text-lg">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-auto pt-7 border-white/8 border-t">
              <button className="inline-flex items-center gap-4 hover:opacity-90 text-white text-left transition-opacity">
                <span className="flex justify-center items-center bg-purple/18 shadow-[0_0_28px_rgba(124,58,237,0.25)] border border-purple/40 rounded-full size-16 text-white text-xl">
                  <FaPlay className="translate-x-px" />
                </span>
                <span className="font-medium text-2xl leading-tight">
                  Watch Stories
                  <br />
                  of Hope
                </span>
              </button>
            </div>
          </div>
        </article>
        <HopeSupportResources resources={resources} />
      </div>
    </section>
  )
}

const HopeSupportResources = ({
  resources,
}: {
  resources: typeof import("./data").resources
}) => (
  <article className="bg-[linear-gradient(180deg,rgba(12,16,42,0.96),rgba(8,13,33,0.92))] shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_50px_rgba(0,0,0,0.2)] px-6 md:px-8 py-8 md:py-10 border border-white/8 rounded-[2rem]">
    <p className="font-semibold text-purple text-sm uppercase tracking-[0.22em]">
      Tools &amp; Support
    </p>
    <h2 className="mt-5 max-w-md font-semibold text-white text-3xl leading-tight">
      Help is here. Right now.
    </h2>
    <div className="flex flex-col gap-4 mt-8">
      {resources.map(
        ({ title, description, icon: Icon, iconClassName, glowClassName }) => (
          <button
            key={title}
            className="flex items-center gap-4 bg-white/[0.03] hover:bg-white/[0.05] px-4 py-4 border border-white/6 rounded-[1.5rem] w-full text-left transition-colors"
          >
            <span
              className={`flex size-14 shrink-0 items-center justify-center rounded-full border border-white/6 ${glowClassName}`}
            >
              <Icon className={`text-2xl ${iconClassName}`} />
            </span>
            <span className="flex-1 min-w-0">
              <span className="block font-semibold text-white text-xl leading-tight">
                {title}
              </span>
              <span className="block mt-2 text-white/62 text-base leading-7">
                {description}
              </span>
            </span>
            <span className="text-white/45 text-lg">
              <FaArrowRightLong />
            </span>
          </button>
        )
      )}
    </div>
    <button className="inline-flex items-center gap-3 mt-9 font-semibold text-purple hover:text-white text-lg transition-colors">
      View All Resources <FaArrowRightLong />
    </button>
  </article>
)

export default HopeSupportDesktop
