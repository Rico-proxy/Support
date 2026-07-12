import { FaArrowRightLong, FaCompass, FaHeart, FaPeopleGroup, FaSeedling } from "react-icons/fa6"

const values = [
  ["Compassion", "We meet you where you are.", FaHeart],
  ["Respect", "Your story is valued and heard.", FaCompass],
  ["Hope", "We believe in second chances.", FaSeedling],
  ["Empowerment", "We help you move forward.", FaArrowRightLong],
  ["Community", "We rise stronger together.", FaPeopleGroup],
] as const

const AboutValues = () => <section className="px-5 py-8 md:px-8 md:py-10 lg:px-14"><div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]"><div className="relative overflow-hidden rounded-[1.5rem] border border-purple/20 bg-[radial-gradient(circle_at_50%_35%,rgba(124,58,237,0.3),transparent_36%),#090e30] p-6 md:p-9"><div className="mx-auto flex aspect-square max-w-sm items-center justify-center rounded-full border border-purple/45 bg-purple/10 shadow-[0_0_70px_rgba(124,58,237,0.22)]"><span className="text-5xl text-purple/80">✦</span></div><div className="mt-7 grid grid-cols-3 gap-3 text-center"><div><strong className="block text-xl text-white">100K+</strong><span className="text-xs text-white/50">Lives Impacted</span></div><div><strong className="block text-xl text-white">24/7</strong><span className="text-xs text-white/50">Support Available</span></div><div><strong className="block text-xl text-white">1900+</strong><span className="text-xs text-white/50">Partner Centers</span></div></div></div><div className="rounded-[1.5rem] border border-white/8 bg-[#0b112f] p-6 md:p-8"><h2 className="text-xl font-semibold text-white">Our Values</h2><div className="mt-5 flex flex-col gap-5">{values.map(([title, description, Icon]) => <div key={title} className="flex gap-3"><Icon className="mt-1 shrink-0 text-purple" /><span><h3 className="font-semibold text-white">{title}</h3><p className="mt-1 text-sm text-white/55">{description}</p></span></div>)}</div></div></div></section>

export default AboutValues
