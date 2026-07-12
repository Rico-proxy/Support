import { FaArrowRightLong, FaBrain, FaCircleExclamation } from "react-icons/fa6"
import { GiLotus, GiSoundWaves } from "react-icons/gi"

import { ShimmerButton } from "../ui/shimmer-button"

const cards = [
  {
    title: "What is Addiction?",
    description:
      "Addiction is a chronic condition that affects the brain and behavior.",
    icon: FaBrain,
    iconClassName: "text-violet-300",
    glowClassName: "bg-violet-500/14",
  },
  {
    title: "Common Causes",
    description: "From trauma to stress, understand the underlying triggers.",
    icon: FaCircleExclamation,
    iconClassName: "text-orange-300",
    glowClassName: "bg-orange-500/14",
  },
  {
    title: "Signs & Symptoms",
    description: "Learn the signs in yourself or someone you care about.",
    icon: GiSoundWaves,
    iconClassName: "text-cyan-300",
    glowClassName: "bg-cyan-500/14",
  },
  {
    title: "Types of Addiction",
    description: "Substance, behavioral, emotional-there are many forms.",
    icon: GiLotus,
    iconClassName: "text-fuchsia-300",
    glowClassName: "bg-fuchsia-500/14",
  },
] as const

const KnowledgeSection = () => {
  return (
    <section className="px-5 py-6 md:py-10">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_2.2fr] lg:items-start">
        <div className="flex flex-col gap-6 pt-2">
          <div>
            <p className="text-sm font-semibold tracking-[0.22em] text-purple uppercase">
              Knowledge Is Power
            </p>
            <h2 className="mt-4 max-w-sm text-4xl font-semibold tracking-tight text-white">
              Understand. Heal. Grow.
            </h2>
            <p className="mt-5 max-w-md text-base leading-8 text-white/68">
              Addiction does not just affect you-it affects every part of your
              life. Understanding the why is the first step toward the how.
            </p>
          </div>

          <div className="pt-2">
            <ShimmerButton
              background="transparent"
              shimmerColor="#7C3AED"
              className="mx-auto h-10 w-fit justify-center rounded-2xl border border-purple text-base font-semibold text-white"
            >
              Learn More About Addiction
              <FaArrowRightLong className="text-white" />
            </ShimmerButton>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {cards.map(
            ({
              title,
              description,
              icon: Icon,
              iconClassName,
              glowClassName,
            }) => (
              <article
                key={title}
                className="rounded-[1.75rem] border border-white/8 bg-[linear-gradient(180deg,rgba(14,18,44,0.96),rgba(11,16,34,0.92))] px-6 py-7 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_40px_rgba(0,0,0,0.18)]"
              >
                <div
                  className={`mb-8 flex size-16 items-center justify-center rounded-full border border-white/6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] ${glowClassName}`}
                >
                  <Icon className={`text-[1.75rem] ${iconClassName}`} />
                </div>

                <h3 className="max-w-[14rem] text-2xl leading-tight font-semibold text-white">
                  {title}
                </h3>
                <p className="mt-4 max-w-[15rem] text-base leading-8 text-white/65">
                  {description}
                </p>

                <button className="mt-8 inline-flex items-center gap-3 text-base font-semibold text-purple transition-colors hover:text-white">
                  Explore
                  <FaArrowRightLong />
                </button>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  )
}

export default KnowledgeSection
