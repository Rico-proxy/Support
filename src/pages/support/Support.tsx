import CrisisBanner from "@/components/SupportPage/CrisisBanner"
import SupportAudience from "@/components/SupportPage/SupportAudience"
import SupportHero from "@/components/SupportPage/SupportHero"
import SupportOptions from "@/components/SupportPage/SupportOptions"
import SupportReassurance from "@/components/SupportPage/SupportReassurance"

const Support = () => {
  return (
    <div className="flex flex-col gap-2 md:gap-4">
      <SupportHero />
      <SupportOptions />
      <SupportAudience />
      <CrisisBanner />
      <SupportReassurance />
    </div>
  )
}

export default Support
