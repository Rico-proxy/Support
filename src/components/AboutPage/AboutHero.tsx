import { aboutHero } from "@/assets"
import { FaCompass, FaHeart, FaPeopleGroup, FaSeedling } from "react-icons/fa6"
import { ArrowUpRight } from "lucide-react"
const values = [
  ["Compassion", "We meet you where you are.", FaHeart],
  ["Respect", "You are valued and heard.", FaCompass],
  ["Hope", "We believe in second chances.", FaSeedling],
  ["Empowerment", "We help you move forward.", ArrowUpRight],
  ["Community", "We rise stronger together.", FaPeopleGroup],
] as const

const AboutHero = () => (
  <section className="relative m-4 mx-4 overflow-hidden rounded-[1.5rem] border border-purple/20 bg-[#080d2b] md:mx-8 lg:m-12 lg:mx-14">
    <div className="grid lg:grid-cols-[0.82fr_1.7fr_0.88fr]">
      <div className="relative z-10 px-6 py-9 md:px-10 md:py-12 lg:px-8 lg:py-10">
        <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
          About Rise
        </h1>
        <p className="mt-5 text-sm leading-6 text-white/65">
          Rise was created to remind you that you are not alone—and that a
          better life is possible.
        </p>
        <p className="mt-6 text-sm font-semibold text-white">Our Mission</p>
        <p className="mt-2 text-sm leading-6 text-white/60">
          To provide compassionate support, trusted resources, and a community
          that empowers people affected by addiction to heal and build
          meaningful lives.
        </p>
      </div>

      <div className="relative min-h-[22rem] overflow-hidden lg:min-h-[24rem]">
        <img
          src={aboutHero}
          alt="A hopeful path toward recovery"
          className="absolute inset-0 h-full w-full object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,13,43,0.75)_0%,transparent_28%,transparent_76%,rgba(8,13,43,0.7)_100%),linear-gradient(180deg,rgba(8,13,43,0.2)_45%,rgba(8,13,43,0.95)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 z-10 grid grid-cols-3 border-t border-white/10 bg-[#080d2b]/35 backdrop-blur-sm">
          <div className="px-2 py-4 text-center">
            <strong className="block text-xl text-white md:text-2xl">
              100K+
            </strong>
            <span className="text-[10px] text-white/55 md:text-xs">
              Lives Impacted
            </span>
          </div>
          <div className="border-x border-white/10 px-2 py-4 text-center">
            <strong className="block text-xl text-white md:text-2xl">
              24/7
            </strong>
            <span className="text-[10px] text-white/55 md:text-xs">
              Support Available
            </span>
          </div>
          <div className="px-2 py-4 text-center">
            <strong className="block text-xl text-white md:text-2xl">
              1900+
            </strong>
            <span className="text-[10px] text-white/55 md:text-xs">
              Partner Centers
            </span>
          </div>
        </div>
      </div>

      <div className="relative z-10 m-5 rounded-2xl border border-white/8 bg-[#0c1135]/85 p-5 backdrop-blur-md lg:m-5 lg:p-5">
        <h2 className="text-base font-semibold text-white">Our Values</h2>
        <div className="mt-4 flex flex-col gap-4">
          {values.map(([title, description, Icon]) => (
            <div key={title} className="flex gap-3">
              <Icon className="mt-0.5 shrink-0 text-sm text-purple" />
              <div>
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="mt-0.5 text-[11px] leading-4 text-white/50">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default AboutHero
