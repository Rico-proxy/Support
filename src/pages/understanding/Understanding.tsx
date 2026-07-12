import ImpactSection from "@/components/UnderstandingPage/ImpactSection"
import UnderstandingCta from "@/components/UnderstandingPage/UnderstandingCta"
import UnderstandingHero from "@/components/UnderstandingPage/UnderstandingHero"
import UnderstandingTabs from "@/components/UnderstandingPage/UnderstandingTabs"

const Understanding = () => (
  <div className="flex flex-col gap-2 md:gap-4">
    <UnderstandingHero />
    <UnderstandingTabs />
    <ImpactSection />
    <UnderstandingCta />
  </div>
)

export default Understanding
