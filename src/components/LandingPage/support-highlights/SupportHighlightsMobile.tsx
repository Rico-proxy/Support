import { highlights } from "./highlights"

const SupportHighlightsMobile = () => {
  return (
    <section className="mt-6 px-5 py-6">
      <div className="grid grid-cols-1 gap-6 divide-y divide-white/6">
        {highlights.map(
          ({ title, description, icon: Icon, iconClassName, glowClassName }) => (
            <article
              key={title}
              className="flex flex-col items-center px-4 pt-2 text-center first:pt-0"
            >
              <div
                className={`mb-5 flex size-16 items-center justify-center rounded-full border border-white/6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] ${glowClassName}`}
              >
                <Icon className={`text-2xl ${iconClassName}`} />
              </div>
              <h3 className="max-w-[12rem] text-lg font-semibold text-white">
                {title}
              </h3>
              <p className="mt-3 max-w-[13rem] text-sm leading-7 text-white/65">
                {description}
              </p>
            </article>
          )
        )}
      </div>
    </section>
  )
}

export default SupportHighlightsMobile
