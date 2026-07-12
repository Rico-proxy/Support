import { FaBrain, FaCircleExclamation, FaArrowRightLong } from "react-icons/fa6"
import { GiLotus, GiSoundWaves } from "react-icons/gi"

export { FaArrowRightLong }

export const cards = [
  { title: "What is Addiction?", description: "Addiction is a chronic condition that affects the brain and behavior.", icon: FaBrain, iconClassName: "text-violet-300", glowClassName: "bg-violet-500/14" },
  { title: "Common Causes", description: "From trauma to stress, understand the underlying triggers.", icon: FaCircleExclamation, iconClassName: "text-orange-300", glowClassName: "bg-orange-500/14" },
  { title: "Signs & Symptoms", description: "Learn the signs in yourself or someone you care about.", icon: GiSoundWaves, iconClassName: "text-cyan-300", glowClassName: "bg-cyan-500/14" },
  { title: "Types of Addiction", description: "Substance, behavioral, emotional-there are many forms.", icon: GiLotus, iconClassName: "text-fuchsia-300", glowClassName: "bg-fuchsia-500/14" },
] as const
