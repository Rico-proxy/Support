import { ShimmerButton } from "@/components/ui/shimmer-button"
import { cards } from "./data"
import { FaArrowRightLong } from "./data"

const KnowledgeDesktop = () => {
  return (
    <section className="m-12 px-5 py-6 md:py-10">
      <div className="lg:items-start gap-6 grid lg:grid-cols-[1.1fr_2.2fr]">
        <div className="flex flex-col gap-6 pt-2">
          <div>
            <p className="font-semibold text-purple text-sm uppercase tracking-[0.22em]">
              Knowledge Is Power
            </p>
            <h2 className="mt-4 max-w-sm font-semibold text-white text-4xl tracking-tight">
              Understand. Heal. Grow.
            </h2>
            <p className="mt-5 max-w-md text-white/68 text-base leading-8">
              Addiction does not just affect you-it affects every part of your
              life. Understanding the why is the first step toward the how.
            </p>
          </div>
          <ShimmerButton
            background="transparent"
            shimmerColor="#7C3AED"
            className="justify-center border border-purple rounded-2xl w-fit h-12 font-semibold text-white text-base"
          >
            Learn More About Addiction{" "}
            <FaArrowRightLong className="text-white" />
          </ShimmerButton>
        </div>
        <div className="gap-4 grid sm:grid-cols-2">
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
                className="bg-[linear-gradient(180deg,rgba(14,18,44,0.96),rgba(11,16,34,0.92))] shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_40px_rgba(0,0,0,0.18)] px-6 py-4 border border-white/8 rounded-[1.75rem]"
              >
                <div
                  className={`mb-8 flex size-16 items-center justify-center rounded-full border border-white/6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] ${glowClassName}`}
                >
                  <Icon className={`text-[1.75rem] ${iconClassName}`} />
                </div>
                <h3 className="max-w-[14rem] font-semibold text-white text-2xl leading-tight">
                  {title}
                </h3>
                <p className="mt-4 max-w-[15rem] text-white/65 text-base leading-8">
                  {description}
                </p>
                <button className="inline-flex items-center gap-3 mt-8 font-semibold text-purple hover:text-white text-base transition-colors">
                  Explore <FaArrowRightLong />
                </button>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  )
}

export default KnowledgeDesktop
