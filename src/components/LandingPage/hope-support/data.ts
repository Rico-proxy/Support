import { FaLocationDot, FaPhoneVolume, FaUsers } from "react-icons/fa6"
import { LuNotebookPen } from "react-icons/lu"

export const affirmations = [
  "It's okay to ask for help",
  "It's okay to start over",
  "It's okay to take your time",
] as const

export const resources = [
  {
    title: "24/7 Helpline",
    description: "Talk to a trained professional anytime.",
    icon: FaPhoneVolume,
    iconClassName: "text-emerald-300",
    glowClassName: "bg-emerald-500/14",
  },
  {
    title: "Online Community",
    description: "Connect with others who understand.",
    icon: FaUsers,
    iconClassName: "text-violet-300",
    glowClassName: "bg-violet-500/14",
  },
  {
    title: "Self-Help Tools",
    description: "Journals, trackers, and practical exercises.",
    icon: LuNotebookPen,
    iconClassName: "text-sky-300",
    glowClassName: "bg-sky-500/14",
  },
  {
    title: "Find Local Support",
    description: "Locate meetings and centers near you.",
    icon: FaLocationDot,
    iconClassName: "text-orange-300",
    glowClassName: "bg-orange-500/14",
  },
] as const
