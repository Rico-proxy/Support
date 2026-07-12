import {
  FaArrowRightLong,
  FaBookOpen,
  FaHeart,
  FaLeaf,
  FaPersonWalking,
  FaPlay,
  FaSpa,
  FaUserGroup,
} from "react-icons/fa6"

export const resourceCategories = [
  "All",
  "Articles",
  "Videos",
  "Workbooks",
  "Tools",
  "For Families",
] as const

export const resources = [
  {
    title: "Recovery 101",
    description: "A beginner's guide to understanding recovery.",
    action: "Read Article",
    category: "Articles",
    icon: FaBookOpen,
    iconClassName: "text-fuchsia-300",
    glowClassName: "bg-fuchsia-500/15",
  },
  {
    title: "Managing Triggers",
    description: "Practical tips to identify and navigate triggers.",
    action: "Watch Video",
    category: "Videos",
    icon: FaPlay,
    iconClassName: "text-cyan-300",
    glowClassName: "bg-cyan-500/15",
  },
  {
    title: "Building Healthy Habits",
    description: "Small changes that create big results.",
    action: "Use Toolkit",
    category: "Tools",
    icon: FaHeart,
    iconClassName: "text-violet-300",
    glowClassName: "bg-violet-500/15",
  },
  {
    title: "Self-Care Planner",
    description: "Plan daily self-care and track your progress.",
    action: "Download",
    category: "Workbooks",
    icon: FaBookOpen,
    iconClassName: "text-purple-300",
    glowClassName: "bg-purple-500/15",
  },
  {
    title: "Anxiety & Addiction",
    description: "How they're connected and how to cope.",
    action: "Read Article",
    category: "Articles",
    icon: FaPersonWalking,
    iconClassName: "text-fuchsia-300",
    glowClassName: "bg-fuchsia-500/15",
  },
  {
    title: "Sleep Better",
    description: "Tips for improving sleep in early recovery.",
    action: "Watch Video",
    category: "Videos",
    icon: FaSpa,
    iconClassName: "text-emerald-300",
    glowClassName: "bg-emerald-500/15",
  },
  {
    title: "Nutrition Guide",
    description: "Fuel your body, support your mind.",
    action: "Read Guide",
    category: "For Families",
    icon: FaHeart,
    iconClassName: "text-amber-300",
    glowClassName: "bg-amber-500/15",
  },
  {
    title: "Mindfulness Basics",
    description: "Simple practices to stay present.",
    action: "Try Exercise",
    category: "Tools",
    icon: FaLeaf,
    iconClassName: "text-cyan-300",
    glowClassName: "bg-cyan-500/15",
  },
] as const

export type Resource = (typeof resources)[number]
export type ResourceCategory = (typeof resourceCategories)[number]

export { FaArrowRightLong, FaUserGroup }
