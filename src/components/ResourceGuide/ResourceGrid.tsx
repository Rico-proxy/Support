import { FaArrowRightLong } from "react-icons/fa6"

import type { Resource } from "./data"

interface ResourceGridProps {
  resources: Resource[]
}

const ResourceGrid = ({ resources }: ResourceGridProps) => {
  return (
    <section className="px-5 py-8 md:px-10 md:py-12 lg:px-16">
      {resources.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {resources.map(
            ({
              title,
              description,
              action,
              icon: Icon,
              iconClassName,
              glowClassName,
            }) => (
              <article
                key={title}
                className="group flex min-h-56 flex-col rounded-[1.5rem] border border-white/8 bg-[linear-gradient(180deg,rgba(14,18,44,0.96),rgba(9,14,34,0.92))] px-6 py-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_40px_rgba(0,0,0,0.18)] transition-transform hover:-translate-y-1 hover:border-purple/30"
              >
                <div
                  className={`flex size-12 items-center justify-center rounded-2xl border border-white/8 ${glowClassName}`}
                >
                  <Icon className={`text-xl ${iconClassName}`} />
                </div>
                <h2 className="mt-6 text-lg font-semibold text-white">
                  {title}
                </h2>
                <p className="mt-3 max-w-[14rem] text-sm leading-6 text-white/58">
                  {description}
                </p>
                <button className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-purple transition-colors hover:text-white">
                  {action}
                  <FaArrowRightLong className="transition-transform group-hover:translate-x-1" />
                </button>
              </article>
            )
          )}
        </div>
      ) : (
        <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] px-6 py-12 text-center text-white/60">
          No resources match your search yet.
        </div>
      )}
    </section>
  )
}

export default ResourceGrid
