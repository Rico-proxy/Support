import {  understandingHero } from "@/assets"

const UnderstandingHero = () => (
  <section className="relative bg-[#080d2b] m-4 lg:m-12 mx-4 md:mx-8 lg:mx-14 border border-blue-400/15 rounded-[1.75rem] overflow-hidden">
    <img
      src={understandingHero}
      alt="Understanding addiction and recovery"
      className="absolute inset-0 opacity-35 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,8,24,0.98)_0%,rgba(7,11,35,0.9)_42%,rgba(23,9,58,0.4)_100%)]" />
    <div className="z-10 relative px-6 md:px-10 lg:px-14 py-12 md:py-14 lg:py-16 max-w-md">
      <h1 className="font-semibold text-white text-4xl md:text-6xl leading-[1.08] tracking-tight">
        Understanding
        <br />
        Addiction
      </h1>
      <p className="mt-6 text-white/65 text-base md:text-lg leading-7">
        Knowledge brings clarity. Clarity brings choice. You have the power to
        change your story.
      </p>
    </div>
  </section>
)

export default UnderstandingHero
