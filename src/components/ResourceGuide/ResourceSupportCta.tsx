import { FaArrowRightLong, FaComments } from "react-icons/fa6"

const ResourceSupportCta = () => {
  return (
    <section className="px-5 pb-10 md:px-10 md:pb-16 lg:px-16">
      <div className="relative overflow-hidden rounded-[1.75rem] border border-purple/25 bg-[radial-gradient(circle_at_80%_20%,rgba(124,58,237,0.25),transparent_34%),linear-gradient(110deg,rgba(36,17,91,0.8),rgba(14,18,54,0.92))] px-6 py-8 md:flex md:items-center md:justify-between md:px-10 md:py-9">
        <div className="relative z-10">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">Can&apos;t find what you need?</h2>
          <p className="mt-3 text-base text-white/65">We&apos;re here to help you find the right resource.</p>
        </div>
        <div className="relative z-10 mt-6 flex items-center gap-5 md:mt-0">
          <button className="inline-flex items-center gap-2 rounded-xl border border-purple/50 bg-purple/20 px-5 py-3 font-semibold text-white transition-colors hover:bg-purple/35">
            Contact Support
            <FaArrowRightLong />
          </button>
          <span className="flex size-14 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/5 text-2xl text-white shadow-[0_0_24px_rgba(34,211,238,0.15)]">
            <FaComments />
          </span>
        </div>
      </div>
    </section>
  )
}

export default ResourceSupportCta
