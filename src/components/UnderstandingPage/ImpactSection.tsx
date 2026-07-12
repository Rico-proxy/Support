import { impacts } from "./data"

const ImpactSection = () => (
  <section className="px-5 pb-8 md:px-8 md:pb-10 lg:px-14">
    <div className="rounded-[1.5rem] border border-white/8 bg-[linear-gradient(180deg,rgba(8,14,39,0.95),rgba(6,11,31,0.95))] px-5 py-7 md:px-8">
      <h2 className="text-2xl font-semibold text-white">How Addiction Affects You</h2>
      <p className="mt-2 text-sm text-white/55">It can impact every area of life.</p>
      <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {impacts.map(({ title, description, icon: Icon, iconClassName, glowClassName }) => (
          <div key={title} className="flex items-center gap-4 border-white/8 sm:border-r sm:last:border-0 sm:px-4 first:pl-0">
            <span className={`flex size-12 shrink-0 items-center justify-center rounded-full border border-white/8 ${glowClassName}`}><Icon className={`text-xl ${iconClassName}`} /></span>
            <span><h3 className="font-semibold text-white">{title}</h3><p className="mt-1 text-sm leading-5 text-white/55">{description}</p></span>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default ImpactSection
