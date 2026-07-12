import { FaArrowRightLong, FaPhone } from "react-icons/fa6"

const CrisisBanner = () => {
  return (
    <section className="px-5 pb-4 md:px-8 md:pb-6 lg:px-14">
      <div className="relative overflow-hidden rounded-[1.5rem] border border-purple/25 bg-[radial-gradient(circle_at_80%_45%,rgba(124,58,237,0.3),transparent_35%),linear-gradient(110deg,rgba(29,13,71,0.94),rgba(8,13,42,0.96))] px-6 py-8 md:px-10 md:py-9">
        <div className="relative z-10 max-w-xl">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">In crisis? Get help now.</h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/65 md:text-base">If you are in immediate danger or thinking about hurting yourself, call 988 or 911 right away.</p>
          <button className="mt-5 inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-purple to-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(124,58,237,0.25)]">
            Call 988 Now
            <FaArrowRightLong />
          </button>
        </div>
        <span className="absolute top-1/2 right-8 flex size-20 -translate-y-1/2 items-center justify-center rounded-full border border-purple/50 bg-purple/15 text-3xl text-purple-200 shadow-[0_0_35px_rgba(124,58,237,0.25)] md:right-14 md:size-28 md:text-5xl">
          <FaPhone />
        </span>
      </div>
    </section>
  )
}

export default CrisisBanner
