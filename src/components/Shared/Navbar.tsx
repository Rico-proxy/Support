import { logo } from "@/assets"
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
  { label: "Home", href: "#home" },
  { label: "Understanding", href: "#understanding" },
  { label: "Support", href: "#support" },
  { label: "Resources", href: "#resources" },
  { label: "Stories", href: "#stories" },
  { label: "About", href: "#about" },
]

const Navbar = () => {
  return (
    <header className="relative z-50 border-white/8 border-b bg-[#0F0A26]/90 backdrop-blur-xl">
      <div className="flex items-center justify-between px-5 py-3 md:px-8 md:py-4 lg:px-14">
        <a href="#home" aria-label="Rise home" className="shrink-0">
          <img src={logo} alt="Rise - You are not alone" className="h-14 w-auto md:h-16" />
        </a>

        <nav className="hidden items-center gap-8 md:flex lg:gap-12" aria-label="Main navigation">
          {links.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className={`relative py-2 text-base font-medium transition-colors hover:text-white lg:text-lg ${
                index === 0 ? "text-purple" : "text-white/80"
              }`}
            >
              {link.label}
              {index === 0 && <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-purple shadow-[0_0_12px_rgba(124,58,237,0.9)]" />}
            </a>
          ))}
        </nav>

        <RainbowButton className="hidden h-12 rounded-xl px-7 text-base font-semibold md:inline-flex lg:px-8">
          Get Help Now
        </RainbowButton>

        <Sheet>
          <SheetTrigger
            render={
              <button
                type="button"
                aria-label="Open navigation menu"
                className="flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-2xl text-white transition-colors hover:bg-purple/20 md:hidden"
              />
            }
          >
            <IoMenu />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[min(88vw,25rem)] border-l border-purple/20 bg-[#0F0A26]/98 p-0 text-white shadow-[-20px_0_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
          >
            <SheetHeader className="border-white/8 border-b px-6 pt-8 pb-6">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-purple/20 text-purple shadow-[0_0_25px_rgba(124,58,237,0.2)]">
                  <LuHeartHandshake className="text-2xl" />
                </span>
                <div>
                  <SheetTitle className="text-xl font-bold text-white">Rise</SheetTitle>
                  <SheetDescription className="mt-0.5 text-white/55">You&apos;re not alone.</SheetDescription>
                </div>
              </div>
            </SheetHeader>

            <nav className="flex flex-col gap-2 px-4 py-7" aria-label="Mobile navigation">
              {links.map((link, index) => (
                <SheetClose
                  key={link.label}
                  render={
                    <a
                      href={link.href}
                      className={`group flex items-center justify-between rounded-2xl px-4 py-4 text-lg font-semibold transition-colors ${
                        index === 0 ? "bg-purple/15 text-purple" : "text-white/75 hover:bg-white/[0.05] hover:text-white"
                      }`}
                    />
                  }
                >
                  {link.label}
                  <LuArrowUpRight className="text-lg opacity-50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </SheetClose>
              ))}
            </nav>

            <SheetFooter className="border-white/8 border-t px-6 py-6">
              <SheetClose
                render={
                  <RainbowButton className="h-12 w-full rounded-xl text-base font-semibold" />
                }
              >
                Get Help Now
              </SheetClose>
              <p className="mt-3 text-center text-xs leading-5 text-white/45">Private. Confidential. Always here for you.</p>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

export default Navbar
