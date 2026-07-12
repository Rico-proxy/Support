import BannerDesktop from "./BannerDesktop"
import BannerMobile from "./BannerMobile"

const Banner = () => {
  return (
    <>
      <div className="xl:hidden">
        <BannerMobile />
      </div>
      <div className="hidden xl:block">
        <BannerDesktop />
      </div>
    </>
  )
}

export default Banner
