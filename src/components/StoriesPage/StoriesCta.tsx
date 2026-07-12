import { FaPen } from "react-icons/fa6"

const StoriesCta = () => (
  <section className="px-5 pb-10 md:px-10 md:pb-14 lg:px-16"><div className="flex flex-col gap-5 rounded-[1.5rem] border border-purple/20 bg-purple/[0.09] px-6 py-7 md:flex-row md:items-center md:justify-between md:px-10"><div><h2 className="text-xl font-semibold text-white md:text-2xl">Your story can inspire someone else.</h2><p className="mt-2 text-sm text-white/60">There is hope in sharing.</p></div><button className="inline-flex items-center justify-center gap-2 rounded-xl bg-purple/25 px-5 py-3 font-semibold text-white hover:bg-purple/40">Share Your Story <FaPen /></button></div></section>
)

export default StoriesCta
