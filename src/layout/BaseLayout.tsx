import { Outlet } from "react-router-dom"

import Footer from "@/components/Shared/Footer"
import Navbar from "@/components/Shared/Navbar"
import { Meteors } from "@/components/ui/meteors"

const BaseLayout = () => {
  return (
    <div className="bg-background min-h-screen text-foreground">
      <div className="z-30 relative bg-background">
        <Navbar />
      </div>

      <main>
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <Meteors
            number={100}
            className="bg-white/80 shadow-[0_0_0_1px_#ffffff20]"
          />
        </div>

        <div className="z-20 relative w-full">
          <Outlet />
        </div>
      </main>

      <div className="z-20 relative">
        <Footer />
      </div>
    </div>
  )
}

export default BaseLayout
