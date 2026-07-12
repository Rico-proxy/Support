import { FaArrowRightLong, FaCommentDots } from "react-icons/fa6"

const UnderstandingCta = () => (
  <section className="px-5 pb-8 md:px-8 md:pb-12 lg:px-14">
    <div className="relative overflow-hidden rounded-[1.5rem] border border-purple/25 bg-[radial-gradient(circle_at_80%_20%,rgba(124,58,237,0.28),transparent_34%),linear-gradient(110deg,rgba(29,13,71,0.9),rgba(8,13,42,0.96))] px-6 py-8 md:flex md:items-center md:justify-between md:px-9">
      <div className="relative z-10"><h2 className="text-2xl font-semibold text-white md:text-3xl">Still have questions?</h2><p className="mt-3 text-base text-white/65">You&apos;re not alone in wondering.</p><p className="mt-1 text-sm text-white/45">Explore our resources or talk to someone today.</p></div>
      <div className="relative z-10 mt-6 flex items-center gap-5 md:mt-0"><button className="inline-flex items-center gap-2 rounded-xl border border-purple/50 bg-purple/20 px-5 py-3 font-semibold text-white hover:bg-purple/35">Explore Resources <FaArrowRightLong /></button><span className="flex size-14 items-center justify-center rounded-full border border-cyan-300/30 text-2xl text-cyan-200"><FaCommentDots /></span></div>
    </div>
  </section>
)

export default UnderstandingCta
