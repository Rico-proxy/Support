import type { ReactNode } from "react"

type PillProps = {
  children: ReactNode
}

const Pill = ({ children }: PillProps) => {
  return (
    <div className="rounded-full border border-white/10 bg-black/50 px-4 py-2 text-sm text-white backdrop-blur-sm">
      {children}
    </div>
  )
}

export default Pill
