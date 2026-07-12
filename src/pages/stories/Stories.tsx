import ConnectionQuote from "@/components/LandingPage/ConnectionQuote"
import StoriesCta from "@/components/StoriesPage/StoriesCta"
import StoriesHero from "@/components/StoriesPage/StoriesHero"
import StoryGrid from "@/components/StoriesPage/StoryGrid"

const Stories = () => (
  <div className="flex flex-col gap-2 md:gap-4">
    <StoriesHero />
    <StoryGrid />
    <ConnectionQuote />
    <StoriesCta />
  </div>
)

export default Stories
