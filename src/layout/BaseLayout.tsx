import { Outlet } from "react-router-dom"

import Footer from "@/components/Shared/Footer"
import Navbar from "@/components/Shared/Navbar"
import { Meteors } from "@/components/ui/meteors"

const BaseLayout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="relative z-30 bg-background">
        <Navbar />
      </div>

      <main>
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <Meteors
            number={100}
            className="bg-white/80 shadow-[0_0_0_1px_#ffffff20] md:z-20"
          />
        </div>

        <div className="relative z-20 w-full">
          <Outlet />
        </div>
      </main>

      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  )
}

export default BaseLayout
