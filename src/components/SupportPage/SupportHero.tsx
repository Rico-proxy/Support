import { supportHero } from "@/assets"
import { FaArrowRightLong, FaCommentDots } from "react-icons/fa6"

const SupportHero = () => {
  return (
    <section className="relative m-4 overflow-hidden rounded-[1.75rem] border border-purple/20 bg-[#0b0d28] md:mx-8 lg:m-12">
      <img
        src={supportHero}
        alt="People reaching out to support one another"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-65"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,8,24,0.98)_0%,rgba(8,10,34,0.88)_38%,rgba(30,13,69,0.48)_72%,rgba(21,10,54,0.62)_100%)]" />
      <div className="relative z-10 max-w-xl px-6 py-12 md:px-10 md:py-16 lg:px-14 lg:py-20">
        <h1 className="max-w-lg text-4xl leading-[1.08] font-semibold tracking-tight text-white md:text-6xl">
          You don&apos;t have to
          <br />
          do this alone.
        </h1>
        <p className="mt-6 max-w-md text-base leading-7 text-white/70 md:text-lg">
          Whether you need someone to talk to, a safe community, or professional
          help—we&apos;re here.
        </p>
        <button className="mt-7 inline-flex items-center gap-3 text-sm font-semibold text-purple transition-colors hover:text-white">
          <FaCommentDots />
          Help is here. Hope is real.
          <FaArrowRightLong />
        </button>
      </div>
    </section>
  )
}

export default SupportHero
