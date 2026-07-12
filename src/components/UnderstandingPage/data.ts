import {
  FaArrowRightLong,
  FaBrain,
  FaCircleExclamation,
  FaHeartPulse,
  FaPeopleGroup,
  FaPersonWalking,
  FaSeedling,
} from "react-icons/fa6"

export const topics = [
  { value: "addiction", label: "What is Addiction?", icon: FaBrain },
  { value: "causes", label: "Causes", icon: FaSeedling },
  { value: "symptoms", label: "Signs & Symptoms", icon: FaHeartPulse },
  { value: "types", label: "Types", icon: FaCircleExclamation },
  { value: "brain", label: "The Brain", icon: FaBrain },
  { value: "myths", label: "Myths & Facts", icon: FaPeopleGroup },
] as const

export const impacts = [
  { title: "Mind", description: "Thoughts, mood, and mental health.", icon: FaHeartPulse, iconClassName: "text-fuchsia-300", glowClassName: "bg-fuchsia-500/15" },
  { title: "Body", description: "Physical health, sleep, and energy.", icon: FaPersonWalking, iconClassName: "text-violet-300", glowClassName: "bg-violet-500/15" },
  { title: "Relationships", description: "Family, friends, and connections.", icon: FaPeopleGroup, iconClassName: "text-purple-300", glowClassName: "bg-purple-500/15" },
  { title: "Life", description: "Work, school, and purpose.", icon: FaSeedling, iconClassName: "text-cyan-300", glowClassName: "bg-cyan-500/15" },
] as const

export const tabContent = {
  addiction: {
    title: "What is Addiction?",
    paragraphs: [
      "Addiction is a chronic, relapsing condition that affects the brain, behavior, motivation, and related circuits.",
      "It's not a lack of willpower. It's a health condition—one that treatment and support can help.",
    ],
    points: ["Affects anyone, regardless of age, gender, or background", "Can involve substances or behaviors", "Is treatable, and recovery is possible"],
  },
  causes: {
    title: "What Causes Addiction?",
    paragraphs: ["Addiction develops through a mix of biology, environment, experiences, and repeated exposure.", "Understanding the factors involved can help remove shame and make room for effective support."],
    points: ["Stress and trauma can increase vulnerability", "Genetics can influence risk", "Supportive environments can strengthen recovery"],
  },
  symptoms: {
    title: "Signs & Symptoms",
    paragraphs: ["Addiction can look different from person to person, but patterns often show up in daily life.", "Noticing a change is a reason to reach out, not a reason to judge yourself or someone you love."],
    points: ["Difficulty stopping or cutting back", "Continuing despite negative consequences", "Strong cravings or withdrawal symptoms"],
  },
  types: {
    title: "Types of Addiction",
    paragraphs: ["Addiction can involve substances, behaviors, or both. Every experience deserves care and understanding.", "The right support starts with an honest conversation about what is happening."],
    points: ["Substance use disorders", "Behavioral addictions", "Co-occurring mental health conditions"],
  },
  brain: {
    title: "Addiction and the Brain",
    paragraphs: ["Addiction changes reward, stress, and decision-making systems in the brain.", "The brain can heal and adapt with time, treatment, and consistent support."],
    points: ["Recovery can change brain pathways", "Cravings are manageable", "Healthy routines support healing"],
  },
  myths: {
    title: "Myths & Facts",
    paragraphs: ["Misunderstanding addiction can create shame and keep people from asking for help.", "Accurate information makes compassion and recovery possible."],
    points: ["Addiction is not a moral failure", "People do not have to recover alone", "Treatment and recovery are possible"],
  },
} as const

export { FaArrowRightLong }
