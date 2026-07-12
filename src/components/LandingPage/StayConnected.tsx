import { RainbowButton } from "../ui/rainbow-button"

const StayConnected = () => {
  return (
    <section className="px-5 pb-6 md:pb-10">
      <div className="rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(10,14,35,0.96),rgba(7,11,28,0.92))] px-6 py-8 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_50px_rgba(0,0,0,0.18)] md:px-10 md:py-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <h3 className="text-3xl font-semibold text-white">
              Stay Connected
            </h3>
            <p className="mt-4 max-w-xl text-lg leading-8 text-white/65">
              Get weekly encouragement, tips, and resources straight to your
              inbox.
            </p>
          </div>

          <form className="grid gap-4 sm:grid-cols-[1fr_auto]">
            <input
              type="email"
              placeholder="Your email address"
              className="h-14 rounded-2xl border border-white/8 bg-transparent px-5 text-base text-white outline-none placeholder:text-white/28 focus:border-purple"
            />
            <RainbowButton className="h-14 rounded-2xl px-8 text-base font-semibold shadow-lg shadow-purple/20">
              Subscribe
            </RainbowButton>
          </form>
        </div>
      </div>
    </section>
  )
}

export default StayConnected
