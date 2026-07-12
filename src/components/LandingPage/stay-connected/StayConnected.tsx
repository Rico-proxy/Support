import StayConnectedDesktop from "./StayConnectedDesktop"
import StayConnectedMobile from "./StayConnectedMobile"

const StayConnected = () => (
  <>
    <div className="md:hidden">
      <StayConnectedMobile />
    </div>
    <div className="hidden md:block">
      <StayConnectedDesktop />
    </div>
  </>
)

export default StayConnected
