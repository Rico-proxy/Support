import {
  FaCommentDots,
  FaHeart,
  FaLocationDot,
  FaPeopleGroup,
  FaPhoneVolume,
  FaUsers,
} from "react-icons/fa6"

export const supportOptions = [
  {
    title: "Talk to Someone",
    description: "24/7 helpline confidential support anytime, day or night.",
    primaryAction: "Call or Text 988",
    secondaryAction: "Chat Online",
    icon: FaPhoneVolume,
    iconClassName: "text-cyan-300",
    glowClassName: "bg-cyan-500/15",
  },
  {
    title: "Online Community",
    description: "Connect with others who understand what you're going through.",
    primaryAction: "Join Community",
    secondaryAction: undefined,
    icon: FaUsers,
    iconClassName: "text-violet-300",
    glowClassName: "bg-violet-500/15",
  },
  {
    title: "Find Local Support",
    description: "Find meetings, therapy, and treatment centers near you.",
    primaryAction: "Find Near You",
    secondaryAction: undefined,
    icon: FaLocationDot,
    iconClassName: "text-amber-300",
    glowClassName: "bg-amber-500/15",
  },
  {
    title: "Support for Loved Ones",
    description: "Resources and guidance for families and friends who want to help.",
    primaryAction: "Learn More",
    secondaryAction: undefined,
    icon: FaPeopleGroup,
    iconClassName: "text-fuchsia-300",
    glowClassName: "bg-fuchsia-500/15",
  },
] as const

export const supportAudience = [
  "I need to talk now",
  "I want to join a group",
  "I'm looking for treatment",
  "I'm supporting someone",
] as const

export { FaCommentDots, FaHeart }
