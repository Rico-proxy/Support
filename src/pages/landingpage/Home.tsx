import Banner from "@/components/LandingPage/banner/Banner"
import ConnectionQuote from "@/components/LandingPage/ConnectionQuote"
import HopeSupportSection from "@/components/LandingPage/hope-support/HopeSupportSection"
import KnowledgeSection from "@/components/LandingPage/knowledge/KnowledgeSection"
import StayConnected from "@/components/LandingPage/stay-connected/StayConnected"
import SupportHighlights from "@/components/LandingPage/support-highlights/SupportHighlights"

const Home = () => {
  return (
    <div className="flex h-full flex-col gap-6 md:gap-10">
      <Banner />
      <SupportHighlights />
      <KnowledgeSection />
      <HopeSupportSection />
      <ConnectionQuote />
      <StayConnected />
    </div>
  )
}

export default Home
