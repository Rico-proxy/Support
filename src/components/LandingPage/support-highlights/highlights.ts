import {
  FaBrain,
  FaCompass,
  FaHeart,
  FaShieldHalved,
  FaUsers,
} from "react-icons/fa6"

export const highlights = [
  {
    title: "You Are Not Alone",
    description: "Millions face this. Millions heal.",
    icon: FaHeart,
    iconClassName: "text-fuchsia-300",
    glowClassName: "bg-fuchsia-500/14",
  },
  {
    title: "It's Not Your Fault",
    description: "Addiction is complex. Recovery is possible.",
    icon: FaShieldHalved,
    iconClassName: "text-sky-300",
    glowClassName: "bg-sky-500/14",
  },
  {
    title: "Understand",
    description: "Learn about addiction and how it affects you.",
    icon: FaBrain,
    iconClassName: "text-cyan-300",
    glowClassName: "bg-cyan-500/14",
  },
  {
    title: "Find Direction",
    description: "Explore tools, tips, and guidance that help.",
    icon: FaCompass,
    iconClassName: "text-emerald-300",
    glowClassName: "bg-emerald-500/14",
  },
  {
    title: "Build a New Future",
    description: "Small steps today create change tomorrow.",
    icon: FaUsers,
    iconClassName: "text-violet-300",
    glowClassName: "bg-violet-500/14",
  },
] as const
