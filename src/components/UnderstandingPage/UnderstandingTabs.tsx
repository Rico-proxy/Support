import { FaArrowRightLong, FaCheck } from "react-icons/fa6"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { tabContent, topics } from "./data"

const UnderstandingTabs = () => {
  return (
    <section className="px-5 py-6 md:px-8 md:py-8 lg:px-14">
      <Tabs defaultValue="addiction" className="gap-7">
        <TabsList className="w-full scrollbar-none justify-start gap-1 overflow-x-auto rounded-[1.25rem] border border-white/8 bg-[#0b102d]/90 p-2">
          {topics.map(({ value, label, icon: Icon }) => (
            <TabsTrigger
              key={value}
              value={value}
              className="h-14 min-w-max overflow-hidden rounded-xl px-4 text-xs text-white/55 md:px-5 md:text-sm data-active:bg-purple/15 data-active:text-purple"
            >
              <Icon />
              {label}
            </TabsTrigger>
          ))}
        </TabsList>

        {topics.map(({ value }) => {
          const content = tabContent[value]

          return (
            <TabsContent
              key={value}
              value={value}
              className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
            >
              <div className="px-1 md:px-4">
                <h2 className="text-3xl font-semibold text-white md:text-4xl">
                  {content.title}
                </h2>
                {content.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-5 max-w-2xl text-base leading-8 text-white/65"
                  >
                    {paragraph}
                  </p>
                ))}
                <div className="mt-7 flex flex-col gap-4">
                  {content.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-3 text-sm text-white/75 md:text-base"
                    >
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-purple text-xs text-white">
                        <FaCheck />
                      </span>
                      {point}
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative min-h-64 overflow-hidden rounded-[1.75rem] border border-purple/20 bg-[radial-gradient(circle_at_70%_30%,rgba(124,58,237,0.32),transparent_36%),linear-gradient(140deg,rgba(22,14,66,0.9),rgba(7,13,39,0.98))] p-7 md:p-9">
                <div className="absolute -right-8 -bottom-14 size-48 rounded-full border border-purple/35 opacity-70 blur-[1px]" />
                <div className="absolute right-10 bottom-4 size-28 rotate-45 rounded-[40%] border border-cyan-300/40 opacity-70" />
                <div className="relative z-10 max-w-xs">
                  <p className="text-sm font-semibold tracking-[0.18em] text-purple uppercase">
                    Key Takeaway
                  </p>
                  <p className="mt-5 text-lg leading-8 text-white/75">
                    Addiction changes the brain, but the brain can heal. With
                    the right support, change is possible.
                  </p>
                  <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-purple hover:text-white">
                    Explore More <FaArrowRightLong />
                  </button>
                </div>
              </div>
            </TabsContent>
          )
        })}
      </Tabs>
    </section>
  )
}

export default UnderstandingTabs
