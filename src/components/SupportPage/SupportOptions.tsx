import { FaArrowRightLong } from "react-icons/fa6"

import { supportOptions } from "./data"

const SupportOptions = () => {
  return (
    <section className="px-5 py-8 md:px-8 md:py-10 lg:px-14">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {supportOptions.map(({ title, description, primaryAction, secondaryAction, icon: Icon, iconClassName, glowClassName }) => (
          <article key={title} className="flex min-h-64 flex-col rounded-[1.5rem] border border-white/8 bg-[linear-gradient(180deg,rgba(9,15,43,0.98),rgba(7,12,35,0.94))] px-6 py-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_40px_rgba(0,0,0,0.18)]">
            <div className={`flex size-12 items-center justify-center rounded-full border border-white/8 ${glowClassName}`}>
              <Icon className={`text-xl ${iconClassName}`} />
            </div>
            <h2 className="mt-6 text-lg font-semibold text-white">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-white/60">{description}</p>
            <div className="mt-auto flex flex-col gap-2 pt-6">
              <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-purple/25 px-3 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-purple/45">
                {primaryAction}
                <FaArrowRightLong />
              </button>
              {secondaryAction && (
                <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-purple/25 bg-purple/10 px-3 py-2.5 text-sm font-semibold text-purple transition-colors hover:bg-purple/25">
                  {secondaryAction}
                  <FaArrowRightLong />
                </button>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SupportOptions
