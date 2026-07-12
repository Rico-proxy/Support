import Pill from "@/components/Shared/Pill"
import { RainbowButton } from "@/components/ui/rainbow-button"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { hero } from "@/assets"
import { FaHeartbeat, FaLock } from "react-icons/fa"
import { FaArrowRightLong } from "react-icons/fa6"
import { LuMessageCircleMore } from "react-icons/lu"

const BannerDesktop = () => {
  return (
    <section className="relative grid grid-cols-[minmax(0,1fr)_minmax(32rem,44rem)] items-stretch gap-10 overflow-hidden px-12 py-12 2xl:grid-cols-[minmax(0,1fr)_minmax(36rem,48rem)] 2xl:px-16">
      <div className="pointer-events-none absolute inset-0 z-10 bg-black/20" />

      <div className="relative z-20 flex items-center">
        <div className="max-w-[41rem]">
          <Pill>
            <div className="flex animate-pulse items-center gap-2 text-base font-semibold 2xl:text-lg">
              <FaHeartbeat className="text-purple" />
              You are not alone
            </div>
          </Pill>

          <h1 className="mt-10 max-w-[34rem] text-7xl leading-[0.94] font-bold tracking-[-0.04em] text-white 2xl:max-w-[38rem] 2xl:text-8xl">
            Together, we <span className="text-purple">rise</span> above.
          </h1>

          <p className="mt-9 max-w-[32rem] text-xl leading-[1.7] text-white/76 2xl:max-w-[35rem] 2xl:text-2xl">
            Addiction can feel isolating. Healing happens when we connect,
            understand, and take that first brave step-together.
          </p>

          <div className="mt-10 flex items-center gap-6">
            <RainbowButton className="h-11 gap-3 rounded-lg px-9 text-base font-semibold shadow-[0_18px_40px_rgba(80,126,255,0.2)] 2xl:h-18 2xl:px-10">
              I Need Help <FaArrowRightLong />
            </RainbowButton>
            <ShimmerButton
              background="transparent"
              shimmerColor="#7C3AED"
              className="h-12 gap-3 rounded-lg border border-purple/80 px-9 text-base font-semibold text-white 2xl:h-18 2xl:px-10"
            >
              Talk to Someone <LuMessageCircleMore className="text-white" />
            </ShimmerButton>
          </div>

          <div className="mt-9 flex items-center gap-4 text-white/58">
            <FaLock className="text-lg 2xl:text-xl" />
            <p className="text-lg font-medium 2xl:text-2xl">
              Private. Confidential. Always here for you.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-0 -my-12 -mr-12 overflow-hidden 2xl:-my-16 2xl:-mr-16">
        <img
          src={hero}
          alt="Support community"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_40%),linear-gradient(90deg,rgba(10,14,35,0.98)_0%,rgba(10,14,35,0.72)_10%,rgba(10,14,35,0.08)_34%,transparent_52%),linear-gradient(180deg,rgba(10,14,35,0.9)_0%,transparent_18%,transparent_82%,rgba(6,10,28,0.96)_100%)]" />
      </div>
    </section>
  )
}

export default BannerDesktop
