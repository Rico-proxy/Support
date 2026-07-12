import { FaCircleInfo } from "react-icons/fa6"

import { supportAudience } from "./data"

const SupportAudience = () => {
  return (
    <section className="px-5 pb-8 text-center md:px-8 md:pb-10 lg:px-14">
      <h2 className="text-xl font-semibold text-white md:text-2xl">What kind of support fits you today?</h2>
      <div className="mt-5 flex flex-wrap justify-center gap-2.5">
        {supportAudience.map((item) => (
          <button key={item} className="inline-flex items-center gap-2 rounded-full border border-purple/20 bg-purple/[0.08] px-4 py-2.5 text-xs font-medium text-white/65 transition-colors hover:border-purple/50 hover:bg-purple/20 hover:text-white md:text-sm">
            <FaCircleInfo className="text-purple" />
            {item}
          </button>
        ))}
      </div>
    </section>
  )
}

export default SupportAudience
