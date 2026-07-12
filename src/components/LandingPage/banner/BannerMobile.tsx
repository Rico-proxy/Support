import Pill from "@/components/Shared/Pill"
import { RainbowButton } from "@/components/ui/rainbow-button"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { hero } from "@/assets"
import { FaHeartbeat } from "react-icons/fa"
import { FaArrowRightLong } from "react-icons/fa6"
import { LuMessageCircleMore } from "react-icons/lu"

const BannerMobile = () => {
  return (
    <section className="relative m-4 rounded-[2rem] overflow-hidden">
      <img
        src={hero}
        alt="Support community"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative justify-items-center content-start gap-8 grid px-6 py-10 h-full">
        <Pill>
          <div className="flex items-center gap-2 font-semibold animate-pulse">
            <FaHeartbeat className="text-purple" />
            You are not alone
          </div>
        </Pill>
        <div className="place-items-start gap-5 grid grid-cols-1">
          <h1 className="w-60 font-bold text-4xl text-start">
            Together, we <span className="text-purple">rise</span> above.
          </h1>
          <div className="max-w-xs">
            <p className="font-medium text-white text-sm text-start leading-7">
              Addiction can feel deeply isolating, but no one has to face it
              alone. Healing begins when we reach out, listen without judgment,
              and create space for honesty, understanding, and support. Every
              step forward, no matter how small, takes courage.
            </p>
          </div>

          <div className="flex justify-center items-center gap-5 pt-5 w-full">
            <RainbowButton className="gap-2 shadow-lg px-4 rounded-2xl h-10 font-semibold text-sm">
              Get Help Now <FaArrowRightLong />
            </RainbowButton>
            <ShimmerButton
              background="transparent"
              shimmerColor="#7C3AED"
              className="gap-2 bg-transparent border border-purple h-10 font-semibold text-white text-sm"
            >
              Talk to Someone <LuMessageCircleMore className="text-white" />
            </ShimmerButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BannerMobile
