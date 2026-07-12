import { logo } from "@/assets"
import { IoMenu } from "react-icons/io5"
import { RainbowButton } from "../ui/rainbow-button"

const Navbar = () => {
  return (
    <div className="border-gray-900 border-b">
      <div className="flex flex-row items-center p-2">
        <div>
          <img src={logo} alt="Support community" className="w-32" />
        </div>
        <div>
          <RainbowButton className="gap-2 bg-purple hover:bg-purple/80 rounded-xl h-10 font-semibold text-white text-sm">
            Get Help Now
          </RainbowButton>
        </div>
        <div className="ml-auto text-white text-2xl cursor-pointer">
          <IoMenu />
        </div>
      </div>
    </div>
  )
}

export default Navbar
