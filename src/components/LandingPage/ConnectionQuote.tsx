import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6"

const ConnectionQuote = () => {
  return (
    <section className="px-5 py-6 md:py-10">
      <div className="rounded-[2rem] border border-white/8 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.22),rgba(13,17,42,0.96)_42%,rgba(8,12,29,0.94)_100%)] px-6 py-10 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_50px_rgba(0,0,0,0.2)] md:px-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <p className="flex items-start gap-4 text-balance text-2xl font-medium leading-tight text-white md:text-5xl">
            <FaQuoteLeft className="mt-1 shrink-0 text-xl text-purple md:text-3xl" />
            <span>
              The opposite of addiction isn&apos;t sobriety. It&apos;s
              connection.
            </span>
            <FaQuoteRight className="mt-1 shrink-0 text-xl text-purple md:text-3xl" />
          </p>

          <p className="mt-6 text-xl font-semibold text-purple md:text-3xl">
            — Johann Hari
          </p>

          <div className="mt-7 flex items-center gap-3">
            <span className="size-2.5 rounded-full bg-purple/55" />
            <span className="size-2.5 rounded-full bg-purple" />
            <span className="size-2.5 rounded-full bg-purple/55" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConnectionQuote
