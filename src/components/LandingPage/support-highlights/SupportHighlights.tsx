import SupportHighlightsDesktop from "./SupportHighlightsDesktop"
import SupportHighlightsMobile from "./SupportHighlightsMobile"

const SupportHighlights = () => {
  return (
    <>
      <div className="md:hidden">
        <SupportHighlightsMobile />
      </div>
      <div className="hidden md:block">
        <SupportHighlightsDesktop />
      </div>
    </>
  )
}

export default SupportHighlights
