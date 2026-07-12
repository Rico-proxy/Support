import { logo } from "@/assets"
import { useLocation } from "react-router-dom"
import { IoMenu } from "react-icons/io5"
import { LuArrowUpRight, LuHeartHandshake } from "react-icons/lu"

import { RainbowButton } from "../ui/rainbow-button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet"

const links = [
  { label: "Home", href: "/" },
  { label: "Understanding", href: "/understanding" },
  { label: "Support", href: "/support" },
  { label: "Resources", href: "/resources" },
  { label: "Stories", href: "/stories" },
  { label: "About", href: "/about" },
]

const Navbar = () => {
  const { pathname } = useLocation()

  return (
    <header className="z-50 relative bg-[#0F0A26]/90 backdrop-blur-xl border-white/8 border-b">
      <div className="flex justify-between items-center px-5 md:px-8 lg:px-14 py-3 md:py-4">
        <a href="#home" aria-label="Rise home" className="relative shrink-0">
          <img src={logo} alt="Rise" className="w-auto h-14 md:h-16" />
          <span className="hidden md:block bottom-0.5 left-14 absolute font-medium text-white/60 text-xs whitespace-nowrap">
            You&apos;re not alone.
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 lg:gap-12" aria-label="Main navigation">
          {links.map((link) => {
            const isActive = ["/resources", "/support", "/understanding", "/stories", "/about"].includes(link.href)
              ? pathname === link.href
              : link.href === "/" && pathname === "/"

            return (
            <a
              key={link.label}
              href={link.href}
              className={`relative py-2 text-base font-medium transition-colors hover:text-white lg:text-lg ${
                isActive ? "text-purple" : "text-white/80"
              }`}
            >
              {link.label}
              {isActive && <span className="-bottom-1 absolute inset-x-0 bg-purple shadow-[0_0_12px_rgba(124,58,237,0.9)] rounded-full h-0.5" />}
            </a>
            )
          })}
        </nav>

        <RainbowButton className="hidden md:inline-flex px-7 lg:px-8 rounded-xl h-12 font-semibold text-base">
          Get Help Now
        </RainbowButton>

        <Sheet>
          <SheetTrigger
            render={
              <button
                type="button"
                aria-label="Open navigation menu"
                className="md:hidden flex justify-center items-center bg-white/[0.05] hover:bg-purple/20 border border-white/10 rounded-xl size-11 text-white text-2xl transition-colors"
              />
            }
          >
            <IoMenu />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-[#0F0A26]/98 shadow-[-20px_0_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl p-0 border-purple/20 border-l w-[min(88vw,25rem)] text-white"
          >
            <SheetHeader className="px-6 pt-8 pb-6 border-white/8 border-b">
              <div className="flex items-center gap-3">
                <span className="flex justify-center items-center bg-purple/20 shadow-[0_0_25px_rgba(124,58,237,0.2)] rounded-2xl size-11 text-purple">
                  <LuHeartHandshake className="text-2xl" />
                </span>
                <div>
                  <SheetTitle className="font-bold text-white text-xl">Rise</SheetTitle>
                  <SheetDescription className="mt-0.5 text-white/55">You&apos;re not alone.</SheetDescription>
                </div>
              </div>
            </SheetHeader>

            <nav className="flex flex-col gap-2 px-4 py-7" aria-label="Mobile navigation">
              {links.map((link) => (
                <SheetClose
                  key={link.label}
                  render={
                    <a
                      href={link.href}
                      className={`group flex items-center justify-between rounded-2xl px-4 py-4 text-lg font-semibold transition-colors ${
                        (["/resources", "/support", "/understanding", "/stories", "/about"].includes(link.href) && pathname === link.href) || (link.href === "/" && pathname === "/")
                          ? "bg-purple/15 text-purple"
                          : "text-white/75 hover:bg-white/[0.05] hover:text-white"
                      }`}
                    />
                  }
                >
                  {link.label}
                  <LuArrowUpRight className="opacity-50 text-lg transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </SheetClose>
              ))}
            </nav>

            <SheetFooter className="px-6 py-6 border-white/8 border-t">
              <SheetClose
                render={
                  <RainbowButton className="rounded-xl w-full h-12 font-semibold text-base" />
                }
              >
                Get Help Now
              </SheetClose>
              <p className="mt-3 text-white/45 text-xs text-center leading-5">Private. Confidential. Always here for you.</p>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

export default Navbar
