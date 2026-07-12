import { highlights } from "./highlights"

const SupportHighlightsDesktop = () => {
  return (
    <section className="bg-[linear-gradient(180deg,rgba(9,12,34,0.94),rgba(6,10,28,0.92))] shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_60px_rgba(0,0,0,0.28)] m-12 px-5 py-6 border border-white/8 rounded-[2rem]">
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 lg:divide-x divide-y md:divide-y-0 lg:divide-y-0 divide-white/6">
        {highlights.map(
          ({ title, description, icon: Icon, iconClassName, glowClassName }) => (
            <article
              key={title}
              className="flex flex-col items-center px-4 text-center"
            >
              <div
                className={`mb-5 flex size-16 items-center justify-center rounded-full border border-white/6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] ${glowClassName}`}
              >
                <Icon className={`text-2xl ${iconClassName}`} />
              </div>
              <h3 className="max-w-[12rem] font-semibold text-white text-lg">
                {title}
              </h3>
              <p className="mt-3 max-w-[13rem] text-white/65 text-sm leading-7">
                {description}
              </p>
            </article>
          )
        )}
      </div>
    </section>
  )
}

export default SupportHighlightsDesktop
