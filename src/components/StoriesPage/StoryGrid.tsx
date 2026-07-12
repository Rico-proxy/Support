import { FaArrowRightLong } from "react-icons/fa6"
import { stories } from "./data"

const StoryGrid = () => (
  <section className="px-5 py-8 md:px-10 md:py-10 lg:px-16">
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stories.map((story) => (
        <article key={story.title} className="overflow-hidden rounded-[1.5rem] border border-white/8 bg-[#0b112f] shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_40px_rgba(0,0,0,0.18)]">
          <img src={story.image} alt="" className="h-36 w-full object-cover" />
          <div className="flex min-h-36 flex-col px-5 py-5"><h2 className="text-lg font-semibold text-white">{story.title}</h2><p className="mt-3 text-sm leading-6 text-white/60">{story.description}</p><button className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-purple">Read Story <FaArrowRightLong /></button></div>
        </article>
      ))}
    </div>
  </section>
)

export default StoryGrid
