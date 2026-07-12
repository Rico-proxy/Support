import Banner from "@/components/LandingPage/Banner"
import ConnectionQuote from "@/components/LandingPage/ConnectionQuote"
import HopeSupportSection from "@/components/LandingPage/HopeSupportSection"
import KnowledgeSection from "@/components/LandingPage/KnowledgeSection"
import StayConnected from "@/components/LandingPage/StayConnected"
import SupportHighlights from "@/components/LandingPage/SupportHighlights"

const Home = () => {
  return (
    <div className="flex flex-col gap-6 h-full">
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
