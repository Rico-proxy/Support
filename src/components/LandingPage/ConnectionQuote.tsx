import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6"

const ConnectionQuote = () => {
  return (
    <section className="m-4 lg:m-8 px-5 py-6 md:py-10">
      <div className="bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.22),rgba(13,17,42,0.96)_42%,rgba(8,12,29,0.94)_100%)] shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_50px_rgba(0,0,0,0.2)] px-6 md:px-10 py-10 border border-white/8 rounded-[2rem]">
        <div className="flex flex-col items-center mx-auto max-w-5xl text-center">
          <p className="flex items-start gap-4 font-medium text-white text-2xl md:text-5xl text-balance leading-tight">
            <FaQuoteLeft className="mt-1 text-purple text-xl md:text-3xl shrink-0" />
            <span>
              The opposite of addiction isn&apos;t sobriety. It&apos;s
              connection.
            </span>
            <FaQuoteRight className="mt-1 text-purple text-xl md:text-3xl shrink-0" />
          </p>

          <p className="mt-6 font-semibold text-purple text-xl md:text-3xl">
            — Johann Hari
          </p>

          <div className="flex items-center gap-3 mt-7">
            <span className="bg-purple/55 rounded-full size-2.5" />
            <span className="bg-purple rounded-full size-2.5" />
            <span className="bg-purple/55 rounded-full size-2.5" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConnectionQuote
