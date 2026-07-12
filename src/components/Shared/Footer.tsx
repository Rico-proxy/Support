import { logo } from "@/assets"
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6"

const exploreLinks = ["Understanding", "Support", "Resources", "Stories"] as const
const aboutLinks = ["Our Mission", "FAQ", "Blog", "Contact"] as const

const Footer = () => {
  return (
    <footer className="bg-black/70 px-5 py-10 border-white/6 border-t">
      <div className="gap-10 grid md:grid-cols-2 xl:grid-cols-[1.2fr_0.6fr_0.6fr_1fr_0.8fr]">
        <div>
          <img src={logo} alt="Rise logo" className="w-32" />
          <p className="mt-3 text-white/72 text-lg">You&apos;re not alone.</p>
          <p className="mt-8 text-white/42 text-base">
            © 2026 Rise Recovery. All rights reserved.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white text-xl">Explore</h4>
          <div className="flex flex-col gap-3 mt-5 text-white/65 text-lg">
            {exploreLinks.map((item) => (
              <a key={item} href="#" className="hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-white text-xl">About</h4>
          <div className="flex flex-col gap-3 mt-5 text-white/65 text-lg">
            {aboutLinks.map((item) => (
              <a key={item} href="#" className="hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="xl:pl-10 xl:border-white/20 xl:border-l">
          <h4 className="font-semibold text-white text-xl">Need Help Now?</h4>
          <div className="space-y-3 mt-5 text-lg">
            <p className="text-white/65">
              Call or Text: <span className="font-semibold text-purple">988</span>
            </p>
            <a href="#" className="block font-semibold text-purple hover:text-white transition-colors">
              Chat Online 24/7
            </a>
            <p className="pt-3 text-white/45">In an emergency, call 911</p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-white text-xl">Follow Us</h4>
          <div className="flex gap-4 mt-6">
            {[FaInstagram, FaFacebookF, FaTwitter, FaYoutube].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="flex justify-center items-center border border-white/10 hover:border-purple rounded-full size-14 text-white/72 hover:text-white text-xl transition-colors"
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
