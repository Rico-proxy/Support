import HopeSupportDesktop from "./HopeSupportDesktop"
import HopeSupportMobile from "./HopeSupportMobile"

const HopeSupportSection = () => {
  return (
    <>
      <div className="md:hidden">
        <HopeSupportMobile />
      </div>
      <div className="hidden md:block">
        <HopeSupportDesktop />
      </div>
    </>
  )
}

export default HopeSupportSection
