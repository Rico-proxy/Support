import { FaMagnifyingGlass } from "react-icons/fa6"

import { resourceCategories, type ResourceCategory } from "./data"

interface ResourceHeroProps {
  search: string
  category: ResourceCategory
  onSearchChange: (value: string) => void
  onCategoryChange: (value: ResourceCategory) => void
}

const ResourceHero = ({
  search,
  category,
  onSearchChange,
  onCategoryChange,
}: ResourceHeroProps) => {
  return (
    <section className="px-5 md:px-10 lg:px-16 pt-8 md:pt-8 pb-2">
      <div className="justify-between items-center gap-4 md:gap-6 grid md:grid-cols-2">
        <div>
          <h1 className="font-semibold text-white text-4xl md:text-5xl leading-[1.08] tracking-tight">
            Resources to
            <br />
            Guide You
          </h1>
          <p className="mt-5 max-w-sm text-white/65 text-sm md:text-base leading-6">
            Explore tools, articles, and guides designed to support your healing
            and growth.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:pt-2 w-full">
          <label className="block relative">
            <span className="sr-only">Search resources</span>
            <input
              value={search}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search resources..."
              className="bg-white/[0.04] focus:bg-white/[0.07] backdrop-blur-md px-5 pr-14 border border-purple/25 focus:border-purple/70 rounded-full outline-none w-full h-12 md:h-13 text-white placeholder:text-white/35 text-sm transition-colors"
            />
            <FaMagnifyingGlass className="top-1/2 right-6 absolute text-purple -translate-y-1/2" />
          </label>
          <div className="flex flex-wrap gap-4">
            {resourceCategories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => onCategoryChange(item)}
                className={`rounded-full border px-5 py-1.5 text-xs font-medium transition-colors md:px-4 md:py-2 md:text-sm ${
                  category === item
                    ? "border-purple/60 bg-purple/25 text-white shadow-[0_0_18px_rgba(124,58,237,0.18)]"
                    : "border-white/8 bg-white/[0.03] text-white/55 hover:border-white/20 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResourceHero
