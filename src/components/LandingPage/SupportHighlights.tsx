import {
  FaBrain,
  FaCompass,
  FaHeart,
  FaShieldHalved,
  FaUsers,
} from "react-icons/fa6"

const highlights = [
  {
    title: "You Are Not Alone",
    description: "Millions face this. Millions heal.",
    icon: FaHeart,
    iconClassName: "text-fuchsia-300",
    glowClassName: "bg-fuchsia-500/14",
  },
  {
    title: "It's Not Your Fault",
    description: "Addiction is complex. Recovery is possible.",
    icon: FaShieldHalved,
    iconClassName: "text-sky-300",
    glowClassName: "bg-sky-500/14",
  },
  {
    title: "Understand",
    description: "Learn about addiction and how it affects you.",
    icon: FaBrain,
    iconClassName: "text-cyan-300",
    glowClassName: "bg-cyan-500/14",
  },
  {
    title: "Find Direction",
    description: "Explore tools, tips, and guidance that help.",
    icon: FaCompass,
    iconClassName: "text-emerald-300",
    glowClassName: "bg-emerald-500/14",
  },
  {
    title: "Build a New Future",
    description: "Small steps today create change tomorrow.",
    icon: FaUsers,
    iconClassName: "text-violet-300",
    glowClassName: "bg-violet-500/14",
  },
] as const

const SupportHighlights = () => {
  return (
    <section className="mt-6 px-5 py-6 md:rounded-[2rem] md:border md:border-white/8 md:bg-[linear-gradient(180deg,rgba(9,12,34,0.94),rgba(6,10,28,0.92))] md:shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_60px_rgba(0,0,0,0.28)]">
      <div className="grid grid-cols-1 gap-6 divide-y divide-white/6 md:grid-cols-2 md:divide-y-0 lg:grid-cols-5 lg:divide-x lg:divide-y-0">
        {highlights.map(
          ({
            title,
            description,
            icon: Icon,
            iconClassName,
            glowClassName,
          }) => (
            <article
              key={title}
              className="flex flex-col items-center px-4 pt-2 text-center first:pt-0 md:pt-0"
            >
              <div
                className={`mb-5 flex size-16 items-center justify-center rounded-full border border-white/6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] ${glowClassName}`}
              >
                <Icon className={`text-2xl ${iconClassName}`} />
              </div>
              <h3 className="max-w-[12rem] text-lg font-semibold text-white">
                {title}
              </h3>
              <p className="mt-3 max-w-[13rem] text-sm leading-7 text-white/65">
                {description}
              </p>
            </article>
          )
        )}
      </div>
    </section>
  )
}

export default SupportHighlights
