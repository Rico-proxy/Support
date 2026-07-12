import { logo } from "@/assets"
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6"

const exploreLinks = ["Understanding", "Support", "Resources", "Stories"] as const
const aboutLinks = ["Our Mission", "FAQ", "Blog", "Contact"] as const

const Footer = () => {
  return (
    <footer className="border-t border-white/6 px-5 py-10">
      <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-[1.2fr_0.6fr_0.6fr_1fr_0.8fr]">
        <div>
          <img src={logo} alt="Rise logo" className="w-32" />
          <p className="mt-3 text-lg text-white/72">You&apos;re not alone.</p>
          <p className="mt-8 text-base text-white/42">
            © 2026 Rise Recovery. All rights reserved.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-white">Explore</h4>
          <div className="mt-5 flex flex-col gap-3 text-lg text-white/65">
            {exploreLinks.map((item) => (
              <a key={item} href="#" className="transition-colors hover:text-white">
                {item}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-white">About</h4>
          <div className="mt-5 flex flex-col gap-3 text-lg text-white/65">
            {aboutLinks.map((item) => (
              <a key={item} href="#" className="transition-colors hover:text-white">
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="xl:border-l xl:border-white/6 xl:pl-10">
          <h4 className="text-xl font-semibold text-white">Need Help Now?</h4>
          <div className="mt-5 space-y-3 text-lg">
            <p className="text-white/65">
              Call or Text: <span className="font-semibold text-purple">988</span>
            </p>
            <a href="#" className="block font-semibold text-purple transition-colors hover:text-white">
              Chat Online 24/7
            </a>
            <p className="pt-3 text-white/45">In an emergency, call 911</p>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-white">Follow Us</h4>
          <div className="mt-6 flex gap-4">
            {[FaInstagram, FaFacebookF, FaTwitter, FaYoutube].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="flex size-14 items-center justify-center rounded-full border border-white/10 text-xl text-white/72 transition-colors hover:border-purple hover:text-white"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
